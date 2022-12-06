import { Home } from './modules/home';
import { NavBar } from './components/navbar';
import { ProjectHelp } from './modules/projectHelp';
import {MeetingSchedule} from './modules/task-schedule'
import {HelpDocModule} from './modules/help-doc'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,  Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import { ReactSession } from 'react-client-session';
import { HomeLoggedIn } from './modules/homeLoggedIn';


function App() {
  const [isModalDisplayed, setIsModalDisplayed] = useState(true);
  // ReactSession.setStoreType("ses");
  // ReactSession.set('username',null)
  const [name, setUserName] = useState('');
  return (
      <BrowserRouter>
      <div className='App'>
      <NavBar />
      <Routes>
        <Route exact path='/home' element={<Home/>}> </Route>
        {/* <Route exact path='/portal/Home' element = {<HomeLoggedIn/>}></Route>; */}
        <Route exact path='/portal/projectHelp' element = {<ProjectHelp/>}></Route>;
        <Route exact path='/portal/scheduleMeeting' element = {<MeetingSchedule/>}></Route>;
        <Route exact path='/portal/helpanddocumentation' element = {<HelpDocModule/>}></Route>;
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
