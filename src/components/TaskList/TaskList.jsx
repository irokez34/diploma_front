// import { useContext } from 'react';
import {
  CreateTaskButton,
  TaskContainer,
  TaskListContainer,
  TaskListUl,
} from './TaskList.styled';
// import { ModalContext } from 'context';

const TaskList = ({ createTaskModal, taskEl, role }) => {
  return (
    <TaskContainer>
      <TaskListContainer>
        {role === 'owner' && (
          <CreateTaskButton onClick={createTaskModal}>
            + CREATE TASK
          </CreateTaskButton>
        )}
        <TaskListUl>{taskEl}</TaskListUl>
      </TaskListContainer>

      {/*//userAttach={sendAttach} */}
    </TaskContainer>
  );
};

export default TaskList;
