import './styles/App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Home } from './pages/Home';
import "react-toastify/dist/ReactToastify.css";
import { Login } from './pages/Login';
import React, {useState} from "react";
import { Navbar }  from './components/Navbar';
import { Header } from './components/Header';
import { Categories } from './pages/Categories';
import { SignUp } from './pages/SignUp';

function App() {
    const [showHeader, setShowHeader] = useState(true);

  return (
    <div className="App">

      <Router>
        {showHeader && <Header />}
        <Navbar />
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login setShowHeader={setShowHeader}/>} />
            <Route path='/signup' element={<SignUp  setShowHeader={setShowHeader}/>} />
            <Route path='/categories' element={<Categories/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
