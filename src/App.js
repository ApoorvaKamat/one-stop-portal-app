import { Home } from './modules/home';
import { NavBar } from './components/navbar';
import { ProjectHelp } from './modules/projectHelp';
import {MeetingSchedule} from './modules/task-schedule'
import {HelpDocModule} from './modules/help-doc'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,  Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';

function App() {
  const [isModalDisplayed, setIsModalDisplayed] = useState(true);
 // const shouldDisplayHelpModal = () => setIsModalDisplayed(false)
  return (
      <BrowserRouter>
      <div className='App'>
      <NavBar displayhelpModal={setIsModalDisplayed} />
      <Routes>
        <Route path='/' element={<Home showModal={isModalDisplayed} />}> </Route>
        {/* <Route path='/portal/Home' element = {<Home/>}></Route>; */}
        <Route path='/portal/projectHelp' element = {<ProjectHelp/>}></Route>;
        <Route path='/portal/scheduleMeeting' element = {<MeetingSchedule/>}></Route>;
        <Route path='/portal/helpanddocumentation' element = {<HelpDocModule/>}></Route>;
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
