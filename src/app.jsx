import React from 'react';
import 'bulma/css/bulma.min.css';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Resume from './components/Resume';

function App() {
  return (
    <div>
      <Header />
      <Projects />
      <Resume />
      <Footer />
    </div>
  );
}

export default App;