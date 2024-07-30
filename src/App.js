import './App.css';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import About from './components/About';
function App() {
  return (
    <><  NavBar title="SarthITECH" aboutText="about SarthiI" />
    <div className="container" ><TextForm heading="how is the form" /></div>
  <div className="container">  <About/></div>
    </>

  
  );
}

export default App;
