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
  ProjectBtn,
  ProjectListItem,
  ProjectsBtn,
  ProjectsContainer,
} from './InviteCode.styled';
import {
  createNewProject,
  getAllProjects,
} from '../redux/Projects/operations.js';
import { useDispatch, useSelector } from 'react-redux';
// import { loginUser } from '../redux/User/operations.js';
import { AddProjectModal } from '../components/AddProjectModal/AddProjectModal.jsx';
import { selectProjects } from '../redux/Projects/selectors.js';
import { Link } from 'react-router-dom';
import { loginUser } from '../redux/User/operations';

export const InviteCodePage = () => {
  const [projectWindow, setProjectWindow] = useState(false);
  const [inviteCodeWindow, setInviteCodeWindow] = useState(false);
  const [modal, setModal] = useState(false);

  const dispatch = useDispatch();

  const allProjects = useSelector(selectProjects);

  useEffect(() => {
    dispatch(getAllProjects());
  }, [dispatch]);

  const OpenProjectWindow = e => {
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
    const existingProject =
      allProjects && allProjects.find(project => project.name === name);
    if (existingProject) {
      alert(
        'A project with this name already exists. Please choose a different name.'
      );
    } else {
      const data = {
        name,
        description,
      };
      dispatch(createNewProject(data));
      alert('Successfully created');
      setModal(false);
      window.location.reload();
    }
  };

  const projectListItem =
    allProjects &&
    allProjects.map(el => (
      <Link to={`/diploma_front/project/${el._id}`}>
        <ProjectListItem key={el._id}>
          <ProjectBtn>{el.name.toUpperCase()}</ProjectBtn>
        </ProjectListItem>
      </Link>
    ));

  return (
    <>
      <button onClick={handleLogin}>login</button>
      <Container>
        <HelloH2>{'Hello, username!'}</HelloH2>
        <ChooseContainer>
          <ProjectsBtn onClick={OpenInviteCodeWindow}>
            {'ENTER CODE'}
          </ProjectsBtn>
          <ProjectsBtn onClick={OpenProjectWindow}>{'My projects'}</ProjectsBtn>
        </ChooseContainer>
      </Container>
      {inviteCodeWindow && (
        <IntiveCodeContainer>
          <CloseWindowBtn onClick={OpenInviteCodeWindow}>X</CloseWindowBtn>
          <InviteCodeInput placeholder="Invite Code"></InviteCodeInput>
          <InviteCodeBtn>{'ENTER'}</InviteCodeBtn>
        </IntiveCodeContainer>
      )}
      {projectWindow && (
        <ProjectsContainer>
          <CloseWindowBtn onClick={OpenProjectWindow}>X</CloseWindowBtn>
          <AddProjectBtn onClick={openProjectModal}>
            {'ADD PROJECT'}
          </AddProjectBtn>
          {modal && (
            <AddProjectModal
              onClose={openProjectModal}
              createProject={createProjectModal}
            ></AddProjectModal>
          )}
          {allProjects && <PorjectsList>{projectListItem}</PorjectsList>}
        </ProjectsContainer>
      )}
    </>
  );
};
