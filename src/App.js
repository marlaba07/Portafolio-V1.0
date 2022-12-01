import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar'
import Skills from './components/Skills';
import Work from './components/Work';

function App() {
  return (
    <div>
        <Navbar />
        <br/>
        <Home />
        <br/>
        <About />
        <br/>
        <Skills />
        <br/>
        <Work />
        <br/>
        <Contact />
    </div>
  );
}

export default App;
