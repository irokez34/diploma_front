import styled from 'styled-components';

const NavContainer = styled.div`
  width: 100%;
  height: 84px;
  background-color: #d9d9d9;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;
const NavButton = styled.button`
  padding: 10px 15px;
  border-radius: 10px;
  border: 1px transparent;
  background-color: #8f8f8f;
  color: #ffffff;
  cursor: pointer;
  transition: background-color 0.5s ease, transform 0.3s ease,
    box-shadow 0.5s ease;

  &:hover {
    background-color: #6f6f6f;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const NavP = styled.p``;

const WrapperDiv = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

export { NavContainer, NavButton, NavP, WrapperDiv };
