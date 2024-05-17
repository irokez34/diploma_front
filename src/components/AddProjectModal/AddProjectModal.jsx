import { useEffect, useState } from 'react';

import {
  Info,
  Overlay,
  Modal,
  ButtonClose,
  FormCreateProject,
  ProjectBtnSave,
  InfoContainer,
  InputField,
} from './AddProjectModal.styled.js';

export const AddProjectModal = ({ onClose, createProject }) => {
  const [data, setData] = useState({
    projectName: '',
    projectDescription: '',
  });
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleChange = e => {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value,
    });
  };

  return (
    <Overlay>
      <Modal>
        <Info>
          <ButtonClose onClick={onClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xml_space="preserve"
              width="20"
              height="20"
              viewBox="0 0 26 26"
            >
              <path d="M21.125 0H4.875A4.874 4.874 0 0 0 0 4.875v16.25A4.874 4.874 0 0 0 4.875 26h16.25A4.874 4.874 0 0 0 26 21.125V4.875A4.874 4.874 0 0 0 21.125 0zM18.78 17.394l-1.388 1.387a.654.654 0 0 1-.924 0L13 15.313 9.533 18.78a.653.653 0 0 1-.925-.002L7.22 17.394a.66.66 0 0 1 0-.926l3.468-3.467-3.467-3.467a.657.657 0 0 1 0-.925l1.388-1.388a.651.651 0 0 1 .925 0L13 10.689l3.468-3.468a.65.65 0 0 1 .924 0l1.388 1.386a.66.66 0 0 1 .001.927l-3.468 3.467 3.468 3.467a.66.66 0 0 1-.001.926z" />
            </svg>
          </ButtonClose>
          <InfoContainer>
            <FormCreateProject>
              <InputField
                type="text"
                name="projectName"
                placeholder="Project Name"
                value={data.projectName}
                onChange={handleChange}
                required
              />
              <InputField
                type="text"
                name="projectDescription"
                placeholder="Project Description"
                value={data.projectDescription}
                onChange={handleChange}
                required
              />
              <ProjectBtnSave
                onClick={e => {
                  e.preventDefault();
                  if (!data.projectDescription || !data.projectName) {
                    alert('fill all fields');
                    return;
                  }
                  createProject(data.projectName, data.projectDescription);
                }}
              >
                {'SAVE'}
              </ProjectBtnSave>
            </FormCreateProject>
          </InfoContainer>
        </Info>
      </Modal>
    </Overlay>
  );
};
