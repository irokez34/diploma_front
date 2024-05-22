import styled from 'styled-components';

const TaskActivityInput = styled.input`
  width: 300px;
  padding: 10px;
  box-sizing: border-box;
  resize: none; /* Prevent resizing */
  min-height: 50px;
`;
const TaskActivityHead = styled.h3``;
const TaskActivity = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const TaskChat = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const TaskChatItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 5px;
  max-width: 600px;
`;

const TaskChatList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 13px;
  max-height: 300px;
  overflow-x: auto;
  padding: 5px;
`;
const CommentContainer = styled.span`
  padding: 5px;
  background-color: #EFEFEF;
  border-radius: 5px;

  flex-wrap: wrap; /* Allow wrapping to the next line */
  width: 250px; /* Maximum width before wrapping */
  overflow-wrap: break-word; /* Break words if necessary */
`;
const MediaBtn = styled.button`
  border: 1px solid red;
  width: 100px;
`;
export {
  TaskActivity,
  MediaBtn,
  TaskActivityHead,
  TaskActivityInput,
  CommentContainer,
  TaskChatItem,
  TaskChat,
  TaskChatList,
};
