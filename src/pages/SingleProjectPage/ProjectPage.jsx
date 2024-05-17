import NavBar from '../../components/NavBarProjectPage/NavBarProjectPage.jsx';

import TaskList from '../../components/TaskList/TaskList';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOneProject } from '../../redux/Projects/operations';
import { selectProject } from '../../redux/Projects/selectors.js';
import { jwtDecode } from 'jwt-decode';
import { getAllTask } from '../../redux/Task/operations.js';

import { selectTasks } from '../../redux/Task/selectos.js';
import { TaskModal } from 'components/TaskModal/TaskModal.jsx';

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
    } else if (project && project.clients.find(id => id === id)) {
      setUserRole('client');
    } else if (project && project.workers.find(id => id === id)) {
      setUserRole('worker');
    }
  };
  useEffect(() => {
    dispatch(getOneProject(project_id));
    getUserRole(decode.sub);
    dispatch(getAllTask(project_id));
  }, [dispatch, project_id]);

  const createTaskModal = () => {
    if (modal) {
      setModal(false);
    } else {
      setModal(true);
    }
  };
  return (
    <>
      {/* <ProjectPageContainer> */}
      <NavBar project={project} createTaskModal={createTaskModal}></NavBar>
      <TaskList
        tasks={allTask}
        role={userRole}
        createTaskModal={createTaskModal}
      ></TaskList>
      {modal && <TaskModal onClose={createTaskModal}></TaskModal>} 
      {/* createTask={}*/}
      {/*
        <TaskModalWindow></TaskModalWindow>
    </ProjectPageContainer> */}
    </>
  );
};
