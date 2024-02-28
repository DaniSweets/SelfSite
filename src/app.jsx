import './App.css';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Resume from './components/Resume';

function App(props) {
  return (
    <div>
        <Projects />
        <Contact />
        <Resume />
    </div>
  );
}

export default App;