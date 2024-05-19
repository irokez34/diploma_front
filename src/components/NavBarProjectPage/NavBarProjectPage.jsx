// import { NavContainer, NavButton, NavP } from './NavBarProjectPage.styled.js';

import { useState } from 'react';
import {
  NavButton,
  NavContainer,
  NavP,
  WrapperDiv,
} from './NavBarProjectPage.styled';
import { UpdateProjectModal } from 'components/AddProjectModal/UpdateProjectModal';
import { useDispatch } from 'react-redux';
import { updateProject } from '../../redux/Projects/operations';

const NavBar = ({ project, role, task }) => {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState();
  const openInfoModal = () => {
    if (openModal) {
      setOpenModal(false);
    } else {
      setOpenModal(true);
    }
  };
  const handleUpdate = data => {
    const userData = { ...data, workers: [], clients: [] };

    dispatch(updateProject({ userData, project_id: project._id }));
    setOpenModal(false);
    window.location.reload();
  };

  return (
    <NavContainer>
      <WrapperDiv>
        <NavButton> {'<'} </NavButton>
        <NavP>{project && project.name.toUpperCase()}</NavP>
        {/* Project Name */}
        <NavButton onClick={openInfoModal}>{'INFO'}</NavButton>
        {/* INFO */}
        <NavP>{project && project.start_time}</NavP> {/* Project Status */}
      </WrapperDiv>
      {openModal && (
        <UpdateProjectModal
          onClose={openInfoModal}
          updateProject={handleUpdate}
        ></UpdateProjectModal>
      )}
      <WrapperDiv>
        <NavButton>Get History</NavButton> {/* GET HISTORY */}
        <NavButton>End Project</NavButton> {/* END PROJECT */}
        <NavButton>X</NavButton> {/* CANCEL END PROJECT */}
      </WrapperDiv>
    </NavContainer>
  );
};

export default NavBar;
