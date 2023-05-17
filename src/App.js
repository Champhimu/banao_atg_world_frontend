import React, { createContext, useState} from 'react';
import './App.css';
import Header from './Component/Pages/Header/Header';
import Banner from './Component/Pages/Banner/Banner';
import Article from './Component/Pages/Article/Article';

export const MyContext = createContext("");

function App() {

  const [isSignedIn, setIsSignedIn] = useState(false);
  
  return (
    <>
    <MyContext.Provider value={{isSignedIn, setIsSignedIn}}>
      <Header />
      <Banner />
      <Article />
    </MyContext.Provider>
    </>
  );
}

export default App;
