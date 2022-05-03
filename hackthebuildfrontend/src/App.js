import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Outlet, Navigate } from 'react-router-dom';
import Sidebar from './Components/Sidebar'
import Chart from './Components/Chart';
import Stats from './Pages/Stats';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Sidebar />} />
          <Route exact path='/stats' element={<Stats />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
