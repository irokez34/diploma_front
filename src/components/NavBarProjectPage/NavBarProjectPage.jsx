// import { NavContainer, NavButton, NavP } from './NavBarProjectPage.styled.js';

import { useEffect, useState } from 'react';
import {
  NavButton,
  NavContainer,
  NavP,
  WrapperDiv,
} from './NavBarProjectPage.styled';
import { UpdateProjectModal } from 'components/AddProjectModal/UpdateProjectModal';
import { useDispatch } from 'react-redux';
import { updateProject } from '../../redux/Projects/operations';

const NavBar = ({ project, inviteCode, code, type, history }) => {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState();
  const [workerCode, setWorkerCode] = useState('');
  const [clientCode, setClientCode] = useState('');

  useEffect(() => {
    if (type === 'worker') {
      setWorkerCode(code);
    } else if (type === 'client') {
      setClientCode(code);
    }
  }, [type, code]);

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

  const handleInviteCode = e => {
    inviteCode(e.target.value);
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
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '5px',
        }}
      >
        <NavButton onClick={handleInviteCode} value={'worker'}>
          {'Generate Invite Code for worker'}
        </NavButton>
        <span>{workerCode} </span>
        <NavButton onClick={handleInviteCode} value={'client'}>
          {'Generate Invite Code for client'}
        </NavButton>
        <span>{clientCode} </span>
      </div>

      {openModal && (
        <UpdateProjectModal
          onClose={openInfoModal}
          updateProject={handleUpdate}
        ></UpdateProjectModal>
      )}
      <WrapperDiv>
        <NavButton onClick={history}>Get History</NavButton> {/* GET HISTORY */}
        <NavButton>End Project</NavButton> {/* END PROJECT */}
        <NavButton>X</NavButton> {/* CANCEL END PROJECT */}
      </WrapperDiv>
    </NavContainer>
  );
};

export default NavBar;
