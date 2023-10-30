import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import TeamsContainer from './components/TeamsContainer';
import LandingPage from './components/LandingPage';
import Footer from './components/Footer';



const App: React.FC = () => {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/teams' element={<TeamsContainer />} />
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App
