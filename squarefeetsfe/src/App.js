// import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './pages/Login';
import Userreg from './pages/Userreg';
import Builderreg from './pages/Builderreg';
import Homepage from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import ErrorPage from './ErrorPages/ErrorPages';
import Aboutus from './pages/About';
import Profile from './pages/Profile';
import Property from './pages/Property'
import List from "./pages/List";
import CustomerProfileCard from './components/CustomerProfileCard'
import AddProperty from "./components/AddProperty"
import DropDownTest from "./components/DropDownTest";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='Login' element={<Login />} />
        <Route path='Register-customer' element={<Userreg />} />
        <Route path='Register-builder' element={<Builderreg />} />
        <Route path='Error' element={<ErrorPage />} />
        <Route path='About' element={<Aboutus />} />
        <Route path='Builder-Profile' element={<Profile />} />
        <Route path='Customer-Profile' element={<CustomerProfileCard />} />
        <Route path='Property/Profile' element={<Property />} />
        <Route path='Property' element={<List />} />
        <Route path='AddProperty' element={<AddProperty />} />
        <Route path='DropDownTest' element={<DropDownTest />} />
      </Routes>
    </div>
  );
}

export default App;
