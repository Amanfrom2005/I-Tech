import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signin from './pages/Signin';  

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes without Navbar */}
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />

        {/* Routes with Navbar */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App
