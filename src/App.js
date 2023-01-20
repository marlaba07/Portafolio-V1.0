import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar'
import Skills from './components/Skills';
import Tab from './components/Tab';
import Work from './components/Work';

function App() {
  return (
    <div>
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Work />
        <Contact />
        <Tab />
    </div>
  );
}

export default App;
