import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Start from './Pages/Start/Start';
import Home from './Pages/Home/Home';
import StartOrRemoveQuestions from './Components/Questions/StartOrRemoveQuestions';


const App = () => {

  return <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="start" element={<Start/>} />
        <Route path="play" element={<StartOrRemoveQuestions/>} />
      </Routes>
    </BrowserRouter>
  </>;
};

export default App;
