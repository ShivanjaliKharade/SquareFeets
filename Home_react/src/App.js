import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Demo from './components/Demo';



function App() {
    return ( 
        <>

        <Signup / >

        </>
    );
}

export default App;