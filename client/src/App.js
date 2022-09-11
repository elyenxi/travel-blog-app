import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Auth from './components/Auth';
import Home from './components/Home';
import Navbar from './components/Navbar';

const App = () => (
  <BrowserRouter>
    <Container maxWidth='lg'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={<Auth />} />
      </Routes>
    </Container>
  </BrowserRouter>
);

export default App;
