import NavBar from 'components/NavBarProjectPage/NavBarProjectPage';
import TaskList from 'components/TaskList/TaskList';
// import { ProjectPageContainer } from './ProjectPage.styled';

export const ProjectPage = () => {
  return (
    <>
      {/* <ProjectPageContainer> */}
      <NavBar></NavBar>
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
