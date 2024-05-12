// import { useContext } from 'react';
import TaskWindow from 'components/TaskWindow/TaskWindow';
import {
  CreateTaskButton,
  TaskContainer,
  TaskListContainer,
  TaskListItem,
  TaskListUl,
} from './TaskList.styled';
import { useState } from 'react';

// import { ModalContext } from 'context';

const TaskList = ({ tasks }) => {
  const [taskStatus, setTaskStatus] = useState(false);
  const [task, setTask] = useState(null);
  // const { openModal } = useContext(ModalContext);

  const taskWindowHandle = projectTask => {
    setTaskStatus(true);
    setTask(projectTask);
  };
  const taskElements = tasks.map(taskMap => (
    <TaskListItem key={taskMap.id}>
      <button onClick={() => taskWindowHandle(taskMap)}>{taskMap.title}</button>
    </TaskListItem>
  ));

  return (
    <TaskContainer>
      <TaskListContainer>
        <CreateTaskButton>+ CREATE TASK</CreateTaskButton>
        <TaskListUl>{taskElements}</TaskListUl>
      </TaskListContainer>
      {taskStatus && <TaskWindow task={task}></TaskWindow>}
    </TaskContainer>
  );
};

export default TaskList;
