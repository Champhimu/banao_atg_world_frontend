import React, { createContext, useEffect, useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Header from './Component/Pages/Header/Header'
import Login from './Component/Pages/Signup/Login'
import Register from './Component/Pages/Signup/Register'
import ForgotPassword from './Component/Pages/Signup/ForgotPassword';
import Recovery from './Component/Pages/Signup/Recovery';
import Reset from './Component/Pages/Signup/Reset';
import Article from './Component/Pages/Article/Article';
import CreatePost from './Component/Pages/Posts/CreatePost';

export const MyContext = createContext("");

const App = () => {

  const [loggedIn, setLogedIn] = useState(false);

  useEffect(() => {
    if(localStorage.getItem('token')){
      setLogedIn(true);
      console.log("Token received");
      console.log(loggedIn);
    }
  },[setLogedIn])

  return (
    <div>
      <BrowserRouter>
      <MyContext.Provider value={{loggedIn, setLogedIn}}>
      <Header  />
      <Routes>
        <Route path='/' exact element={loggedIn ? <Article /> : <Login />} />
        <Route path='/register' element={<Register /> } />
        <Route path='/forgot/password' element={<ForgotPassword /> }/>
        <Route path='/recovery' element={<Recovery />} />
        <Route path='/reset' element={<Reset /> }/>
        <Route path='/create-post' element={<CreatePost />} />
      </Routes>
      </MyContext.Provider>
      </BrowserRouter>
    </div>
  )
}

export default App
