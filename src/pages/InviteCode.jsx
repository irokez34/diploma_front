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
  SignOutBtn,
} from './InviteCode.styled';
import {
  createNewProject,
  getAllProjects,
} from '../redux/Projects/operations.js';
import { useDispatch, useSelector } from 'react-redux';

import { AddProjectModal } from '../components/AddProjectModal/AddProjectModal.jsx';
import { selectProjects } from '../redux/Projects/selectors.js';
import { Link, useNavigate } from 'react-router-dom';

export const InviteCodePage = () => {
  const [projectWindow, setProjectWindow] = useState(false);
  const [inviteCodeWindow, setInviteCodeWindow] = useState(false);
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();
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
      <Link to={`/diploma_front/project/${el._id}`} key={el._id}>
        <ProjectListItem>
          <ProjectBtn>{el.name.toUpperCase()}</ProjectBtn>
        </ProjectListItem>
      </Link>
    ));

  const handleSignOut = () => {
    localStorage.setItem('token', '');
    localStorage.setItem('userID', '');
    navigate('/diploma_front/auth/login');
  };

  return (
    <>
      <SignOutBtn onClick={handleSignOut}>Sign Out</SignOutBtn>
      <Container>
        <HelloH2>{'Welcome '}</HelloH2>
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
