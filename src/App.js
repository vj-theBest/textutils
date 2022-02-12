
import { useState } from 'react';
import './App.css';
import Alert1 from './Components/Alert1';
// import Alert from './Components/Alert';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');//dark mode is enanled or not
  const [alert1, setAlert] = useState(null);//usestate snippet (dismissing alerts)
  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }
  const toggleMode = ()=> {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      // document.title ="TextUtils-Dark mode"; "this is to set title dynamically"
      showAlert("Dark mode is enabled","success");//here the values for showalert objects msg and type are passed which sets setAlert 
    }
    else{
      setMode('light');
      showAlert("Light mode is enabled", "success");
      document.body.style.backgroundColor = 'white';
    }
  }
     
  return (
    <>
    <Router>
    <Navbar title="TextUtils" abouttext="About" mode = {mode} toggleMode={toggleMode}/>
    <Alert1 alert1={alert1}/>
    {/* <Alert alert={alert}/> */}
      <div className="container my-3">
        <Switch>
          <Route exact path="/about">
            <About  mode = {mode} />
          </Route>
          <Route exact path="/">
            <TextForm showAlert={showAlert} heading="Enter a Text to Analyze Below:-" mode = {mode}/>
          </Route>
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
