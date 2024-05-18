import NavBar from '../../components/NavBarProjectPage/NavBarProjectPage.jsx';

import TaskList from '../../components/TaskList/TaskList';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOneProject } from '../../redux/Projects/operations';
import { selectProject } from '../../redux/Projects/selectors.js';
import { jwtDecode } from 'jwt-decode';
import { createNewTask, getAllTask } from '../../redux/Task/operations.js';

import { selectTasks } from '../../redux/Task/selectos.js';
import { TaskModal } from 'components/TaskModal/TaskModal.jsx';
import { sendAttach } from '../../redux/Attach/operations.js';

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

  const getUserRole = id => {
    if (project && project.owner === id) {
      setUserRole('owner');
      localStorage.setItem('UserRole', 'owner');
    } else if (project && project.clients.find(id => id === id)) {
      setUserRole('client');
      localStorage.setItem('UserRole', 'client');
    } else if (project && project.workers.find(id => id === id)) {
      setUserRole('worker');
      localStorage.setItem('UserRole', 'worker');
    }
  };
  useEffect(() => {
    dispatch(getOneProject(project_id));
    getUserRole(decode.sub);
    dispatch(getAllTask(project_id));
  }, [dispatch, project_id]);

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

  return (
    <>
      {/* <ProjectPageContainer> */}
      <NavBar project={project} createTaskModal={handleCloseTaskModal}></NavBar>
      <TaskList
        sendAttach={httSendAttchm}
        // projectId={project_id}
        tasks={allTask}
        createTaskModal={handleCloseTaskModal}
      ></TaskList>
      {modal && (
        <TaskModal
          onClose={handleCloseTaskModal}
          createTask={handleCreateTask}
          projectId={project_id}
        ></TaskModal>
      )}
      {/* createTask={}*/}
      {/*
        <TaskModalWindow></TaskModalWindow>
    </ProjectPageContainer> */}
    </>
  );
};
