import { useState } from 'react';
import {
  Container,
  OptionTask,
  SeletTask,
  TaskActivity,
  TaskActivityHead,
  TaskActivityInput,
  TaskChat,
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
  TaskStatus,
  TaskSubmitBtn,
} from './TaskWindow.styled';
import moment from 'moment-timezone';
import { useDispatch } from 'react-redux';
import { sendAttach } from '../../redux/Attach/operations';
import { loginUser } from '../../redux/User/operations.js';
import { registerUser } from '../../redux/User/operations.js';

const TaskWindow = ({ task }) => {
  const [fileChoose, setFileChoose] = useState(null);
  const [selectOptions] = useState([
    { value: 'to_do', label: 'To Do' },
    { value: 'in_progress', label: 'In Progress' },
    { value: 'done', label: 'Done' },
  ]);
  const [comment, setComment] = useState('');
  const dispatch = useDispatch();
  const handleFileChange = e => {
    const file = e.target.files[0];
    setFileChoose(file);
  };
  const handleRegister = () => {
    dispatch(
      registerUser({
        name: 'Leha Trembita',
        password: '123',
        username: 'Leha Trembita',
      })
    );
  };
  const handleLogin = () => {
    dispatch(loginUser({ username: 'Leha Trembita', password: '123' }));
  };
  const handleSubmit = () => {
    if (fileChoose !== null) {
      const formdata = new FormData();
      formdata.append('user/attach', fileChoose);
      console.log(formdata);
      // const data = { formdata, ...task.id };
      // dispatch(sendAttach(formdata));
    } else {
      console.log(comment);
    }
  };
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

  return (
    <TaskContainerProject>
      <TaskDescriptionContainer>
        <TaskHead>{task.title}</TaskHead>
        <TaskInput type="file" onChange={handleFileChange}></TaskInput>
        <TaskDescription>{'Description'}</TaskDescription>
        <TaskDescriptionSpan>{task.description}</TaskDescriptionSpan>
        <TaskActivity>
          <TaskActivityHead>{'Activity'}</TaskActivityHead>
          <TaskChat>
            <TaskActivityInput
              type="text"
              onChange={e => {
                setComment(e.target.value);
              }}
              value={comment}
              disabled={fileChoose !== null}
            ></TaskActivityInput>
          </TaskChat>
        </TaskActivity>
        <TaskSubmitBtn onClick={handleSubmit}>{'Submit'}</TaskSubmitBtn>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleRegister}>Register</button>
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
              <TaskDetailsSpan>{'5h'}</TaskDetailsSpan>
            </TaskDetailsLi>
            <TaskDetailsLi>
              {'Time tracking'}
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
