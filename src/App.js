import './App.css';
import Alert from './Components/Alert'
import Navbar from './Components/Navbar'
import About from './Components/About'
import TextForm from './Components/Form'
import React, { useState } from 'react';
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (msg, type) => {
    setAlert({ msg: msg, type: type })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode = () => {
    // removeBodyClasses()
    // document.body.classList.add('bg-' + cls)
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert('Dark mode is  enabled', 'success')
      // document.title = 'textUtils-Dark mode'

    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Light mode is  enabled', 'success')
      // document.title = 'textUtils-Light mode'

    }
  }

  // const removeBodyClasses = () => {
  //   document.body.classList.remove('bg-danger')
  //   document.body.classList.remove('bg-warning')
  //   document.body.classList.remove('bg-success')
  //   document.body.classList.remove('bg-primary')
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-light')
  // }

  

  return (
    <>
      <Router>
        <Navbar title="TextUtils" about="About Us" home="Home" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3" >
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route exact path="/" element={<TextForm heading="Text Utils App" mode={mode} showAlert={showAlert} />} />

          </Routes>
        </div>
      </Router >
    </>
  );
}

export default App;
