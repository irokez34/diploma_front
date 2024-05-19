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

const TaskWindow = ({ task, sendUserAttach, role }) => {
  const [fileChoose, setFileChoose] = useState(null);
  const handleFileChange = e => {
    const file = e.target.files;
    setFileChoose(file);
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
  const handleSubmit = () => {
    const formdata = new FormData();
    formdata.append('file', fileChoose[0]);
    sendUserAttach(formdata);
    setFileChoose(null);
  };

  return (
    <TaskContainerProject>
      <TaskDescriptionContainer>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <TaskHead>{task && task.name.toUpperCase()}</TaskHead>
          <TaskInput type="file" onChange={handleFileChange}></TaskInput>

          <TaskDescription>{'Description'}</TaskDescription>
          <TaskDescriptionSpan>{task && task.description}</TaskDescriptionSpan>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <ActivityChat submit={handleSubmit} />
          <TaskSubmitBtn onClick={handleSubmit}>{'Submit'}</TaskSubmitBtn>
        </div>
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
              <TaskDetailsSpan>{`${task && task.tracking_time} h`}</TaskDetailsSpan>
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
                disabled={role !== 'worker'}
                // {role === 'owner' || 'client'}
              ></TaskDetailsInput>
            </TaskDetailsLi>
            <TaskDetailsLi>
              {'Start time'}
              <TaskDetailsSpan>{converTime(12313)}</TaskDetailsSpan>
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
