import React from 'react';
import 'bulma/css/bulma.min.css';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Projects from './components/Projects';

function App() {
  return (
    <div>
      <Header />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;