// import { useContext } from 'react';
import {
  CreateTaskButton,
  TaskContainer,
  TaskListContainer,
  TaskListUl,
} from './TaskList.styled';
// import { ModalContext } from 'context';

const TaskList = ({ createTaskModal, taskEl, role }) => {
  console.log(role);
  return (
    <TaskContainer>
      <TaskListContainer>
        <CreateTaskButton onClick={createTaskModal} disabled={role !== 'owner'}>
          + CREATE TASK
        </CreateTaskButton>

        <TaskListUl>{taskEl}</TaskListUl>
      </TaskListContainer>

      {/*//userAttach={sendAttach} */}
    </TaskContainer>
  );
};

export default TaskList;
