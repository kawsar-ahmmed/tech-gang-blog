import React from 'react';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import NotFound from './component/NoFound/NotFound';
import Header from './component/Header/Header';
import Videos from './component/Videos/Videos';
import Login from './component/Login/Login';


function App() {
  return (
    <>
      <Container>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/videos' element={<Videos></Videos>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/*' element={<NotFound></NotFound>}></Route>
        </Routes>
      </Container>
    </>
  );
}

export default App;
