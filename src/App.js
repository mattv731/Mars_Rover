import React from 'react';
import './App.css';
import Home from './Home';
import Header from './Header';
import About from './About';
import Contact from './Contact';
import styled from 'styled-components';

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/contact' element={<Contact />}/>
        </Routes>
    </div>
  );
}

export default App;
