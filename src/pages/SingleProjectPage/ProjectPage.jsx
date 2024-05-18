import NavBar from '../../components/NavBarProjectPage/NavBarProjectPage.jsx';

import TaskList from '../../components/TaskList/TaskList';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOneProject } from '../../redux/Projects/operations';
import { selectProject } from '../../redux/Projects/selectors.js';
import { jwtDecode } from 'jwt-decode';
import { createNewTask, getAllTask } from '../../redux/Task/operations.js';

import { selectTasks } from '../../redux/Task/selectos.js';
import { TaskModal } from 'components/TaskModal/TaskModal.jsx';
import { sendAttach } from '../../redux/Attach/operations.js';
// import { selectUserAttachm } from '../../redux/Attach/selectors.js';
import TaskWindow from 'components/TaskWindow/TaskWindow.jsx';
import { TaskListItem } from 'components/TaskList/TaskList.styled.js';
import { ProjectPageContainer } from './ProjectPage.styled.js';

export const ProjectPage = () => {
  const [userRole, setUserRole] = useState('');
  const [modal, setModal] = useState(false);
  const { project_id } = useParams();
  const dispatch = useDispatch();
  const project = useSelector(selectProject);
  const authHeader = localStorage.getItem('token');
  const [, token] = authHeader.split(' ');
  const decode = jwtDecode(token); //decode.sub(user.id)
  const allTask = useSelector(selectTasks);
  // const userAttachm = useSelector(selectUserAttachm);
  const [taskStatus, setTaskStatus] = useState(false);
  const [task, setTask] = useState(null);
  // const { openModal } = useContext(ModalContext);

  const taskWindowHandle = projectTask => {
    setTaskStatus(true);
    setTask(projectTask);
  };
  const getUserRole = useCallback(
    id => {
      if (project) {
        if (project.owner === id) {
          setUserRole('owner');
          localStorage.setItem('UserRole', 'owner');
        } else if (project.clients && project.clients.includes(id)) {
          setUserRole('client');
          localStorage.setItem('UserRole', 'client');
        } else if (project.workers && project.workers.includes(id)) {
          setUserRole('worker');
          localStorage.setItem('UserRole', 'worker');
        }
      }
    },
    [project]
  );
  useEffect(() => {
    const userRole = localStorage.getItem('UserRole');
    setUserRole(userRole);
  }, [userRole]);

  useEffect(() => {
    dispatch(getOneProject(project_id));
    dispatch(getAllTask(project_id));
    getUserRole(decode.sub);
  }, [dispatch, project_id, decode.sub]);

  const handleCloseTaskModal = () => {
    if (modal) {
      setModal(false);
    } else {
      setModal(true);
    }
  };
  const handleCreateTask = data => {
    dispatch(createNewTask(data));
  };

  const httSendAttchm = data => {
    dispatch(sendAttach({ userData: data, project_id }));
  };

  const handleTaskClick = (taskM, taskMId) => {
    taskWindowHandle(taskM);
  };
  const taskElements =
    allTask &&
    allTask.map(taskMap => (
      <TaskListItem key={taskMap._id}>
        <button
          style={{ width: '100%' }}
          onClick={() => handleTaskClick(taskMap, taskMap._id)}
        >
          {taskMap.name.toUpperCase()}
        </button>
      </TaskListItem>
    ));
  return (
    <>
      <NavBar project={project} createTaskModal={handleCloseTaskModal}></NavBar>
      <ProjectPageContainer>
        {allTask && allTask.length === 0 ? (
          <h1 style={{ marginTop: '15px' }}>No Tasks</h1>
        ) : (
          <TaskList
            tasks={allTask}
            role={userRole}
            taskEl={taskElements}
            createTaskModal={handleCloseTaskModal}
          ></TaskList>
        )}
        {taskStatus && (
          <TaskWindow
            task={task}
            projectIdId={project_id}
            sendUserAttach={httSendAttchm}
          ></TaskWindow>
        )}
        {modal && (
          <TaskModal
            onClose={handleCloseTaskModal}
            createTask={handleCreateTask}
            projectId={project_id}
          ></TaskModal>
        )}
      </ProjectPageContainer>
    </>
  );
};
