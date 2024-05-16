import styled from 'styled-components';

const HelloH2 = styled.h2``;
const ChooseContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d9d9d9;
  gap: 20px;
  padding: 27px;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
`;

const ProjectsBtn = styled.button`
  border-radius: 10px;
  border: 1px solid transparent;
  padding: 20px;
  background-color: #8f8f8f;
  color: #ffffff;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
  transition: all 0.3s ease;

  &:hover {
    background-color: #6f6f6f;
    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.35);
    transform: translateY(-2px);
  }
`;
const Container = styled.div`
  position: absolute;
  display: flex;
  gap: 50px;
  flex-direction: column;
  align-items: center;
  top: 30%;
  left: 42%;
  padding: 15px;
  border: 1px solid black;
`;

const IntiveCodeContainer = styled.div`
  padding: 37px;
  position: absolute;
  top: 65%;
  left: 20%;
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #d9d9d9;
  border: 1px solid #000000;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
`;
const CloseWindowBtn = styled.button`
  position: absolute;
  top: 3%;
  left: 3%;
 
  }
`;
const InviteCodeInput = styled.input`
  width: 275px;
  height: 48px;
  background-color: white;
  border-color: transparent;
`;
const InviteCodeBtn = styled.button`
  width: 275px;
  font-size: 24px;
  font-weight: 400;
  color: white;
  background-color: #8f8f8f;
  padding: 10px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #6f6f6f;
    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.35);
    transform: translateY(-2px);
`;

const ProjectsContainer = styled.div`
  padding: 37px;
  position: absolute;
  top: 65%;
  left: 70%;
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #d9d9d9;
  border: 1px solid #000000;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
`;

const AddProjectBtn = styled.button`
  background-color: white;
  font-size: 16px;
  font-weight: 400;
  padding: 20px;
  width: 275px;
  border: none; 
  border-radius: 8px; 
  transition: all 0.3s ease; 

  &:hover {
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1); 
    transform: scale(1.02); 
  }

  &:active {
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
    transform: scale(1); 
`;
const PorjectsList = styled.ul``;
export {
  HelloH2,
  ChooseContainer,
  PorjectsList,
  ProjectsContainer,
  AddProjectBtn,
  ProjectsBtn,
  Container,
  IntiveCodeContainer,
  CloseWindowBtn,
  InviteCodeBtn,
  InviteCodeInput,
};
