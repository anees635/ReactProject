
import './App.css';
import Alert from './Alert'
import Navbar from './Navbar.js';
// import About from './About.js';
import Textform from './Textform.js';
import React,{useState}from 'react'
// import {
//   BrowserRouter,
//   Routes,
//   Route
// } from "react-router-dom";



function App() {
  
  const [btntext, setbtntext] = useState('Enable Dark Mode');
  const [border, setborder]= useState({border : '1px solid black'});

  let webBody = document.body;
  

  const [style, setStyle] =useState({
    color: 'black',
    backgroundColor: 'white'
   });
   
  const [mode, setmode]= useState("");
 
 const toogleStyle =() =>{
  if(style.color === 'black')
  { setmode("dark");
      setStyle({color: 'white', backgroundColor: 'rgb(36, 35, 35)'});
      setbtntext('Disable Dark Mode');
      setborder({border: '1px solid white'});
      webBody.style.color = 'white';
      webBody.style.backgroundColor = 'rgb(36, 35, 35)';
      makealert("Dark Mode is activated", "success");
      
  }
  else{
    setmode("light");
    setStyle({color: 'black', backgroundColor: 'white'});
    setbtntext('Enable Dark Mode');
    setborder({border: '1px solid black'});
    webBody.style.color = 'black';
    webBody.style.backgroundColor = 'white';
    makealert("Light Mode is activated", "success");

  }
 };
  
  const [alert, setalert] = useState(null);
  
  const makealert = (message, type)=>{
    setalert({
      mes: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1200);
  }
  return (
    <>
    <Alert alert={alert}/>
    <Navbar title="TextTracker" mode={mode}/>
    <Textform heading="Enter text below to analyze" makealert={makealert} mode={style} btntext={btntext} border={border} func={toogleStyle}/>
    </>

  //   <BrowserRouter>
  //   <Alert alert={alert}/>
  //   <Routes>
  //     <Route path="/" element={<Navbar title="TextTracker" mode={mode}/>}>
        
        
  //       <Route path='/Text' element={<Textform heading="Enter text below to analyze" makealert={makealert} mode={style} btntext={btntext} border={border} func={toogleStyle}/>} />
  //       <Route path='/about' element={<About />} />
  //     </Route>
  //   </Routes>
  // </BrowserRouter>
     
  );
 
}

export default App;
