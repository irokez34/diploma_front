import NavBar from '../../components/NavBarProjectPage/NavBarProjectPage.jsx';
import TaskList from '../../components/TaskList/TaskList';
import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  getHistoryProject,
  getOneProject,
} from '../../redux/Projects/operations';
import { selectProject } from '../../redux/Projects/selectors.js';
import {
  closeTask,
  createNewTask,
  getAllTask,
  getOneTask,
} from '../../redux/Task/operations.js';

import {
  selectTask,
  selectTaskClose,
  selectTasks,
} from '../../redux/Task/selectos.js';
import { TaskModal } from 'components/TaskModal/TaskModal.jsx';
import { getAttach, sendAttach } from '../../redux/Attach/operations.js';
// import { selectUserAttachm } from '../../redux/Attach/selectors.js';
import TaskWindow from 'components/TaskWindow/TaskWindow.jsx';
import { TaskListItem } from 'components/TaskList/TaskList.styled.js';
import { ProjectPageContainer } from './ProjectPage.styled.js';
import { generationInviteCode } from '../../redux/InviteCode/operations.js';
import { selectCode, selectType } from '../../redux/InviteCode/selectors.js';
import {
  createComments,
  getComments,
} from '../../redux/Comments/operations.js';

import { selectAttachID } from '../../redux/Attach/selectors';
import { selectComments } from '../../redux/Comments/selectors.js';
export const ProjectPage = () => {
  const [userId] = useState(localStorage.getItem('userID'));
  const [modal, setModal] = useState(false);
  const { project_id } = useParams();
  const dispatch = useDispatch();
  const project = useSelector(selectProject);
  const allTask = useSelector(selectTasks);
  // const userAttachm = useSelector(selectUserAttachm);
  const [taskStatus, setTaskStatus] = useState(false);
  const selectorinviteCode = useSelector(selectCode);
  const userType = useSelector(selectType);
  const userTask = useSelector(selectTask);
  const [userRole, setUserRole] = useState('');
  const attacmID = useSelector(selectAttachID);
  const userComments = useSelector(selectComments);

  const taskWindowHandle = useMemo(() => {
    return projectTask => {
      setTaskStatus(true);
      dispatch(getComments(projectTask._id));
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
    setModal(false);
  };

  const httSendAttchm = data => {
    dispatch(sendAttach({ userData: data, project_id }));
  };

  const InviteCodeGeneration = data => {
    const userData = { type: data, project_id };
    dispatch(generationInviteCode(userData));
  };

  const handleCloseTask = taskId => {
    dispatch(closeTask(taskId));
    setTaskStatus(false);
  };

  const handleGetHistory = async () => {
    const resultAction = await dispatch(getHistoryProject(project_id));
    if (getHistoryProject.fulfilled.match(resultAction)) {
      const data = resultAction.payload;
      const blob = new Blob([data], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'history.log';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } else {
      console.error('Problem with installation:', resultAction.payload);
    }
  };

  const handleSubmiComment = data => {
    // if (!data) {
    //   alert('fill comment field');
    //   return;
    // }
    const userData = {
      data,
      task_id: userTask._id,
      attachments: attacmID ? [attacmID] : [],
    };
    dispatch(createComments(userData));
  };

  console.log(userRole);
  const taskElements =
    allTask &&
    allTask.map(taskMap => (
      <TaskListItem key={taskMap._id}>
        <button
          style={{ width: '100%', padding: '10px 0' }}
          onClick={() => taskWindowHandle(taskMap)}
        >
          {taskMap.name.toUpperCase()}
        </button>
      </TaskListItem>
    ));

  const handleGetAttachm = data => {
    dispatch(getAttach(data));
  };

  return (
    <>
      <NavBar
        history={handleGetHistory}
        type={userType}
        code={selectorinviteCode}
        inviteCode={InviteCodeGeneration}
        project={project}
        role={userRole}
      />
      <ProjectPageContainer>
        <TaskList
          tasks={allTask}
          role={userRole}
          taskEl={taskElements}
          createTaskModal={handleCloseTaskModal}
        />

        {taskStatus && (
          <TaskWindow
            closeTaskBtn={handleCloseTask}
            // openImg={handleOpenImg}
            attach={handleGetAttachm}
            userComments={userComments}
            commentSubmit={handleSubmiComment}
            role={userRole}
            task={userTask}
            sendUserAttach={httSendAttchm}
          />
        )}
        {modal && (
          <TaskModal
            userRole={userRole}
            onClose={handleCloseTaskModal}
            createTask={handleCreateTask}
            projectId={project_id}
          />
        )}
      </ProjectPageContainer>
    </>
  );
};
