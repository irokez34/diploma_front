import NavBar from '../../components/NavBarProjectPage/NavBarProjectPage.jsx';

import TaskList from '../../components/TaskList/TaskList';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOneProject } from '../../redux/Projects/operations';
import { selectProject } from '../../redux/Projects/selectors.js';
import { jwtDecode } from 'jwt-decode';
import { getAllTask } from '../../redux/Task/operations.js';

export const ProjectPage = () => {
  const [userRole, setUserRole] = useState('');
  const { project_id } = useParams();
  const dispatch = useDispatch();
  const project = useSelector(selectProject);
  const authHeader = localStorage.getItem('token');
  const [, token] = authHeader.split(' ');
  const decode = jwtDecode(token); //decode.sub(user.id)

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
    dispatch(getAllTask());
  }, [dispatch, project_id]);
  return (
    <>
      {/* <ProjectPageContainer> */}
      <NavBar project={project}></NavBar>
      <TaskList
        tasks={[
          {
            id: 1,
            title: 'Почистить кухню',
            description: 'Вымыть посуду и протереть поверхности',
          },
          {
            id: 2,
            title: 'Сделать утреннюю зарядку',
            description: '10 минут физических упражнений',
          },
          {
            id: 3,
            title: 'Прочитать 20 страниц книги',
            description: 'Интеллектуальная нагрузка',
          },
          {
            id: 4,
            title: 'Отправить 5 электронных писем',
            description: 'Ответить на важные письма',
          },
          {
            id: 5,
            title: 'Пойти на прогулку 30 минут',
            description: 'Подышать свежим воздухом',
          },
        ]}
      ></TaskList>
      {/*
      <TaskModalWindow></TaskModalWindow>
    </ProjectPageContainer> */}
    </>
  );
};
