import React from 'react';
// import { Switch, Route } from 'react-router-dom';
import Nav from './Nav';
// import Home from './pages/Home';
// import Starred from './pages/Starred';
import Title from './Title';

const MainPageLayout = ({ children }) => {
  return (
    <div>
      <Title
        title="Box Office"
        subtitle="Are you looking for a movie or an actor?"
      />
      <Nav />
      {children}
    </div>
  );
};

export default MainPageLayout;
