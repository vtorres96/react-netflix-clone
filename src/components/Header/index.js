import React from 'react';

import { Container, Logo, UserAvatar } from './styles';
import logo from '../../assets/logo.png';
import userAvatar from '../../assets/user-avatar.png';

const Header = ({black}) => {
  return (
    <Container className={black ? 'black' : ''}>
      <Logo>
        <a href="/">
          <img src={logo} alt=""/>
        </a>
      </Logo>
      <UserAvatar>
        <a href="/">
          <img src={userAvatar} alt=""/>
        </a>
      </UserAvatar>
    </Container>
  );
};

export default Header;
