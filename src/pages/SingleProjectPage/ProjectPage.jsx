import NavBar from '../../components/NavBarProjectPage/NavBarProjectPage.jsx';
import TaskList from '../../components/TaskList/TaskList';
import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOneProject } from '../../redux/Projects/operations';
import { selectProject } from '../../redux/Projects/selectors.js';
import {
  createNewTask,
  getAllTask,
  getOneTask,
} from '../../redux/Task/operations.js';

import { selectTask, selectTasks } from '../../redux/Task/selectos.js';
import { TaskModal } from 'components/TaskModal/TaskModal.jsx';
import { sendAttach } from '../../redux/Attach/operations.js';
// import { selectUserAttachm } from '../../redux/Attach/selectors.js';
import TaskWindow from 'components/TaskWindow/TaskWindow.jsx';
import { TaskListItem } from 'components/TaskList/TaskList.styled.js';
import { ProjectPageContainer } from './ProjectPage.styled.js';

export const ProjectPage = () => {
  const [userId] = useState(localStorage.getItem('userID'));
  const [modal, setModal] = useState(false);
  const { project_id } = useParams();
  const dispatch = useDispatch();
  const project = useSelector(selectProject);
  const allTask = useSelector(selectTasks);
  // const userAttachm = useSelector(selectUserAttachm);
  const [taskStatus, setTaskStatus] = useState(false);
  const userTask = useSelector(selectTask);
  const [userRole, setUserRole] = useState('');
  const taskWindowHandle = useMemo(() => {
    return projectTask => {
      setTaskStatus(true);
      dispatch(getOneTask(projectTask._id));
    };
  }, [dispatch]);

  useEffect(() => {
    dispatch(getOneProject(project_id));
    dispatch(getAllTask(project_id));
  }, [dispatch, project_id]);

  useEffect(() => {
    if (project) {
      if (userId === project.owner) {
        setUserRole('owner');
      } else if (project.clients.includes(userId)) {
        setUserRole('client');
      } else if (project.workers.includes(userId)) {
        setUserRole('worker');
      }
    }
  }, [userId, project]);

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

  const taskElements =
    allTask &&
    allTask.map(taskMap => (
      <TaskListItem key={taskMap._id}>
        <button
          style={{ width: '100%' }}
          onClick={() => taskWindowHandle(taskMap)}
        >
          {taskMap.name.toUpperCase()}
        </button>
      </TaskListItem>
    ));
  return (
    <>
      <NavBar
        project={project}
        createTaskModal={handleCloseTaskModal}
        role={userRole}
        task={userTask}
      ></NavBar>
      <ProjectPageContainer>
        {/* {allTask && allTask.length === 0 ? (
          <h1 style={{ marginTop: '15px' }}>No Tasks</h1>
        ) : ( */}
        <TaskList
          tasks={allTask}
          role={userRole}
          taskEl={taskElements}
          createTaskModal={handleCloseTaskModal}
        ></TaskList>
        {/* ) */}
        {taskStatus && (
          <TaskWindow
            role={userRole}
            task={userTask}
            projectIdId={project_id}
            sendUserAttach={httSendAttchm}
          ></TaskWindow>
        )}
        {modal && (
          <TaskModal
            userRole={userRole}
            onClose={handleCloseTaskModal}
            createTask={handleCreateTask}
            projectId={project_id}
          ></TaskModal>
        )}
      </ProjectPageContainer>
    </>
  );
};
