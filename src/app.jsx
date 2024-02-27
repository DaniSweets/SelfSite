import './App.css';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Resume from './components/Resume';

function App() {
  return (
    <div>
      <div className='contact'>
        <Contact />
      </div>
      <div className="projects">
        <Projects />
      </div>
      <div className='resume'>
        <Resume />
      </div>
    </div>
  );
}

export default App;