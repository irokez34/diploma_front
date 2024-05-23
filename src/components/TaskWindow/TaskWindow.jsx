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
  TaskLockedBtn,
} from './TaskWindow.styled';
import moment from 'moment-timezone';
import { ActivityChat } from 'components/Activity/ActivityChat';
import { NotificationMessage } from 'components/Notification-Msg/Notification';

const TaskWindow = ({
  task,
  sendUserAttach,
  openImg,
  role,
  commentSubmit,
  userComments,
  closeTaskBtn,
  attach,
}) => {
  console.log(task);
  const handleFileChange = e => {
    if (!e.target.files[0]) {
      return;
    }
    const file = e.target.files;
    const formdata = new FormData();
    file && formdata.append('file', file[0]);
    sendUserAttach(formdata);
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
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
            marginBottom: '30px',
          }}
        >
          <TaskHead>{task && task.name.toUpperCase()}</TaskHead>
          <TaskInput
            type="file"
            onChange={handleFileChange}
            accept=".jpg, .jpeg, .png"
            disabled={task && task.locked}
          />
          <TaskDescription>{'Description'}</TaskDescription>
          <TaskDescriptionSpan>{task && task.description}</TaskDescriptionSpan>
        </div>
        <NotificationMessage />
        <ActivityChat
          locked={task && task.locked}
          sendAttacmh={sendUserAttach}
          attachm={attach}
          submit={commentSubmit}
          comments={userComments}
          time={converTime}
          getAttachOnclick={attach}
        />
      </TaskDescriptionContainer>
      <TaskDetailsContainer>
        <TaskLockedBtn
          onClick={() => {
            closeTaskBtn(task._id);
          }}
          disabled={role === 'worker' || (task && task.locked)}
        >
          Close Task
        </TaskLockedBtn>
        <TaskDropDown>
          <SeletTask disabled={task && task.locked}>
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
              <TaskDetailsSpan>{`${
                task && task.tracking_time
              } h`}</TaskDetailsSpan>
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
                disabled={role !== 'worker' || (task && task.locked)}
                // value={task && task.logged_time}
                // {role === 'owner' || 'client'}
              ></TaskDetailsInput>
            </TaskDetailsLi>
            <TaskDetailsLi>
              {'Start time'}
              <TaskDetailsSpan>
                {converTime(task && task.creation_time)}
              </TaskDetailsSpan>
            </TaskDetailsLi>
            <TaskDetailsLi>
              {'End time'}
              <TaskDetailsSpan>
                {converTime(task && task.lock_time)}
              </TaskDetailsSpan>
            </TaskDetailsLi>
          </TaskDetailsUl>
        </TaskDetailsListContainer>
      </TaskDetailsContainer>
    </TaskContainerProject>
  );
};

export default TaskWindow;
