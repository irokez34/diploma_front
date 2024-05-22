import { useState } from 'react';
import {
  CommentContainer,
  MediaBtn,
  TaskActivity,
  TaskActivityHead,
  TaskActivityInput,
  TaskChat,
  TaskChatItem,
  TaskChatList,
} from './ActivityChat.styled';
import {
  TaskInput,
  TaskSubmitBtn,
} from 'components/TaskWindow/TaskWindow.styled';

export const ActivityChat = ({
  comments,
  submit,
  time,
  getAttachOnclick,
  userAttach,
}) => {
  const [userComment, setUserComment] = useState('');
  const [FileChoose, setFileChoose] = useState('');
  const handleFileChange = e => {
    if (!e.target.files[0]) {
      return;
    }
    const file = e.target.files;
    const formdata = new FormData();
    file && formdata.append('file', file[0]);
    setFileChoose(formdata);
  };

  const handleSubmit = () => {
    submit(userComment);
    userAttach(FileChoose);
    setUserComment('');
    setFileChoose('');
  };

  const comment =
    comments &&
    comments.map(com => (
      <TaskChatItem key={com._id}>
        <span style={{ display: 'flex', justifyContent: 'space-between' }}>
          {com.username}
          <span style={{ color: '#686868' }}>{time(com.last_updated)}</span>
        </span>
        <CommentContainer>
          {com.data}
          {com.attachments.length > 0 && (
            <MediaBtn onClick={() => getAttachOnclick(com.attachments[0])}>
              {'Media'}
            </MediaBtn>
          )}
        </CommentContainer>
      </TaskChatItem>
    ));

  return (
    <TaskActivity>
      <TaskInput type="file" onChange={handleFileChange} />
      <TaskActivityHead>{'Activity'}</TaskActivityHead>
      <TaskChat>
        <TaskChatList>{comment}</TaskChatList>
        <TaskActivityInput
          as="textarea"
          rows="5"
          onChange={e => {
            setUserComment(e.target.value);
          }}
          value={userComment}
        />
        <TaskSubmitBtn onClick={handleSubmit}>{'Submit'}</TaskSubmitBtn>
      </TaskChat>
    </TaskActivity>
  );
};
