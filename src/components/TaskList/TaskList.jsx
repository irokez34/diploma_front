// import { useContext } from 'react';
import TaskWindow from 'components/TaskWindow/TaskWindow';
import {
  CreateTaskButton,
  TaskContainer,
  TaskListContainer,
  TaskListItem,
  TaskListUl,
} from './TaskList.styled';
import { useEffect, useMemo, useState } from 'react';

// import { ModalContext } from 'context';

const TaskList = ({ tasks, createTaskModal, projectId, sendAttach }) => {
  const [taskStatus, setTaskStatus] = useState(false);
  const [task, setTask] = useState(null);
  const [role, setRole] = useState(null);
  // const { openModal } = useContext(ModalContext);

  const taskWindowHandle = projectTask => {
    setTaskStatus(true);
    setTask(projectTask);
  };
  const taskElements =
    tasks &&
    tasks.map(taskMap => (
      <TaskListItem key={taskMap._id}>
        <button
          style={{ width: '100%' }}
          onClick={() => taskWindowHandle(taskMap)}
        >
          {taskMap.name.toUpperCase()}
        </button>
      </TaskListItem>
    ));

  useEffect(() => {
    const userRole = localStorage.getItem('UserRole');
    setRole(userRole);
  }, [role]);

  return (
    <TaskContainer>
      <TaskListContainer>
        {role === 'owner' && (
          <CreateTaskButton onClick={createTaskModal}>
            + CREATE TASK
          </CreateTaskButton>
        )}
        {tasks && tasks.length === 0 ? (
          <h1 style={{ marginTop: '15px' }}>No Tasks</h1>
        ) : (
          <TaskListUl>{taskElements}</TaskListUl>
        )}
      </TaskListContainer>
      {taskStatus && (
        <TaskWindow
          task={task}
          projectIdId={projectId}
          sendUserAttach={sendAttach}
        ></TaskWindow>
      )}
      {/*//userAttach={sendAttach} */}
    </TaskContainer>
  );
};

export default TaskList;
