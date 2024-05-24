import styled from 'styled-components';

const ProjectPageContainer = styled.div`
  display: flex;
  margin: 30px;
  gap: 50px;
`;

const DeleteTaskBtn = styled.button`
  width: 10%;
  padding: 10px;
  background-color: #ff4d4d;
  color: white;
  border: none;

  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #ff1a1a;
    transform: scale(1.02);
  }
`;

export { ProjectPageContainer, DeleteTaskBtn };
