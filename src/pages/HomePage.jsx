import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { Link } from 'react-router-dom';
import Container from '../components/Container';

const HomePage = () => {
  return (
    <HomePageWrap>
      <Container>
        <HomePageLink to={'/users'}>Users</HomePageLink>
      </Container>
    </HomePageWrap>
  );
};

const HomePageWrap = styled.div`
  padding-top: ${rem(30)};
`;

const HomePageLink = styled(Link)``;

export default HomePage;
