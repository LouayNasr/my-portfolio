import './App.css';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Home/>
      <Contact/>
    </div>
  );
}

export default App;
