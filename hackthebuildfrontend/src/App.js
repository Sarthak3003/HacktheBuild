import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Outlet, Navigate } from 'react-router-dom';
import Sidebar from './Components/Sidebar'
import Chart from './Components/Chart';
import Stats from './Pages/Stats';
import LiveCamPage from './Pages/LiveCamPage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<LiveCamPage />} />
          <Route exact path='/stats' element={<Stats />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
