import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import TeamsContainer from './components/TeamsContainer';
import LandingPage from './components/LandingPage';
import UserProfile from './components/UserProfile';
import AddTeam from './components/AddTeam';



const App: React.FC = () => {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/teams' element={<TeamsContainer />} />
          <Route path='/teams/addteam' element={<AddTeam />} />
          <Route path='/profile' element={<UserProfile />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
