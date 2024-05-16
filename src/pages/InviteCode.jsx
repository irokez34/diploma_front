import { useEffect, useState } from 'react';
import {
  AddProjectBtn,
  ChooseContainer,
  CloseWindowBtn,
  Container,
  HelloH2,
  IntiveCodeContainer,
  InviteCodeBtn,
  InviteCodeInput,
  PorjectsList,
  ProjectsBtn,
  ProjectsContainer,
} from './InviteCode.styled';
import {
  createNewProject,
  getAllProjects,
} from '../redux/Projects/operations.js';
import { useDispatch } from 'react-redux';
import { loginUser } from '../redux/User/operations.js';
import {
  AddProjectModal,
  Modal,
} from '../components/AddProjectModal/AddProjectModal.jsx';

export const InviteCodePage = ({}) => {
  const [projectWindow, setProjectWindow] = useState(false);
  const [inviteCodeWindow, setInviteCodeWindow] = useState(false);
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProjects());
  }, [dispatch]);

  const OpenProjectWindow = e => {
    console.log(e.target.text);
    if (projectWindow) {
      setProjectWindow(false);
    } else {
      setProjectWindow(true);
    }
  };
  const OpenInviteCodeWindow = e => {
    if (inviteCodeWindow) {
      setInviteCodeWindow(false);
    } else {
      setInviteCodeWindow(true);
    }
  };
  const handleLogin = () => {
    dispatch(loginUser({ username: 'Leha Trembita', password: '123' }));
  };

  const openProjectModal = e => {
    if (modal) {
      setModal(false);
    } else {
      setModal(true);
    }
  };
  const createProjectModal = (name, description) => {
    console.log(name, description);

    const data = {
      name,
      description,
    };
    dispatch(createNewProject(data));
  };
  return (
    <>
      {/* <button onClick={handleLogin}>{'Login'}</button> */}
      <Container>
        <HelloH2>{'Hello, username!'}</HelloH2>
        <ChooseContainer>
          <ProjectsBtn onClick={OpenProjectWindow}>{'ENTER CODE'}</ProjectsBtn>
          <ProjectsBtn onClick={OpenInviteCodeWindow}>
            {'My projects'}
          </ProjectsBtn>
        </ChooseContainer>
      </Container>
      <IntiveCodeContainer>
        <CloseWindowBtn>X</CloseWindowBtn>
        <InviteCodeInput placeholder="Invite Code"></InviteCodeInput>
        <InviteCodeBtn>{'ENTER'}</InviteCodeBtn>
      </IntiveCodeContainer>
      <ProjectsContainer>
        <CloseWindowBtn>X</CloseWindowBtn>
        <AddProjectBtn onClick={openProjectModal}>
          {'ADD PROJECT'}
        </AddProjectBtn>
        {modal && (
          <AddProjectModal
            onClose={openProjectModal}
            createProject={createProjectModal}
          ></AddProjectModal>
        )}
        <PorjectsList></PorjectsList>
      </ProjectsContainer>
    </>
  );
};
