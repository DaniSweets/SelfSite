import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import 'bulma/css/bulma.min.css';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Answers from './components/Answers';


function App() {
  return (
    <div id='background'>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Projects />} />
        <Route path="/answers" element={<Answers />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;