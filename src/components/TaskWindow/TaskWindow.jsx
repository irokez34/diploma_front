import { useState } from 'react';
import {
  OptionTask,
  SeletTask,
  TaskContainerProject,
  TaskDescription,
  TaskDescriptionContainer,
  TaskDescriptionSpan,
  TaskDetailsContainer,
  TaskDetailsInput,
  TaskDetailsLi,
  TaskDetailsListContainer,
  TaskDetailsP,
  TaskDetailsSpan,
  TaskDetailsUl,
  TaskDropDown,
  TaskHead,
  TaskInput,
  TaskSubmitBtn,
} from './TaskWindow.styled';
import moment from 'moment-timezone';
import { ActivityChat } from 'components/Activity/ActivityChat';

const TaskWindow = ({ task, sendUserAttach }) => {
  const [fileChoose, setFileChoose] = useState(null);
  const handleFileChange = e => {
    const file = e.target.files;
    setFileChoose(file);
  };
  // const handleRegister = () => {
  //   dispatch(
  //     registerUser({
  //       name: 'Leha Trembita',
  //       password: '123',
  //       username: 'Leha Trembita',
  //     })
  //   );
  // };
  // const handleLogin = () => {
  //   dispatch(loginUser({ username: 'Leha Trembita', password: '123' }));
  // };

  const converTime = date => {
    if (!date) {
      return 'No Time';
    }
    const formattedTime = moment
      .unix(date)
      .tz('Europe/Kiev')
      .format('DD.MM.YYYY HH:mm');
    return formattedTime;
  };
  const handleSubmit = () => {
    const formdata = new FormData();
    formdata.append('file', fileChoose[0]);
    sendUserAttach(formdata);
    setFileChoose(null);
  };

  return (
    <TaskContainerProject>
      <TaskDescriptionContainer>
        <TaskHead>{task.title}</TaskHead>
        <TaskInput type="file" onChange={handleFileChange}></TaskInput>
        <TaskDescription>{'Description'}</TaskDescription>
        <TaskDescriptionSpan>{task.description}</TaskDescriptionSpan>
        <ActivityChat></ActivityChat>
        <TaskSubmitBtn onClick={handleSubmit}>{'Submit'}</TaskSubmitBtn>
        {/* <button onClick={handleLogin}>Login</button>
        <button onClick={handleRegister}>Register</button> */}
      </TaskDescriptionContainer>
      <TaskDetailsContainer>
        <TaskDropDown>
          <SeletTask>
            <OptionTask value="to_do">{'To Do'}</OptionTask>
            <OptionTask value="in_progress">{'In Progress'}</OptionTask>
            <OptionTask value="done">{'Done'}</OptionTask>
          </SeletTask>
        </TaskDropDown>
        <TaskDetailsListContainer>
          <TaskDetailsP>{'Details'}</TaskDetailsP>
          <TaskDetailsUl>
            <TaskDetailsLi>
              {'Original estimate'}
              {/* owner */}
              <TaskDetailsSpan>{`${task.tracking_time}h`}</TaskDetailsSpan>
            </TaskDetailsLi>
            <TaskDetailsLi>
              {'Logged Time'}
              {/* worker */}
              <TaskDetailsInput
                type="number"
                placeholder="0"
                min="0"
                max="100"
                id="number"
              ></TaskDetailsInput>
            </TaskDetailsLi>
            <TaskDetailsLi>
              {'Start time'}
              <TaskDetailsSpan>{converTime(1715609410)}</TaskDetailsSpan>
            </TaskDetailsLi>
            <TaskDetailsLi>
              {'End time'}
              <TaskDetailsSpan>{converTime()}</TaskDetailsSpan>
            </TaskDetailsLi>
          </TaskDetailsUl>
        </TaskDetailsListContainer>
      </TaskDetailsContainer>
    </TaskContainerProject>
  );
};

export default TaskWindow;
