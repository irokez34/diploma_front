import { useContext } from 'react';
import {
  CreateTaskButton,
  TaskContainer,
  TaskListItem,
  TaskListUl,
} from './TaskList.styled';
import TaskWindow from 'components/TaskWindow/TaskWindow';

const TaskList = ({ tasks }) => {
  const { openModal } = useContext(ModalContext);
  const taskWindow = id => {
    openModal(
      <>
        <TaskWindow id={id} />
      </>
    );
  };
  const taskElements = tasks.map(task => (
    <a
      href="https://www.youtube.com/watch?v=Bv_4o73RNfQ"
      // потом поменяю на таску когда будет
      target="_blank"
      rel="noopener noreferrer"
    >
      <TaskListItem key={task.id}>{task.title}</TaskListItem>
    </a>
  ));
  {
    /* <button onClick={TaskWindow(task.id)}><TaskListItem key={task.id}>{task.title}</TaskListItem></button> */
  }
  return (
    <TaskContainer>
      <CreateTaskButton>+ CREATE TASK</CreateTaskButton>
      <TaskListUl>{taskElements}</TaskListUl>
    </TaskContainer>
  );
};

export default TaskList;
