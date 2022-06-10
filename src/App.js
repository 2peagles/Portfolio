import './App.css';
import 'tachyons';
import { NavBar } from './components/NavBar';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { Footer } from './pages/Footer';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <Home/>
        <Projects/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;