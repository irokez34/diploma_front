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
import { NotificationMessage } from 'components/Notification-Msg/Notification';
import { useLocation, useNavigate } from 'react-router-dom';

const NavBar = ({ project, inviteCode, code, role, type, history }) => {
  const dispatch = useDispatch();
  const { state } = useLocation();
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState();
  const [workerCode, setWorkerCode] = useState('');
  const [clientCode, setClientCode] = useState('');
  const [messageWorker, setMessageWorker] = useState(false);
  const [messageClient, setMessageClient] = useState(false);
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
    if (e.target.value === 'worker') {
      setMessageWorker(true);
    } else if (e.target.value === 'client') setMessageClient(true);
  };

  const handleBack = () => {
    navigate('/diploma_front/invite');
  };

  return (
    <NavContainer>
      <WrapperDiv>
        <NavButton onClick={handleBack}> {'<'} </NavButton>
        <NavP>{project && project.name.toUpperCase()}</NavP>
        {/* Project Name */}
        <NavButton onClick={openInfoModal} disabled={role !== 'owner'}>
          {'INFO'}
        </NavButton>
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
        <div>
          <NavButton
            onClick={handleInviteCode}
            value={'worker'}
            disabled={role !== 'owner'}
          >
            {'Generate Invite Code for worker'}
          </NavButton>

          {/* <NotificationMessage message={`worker code:${workerCode}`} /> */}
        </div>
        <span>{workerCode} </span>
        <div>
          <NavButton
            onClick={handleInviteCode}
            value={'client'}
            disabled={role !== 'owner'}
          >
            {'Generate Invite Code for client'}
          </NavButton>
          <span>{clientCode} </span>
          {/* <NotificationMessage message={`client code:${clientCode}`} /> */}
        </div>
      </div>

      {openModal && (
        <UpdateProjectModal
          onClose={openInfoModal}
          updateProject={handleUpdate}
        ></UpdateProjectModal>
      )}
      <WrapperDiv>
        <NavButton onClick={history}>Get History</NavButton> {/* GET HISTORY */}
        <NavButton disabled={role !== 'owner'}>End Project</NavButton>{' '}
        {/* END PROJECT */}
        <NavButton disabled={role !== 'owner'}>X</NavButton>{' '}
        {/* CANCEL END PROJECT */}
      </WrapperDiv>
    </NavContainer>
  );
};

export default NavBar;
