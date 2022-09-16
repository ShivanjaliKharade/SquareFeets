import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Signup from './pages/Signup';
import Login from './pages/Login';
import Header from './components/Header';
import Howitworks from './components/Howitworks'
import About from './components/About';
import Properties from './components/Properties';
import Contact from './components/Contact';





function App() {
    return ( 
        <>
         <Header/>
         <Howitworks/>
         <About/>
         <Properties/>
         <Contact/>
         
        </>
        
    );
}

export default App;