import {
  TaskActivity,
  TaskActivityHead,
  TaskActivityInput,
  TaskChat,
  TaskChatList,
} from './ActivityChat.styled';

export const ActivityChat = ({ comments, attachments, submit }) => {
  // const

  const comment =
    comments &&
    comments.map(com => (
      <li>
        <span>{com.data}</span>
      </li>
    ));

  return (
    <TaskActivity>
      <TaskActivityHead>{'Activity'}</TaskActivityHead>
      <TaskChat>
        <TaskChatList>{comment}</TaskChatList>
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
