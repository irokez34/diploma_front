import {
  Container,
  TaskActivity,
  TaskChat,
  TaskContainerProject,
  TaskDescription,
  TaskHead,
  TaskInput,
} from './TaskWindow.styled';

const TaskWindow = ({ task }) => {
  console.log(task.id);
  return (
    <TaskContainerProject>
      <Container>
        <TaskHead>TASK NAME {task.id}</TaskHead>
        <TaskInput></TaskInput>
        {/* choose file */}
        <TaskDescription>
          Description
          
          <span>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos{' '}
          </span>
        </TaskDescription>
      </Container>
      <Container>
        <TaskActivity>
          <TaskChat></TaskChat>
        </TaskActivity>
      </Container>
      {/* <Container>
        <TaskStatus>
          <TaskDetails>
            <TaskDetailsP></TaskDetailsP>
            <TaskDetailsP></TaskDetailsP>
          </TaskDetails>
        </TaskStatus>
      </Container> */}
    </TaskContainerProject>
  );
};

export default TaskWindow;
