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
import { TaskSubmitBtn } from 'components/TaskWindow/TaskWindow.styled';
import { ImgModal } from 'components/ModalImg/ModalImg';

export const ActivityChat = ({
  comments,
  submit,
  time,
  locked,
  getAttachOnclick,
  sendAttacmh,
}) => {
  const [userComment, setUserComment] = useState('');
  const [imgModal, setImgModal] = useState(false);
  // const [FileChoose, setFileChoose] = useState(new Form);
  // const handleFileChange = e => {
  //   if (!e.target.files[0]) {
  //     return;
  //   }
  //   const file = e.target.files;
  //   const formdata = new FormData();
  //   file && formdata.append('file', file[0]);
  //   setFileChoose(formdata);
  // };
  const closeModal = () => {
    if (imgModal) {
      setImgModal(false);
    } else if (!imgModal) {
      setImgModal(true);
    }
  };

  const handleSubmit = () => {
    submit(userComment);
    // sendAttacmh(FileChoose);
    setUserComment('');
    // setFileChoose('');
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
            <MediaBtn
              onClick={() => {
                getAttachOnclick(com.attachments[0]);
                setImgModal(true);
              }}
            >
              {'Media'}
            </MediaBtn>
          )}
          {imgModal && <ImgModal onClose={closeModal} />}
        </CommentContainer>
      </TaskChatItem>
    ));

  return (
    <TaskActivity>
      {/* <TaskInput type="file" onChange={handleFileChange} /> */}
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
          disabled={locked}
        />
        <TaskSubmitBtn onClick={handleSubmit} disabled={locked}>
          {'Submit'}
        </TaskSubmitBtn>
      </TaskChat>
    </TaskActivity>
  );
};
