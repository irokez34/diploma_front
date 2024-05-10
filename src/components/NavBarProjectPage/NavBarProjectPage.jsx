// import { NavContainer, NavButton, NavP } from './NavBarProjectPage.styled.js';

import {
  NavButton,
  NavContainer,
  NavP,
  WrapperDiv,
} from './NavBarProjectPage.styled';

const NavBar = () => {
  return (
    <NavContainer>
      <WrapperDiv>
        <NavButton> {'<'} </NavButton>
        <NavP>Project Name</NavP> {/* Project Name */}
        <NavButton>INFO</NavButton> {/* INFO */}
        <NavP>{'Project Status'}</NavP> {/* Project Status */}
      </WrapperDiv>
      <NavP>{'COMPLETION CHANCE: 87% '}</NavP> {/* COMPLETION CHANCE: 87% */}{' '}
      <WrapperDiv>
        <NavButton>Get History</NavButton> {/* GET HISTORY */}
        <NavButton>End Project</NavButton> {/* END PROJECT */}
        <NavButton>X</NavButton> {/* CANCEL END PROJECT */}
      </WrapperDiv>
    </NavContainer>
  );
};

export default NavBar;
