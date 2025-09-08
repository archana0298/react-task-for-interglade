import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './components/auth/Register';
import Dashboard from './components/dashboard/Dashboard';
import Login from './components/auth/Login';
import NotFound from './components/NotFound';
import { createContext, useState } from 'react';
const AuthContextToProvide = createContext();

function App() {
  const [auth, setAuth] = useState([])
  const loggedIN = JSON.parse(localStorage.getItem("loggedIN"))
  const isAuth = loggedIN;


  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          {isAuth ?
            <Route path='/dashboard' element={<Dashboard />} />
            :
            <NotFound />
          }
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
