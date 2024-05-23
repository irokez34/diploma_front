import styled from 'styled-components';

const TaskContainerProject = styled.div`
  min-width: 1000px;
  padding: 20px;
  background-color: #d9d9d9;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-height: 400px;
`;
const TaskHead = styled.h2`
  font-size: 16px;
  line-height: 20px;
`;
const TaskDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // gap: 30px;
`;
const TaskSpan = styled.span``;

const TaskInput = styled.input``;
const TaskDescription = styled.p`
  font-size: 18px;
  font-weight: bold;
`;
const TaskDescriptionSpan = styled.span`
  font-size: 16px;
  color: #333;
  line-height: 1.5;
  border: 2px solid #007bff;
  border-radius: 5px;
  padding: 10px;
  background-color: white;
  max-width: 700px;
`;
const Container = styled.div``;

const TaskStatus = styled.input``;

const TaskDropDown = styled.div``;
const SeletTask = styled.select``;
const OptionTask = styled.option``;

const TaskLockedBtn = styled.button`
  width: 150px;
  padding: 0;
  border: none;
  border-radius: 10px;
  padding: 10px;
  background-color: black;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(255, 0, 0, 0.5);
  }

  &:focus {
    outline: none;
  }
  &:disabled {
    opacity: 0.5; /* снижение прозрачности */
    cursor: not-allowed; /* изменение курсора */
  }
`;

const TaskDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
const TaskDetailsUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const TaskDetailsLi = styled.li`
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 14px;
`;
const TaskDetailsP = styled.p`
  position: relative;
  font-size: 14px;
  &:before {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #b1b1b1;
  }
`;
const TaskDetailsSpan = styled.span`
  font-size: 14px;
`;
const TaskDetailsInput = styled.input`
  background-color: transparent;
  border-color: transparent;
  width: 50px;
  font-size: 14px;
`;

const TaskDetailsListContainer = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: column;
  border: 1px solid #b1b1b1;
  border-radius: 10px;
  gap: 15px;
`;

const TaskSubmitBtn = styled.button`
  width: 120px;
  height: 40px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #0056b3;
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    background-color: #ced4da;
    color: #6c757d;
    cursor: not-allowed;
  }
`;

export {
  TaskHead,
  TaskSubmitBtn,
  TaskDetailsP,
  TaskDetailsInput,
  TaskDetailsListContainer,
  TaskDescriptionSpan,
  TaskDetailsLi,
  TaskDetailsUl,
  TaskDetailsContainer,
  TaskDropDown,
  OptionTask,
  TaskDetailsSpan,
  TaskStatus,
  TaskLockedBtn,
  SeletTask,
  TaskSpan,
  TaskContainerProject,
  TaskInput,
  TaskDescription,
  TaskDescriptionContainer,
  Container,
};
