import styled from 'styled-components';

const TaskContainerProject = styled.div`
  min-width: 1000px;
  padding: 20px;
  background-color: #d9d9d9;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const TaskHead = styled.h2`
  font-size: 16px;
  line-height: 20px;
`;
const TaskDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const TaskSpan = styled.span``;

const TaskInput = styled.input``;
const TaskDescription = styled.p``;
const TaskDescriptionSpan = styled.span``;
const Container = styled.div``;

const TaskStatus = styled.input``;

const TaskDropDown = styled.div``;
const SeletTask = styled.select``;
const OptionTask = styled.option``;
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

const TaskSubmitBtn = styled.button``;

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
  SeletTask,
  TaskSpan,
  TaskContainerProject,
  TaskInput,
  TaskDescription,
  TaskDescriptionContainer,
  Container,
};
