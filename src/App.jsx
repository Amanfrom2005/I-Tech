import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './pages/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  )
}

export default App
