import {
  TaskActivity,
  TaskActivityHead,
  TaskActivityInput,
  TaskChat,
  TaskChatList,
} from './ActivityChat.styled';

export const ActivityChat = ({comments, attachments}) => {
// const 

  
  return (
    <TaskActivity>
      <TaskActivityHead>{'Activity'}</TaskActivityHead>
      <TaskChat>
        <TaskChatList></TaskChatList>
        <TaskActivityInput
          type="text"
          // onChange={e => {
          //   setComment(e.target.value);
          // }}
          // value={comment}
        ></TaskActivityInput>
      </TaskChat>
    </TaskActivity>
  );
};
