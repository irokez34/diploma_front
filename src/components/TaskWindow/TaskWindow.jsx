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
  role,
  commentSubmit,
  userComments,
  closeTaskBtn,
  attach,
  status,
  loggedTime,
}) => {
  // console.log(task);
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

  const handleStatus = e => {
    const data = { ...task, status: e.target.value };
    status(data, task._id);
  };
  const handleLoggedTime = e => {
    setTimeout(() => {
      const data = { ...task, logged_time: e.target.value };
      e.target.value > 0 && loggedTime(data, task._id);
    }, 5000);
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
          <SeletTask
            disabled={task && task.locked}
            onChange={handleStatus}
            value={task && task.status}
          >
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
                placeholder={task && task.logged_time}
                min="0"
                max="100"
                id="number"
                // value={task && task.logged_time}
                disabled={role !== 'worker' || (task && task.locked)}
                onChange={handleLoggedTime}
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
