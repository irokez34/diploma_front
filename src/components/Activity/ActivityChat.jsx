import { useState } from 'react';
import {
  CommentContainer,
  DeleteCommentBtn,
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
import { DeleteCommentModal } from 'components/DeleteComment/DeleteCommentModal';

export const ActivityChat = ({
  comments,
  submit,
  time,
  locked,
  getAttachOnclick,
  sendAttacmh,
  deleteComment,
}) => {
  const [userComment, setUserComment] = useState('');
  const [imgModal, setImgModal] = useState(false);
  const [deleComment, setDeleComment] = useState(false);
  const [commentId, setCommentId] = useState(null);
  const closeModal = () => {
    if (imgModal) {
      setImgModal(false);
    } else if (!imgModal) {
      setImgModal(true);
    }
  };

  const handleSubmit = () => {
    submit(userComment);
    setUserComment('');
  };

  const handleCloseModal = comment_id => {
    if (deleComment) {
      setDeleComment(false);
    } else {
      setDeleComment(true);
    }
    setCommentId(comment_id);
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
          <DeleteCommentBtn
            onClick={() => {
              handleCloseModal(com._id);
            }}
          >
            X {/* handleCloseModal(com._id) */}
          </DeleteCommentBtn>
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
      {deleComment && (
        <DeleteCommentModal
          onClose={handleCloseModal}
          deleteComment={() => commentId && deleteComment(commentId)}
        />
      )}
    </TaskActivity>
  );
};
