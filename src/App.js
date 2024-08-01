import './App.css';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
function App() {
const [Mode,setMode]= useState('dark')

const toggleMode=()=>{
  if(Mode === 'dark'){
    setMode=('light');
  }
  else {
    setMode=('dark')
  }
}
  return (
    <><  NavBar title="SarthITECH" aboutText="about SarthiI" mode={Mode} toggleMode={toggleMode}/>
    <div className="container" ><TextForm heading="how is the form" /></div>
  <div className="container">  <About/></div>
    </>

  
  );
}

export default App;
