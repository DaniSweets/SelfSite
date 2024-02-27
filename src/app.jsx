import './App.css';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Resume from './components/Resume';

// function Contact() {
//   return <div>
//       <a href="https://github.com/DaniSweets"><img className="icon" id="github" src="./src/assets/logo.png"></img></a>
//       <a href="https://www.linkedin.com/in/dani-sweetwood/"><img className="icon" id="linkedIn" src="./src/assets/linkedin.png"></img></a>
//   </div>
// }

function App(props) {
  return (
    <div>
      {/* <p>HULLO</p> */}
      <div className='contact'>
        <Contact />
      </div>
      <div className="projects">
        <Projects />
      </div>
      <div className='resume'>
        <Resume />
      </div>
      {/* <Contact />
      <Projects />
      <Resume /> */}
    </div>
  );
}

export default App;