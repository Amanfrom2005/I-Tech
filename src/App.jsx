import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Store from "./page.jsx";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Cursour from "./components/Cursour";
import CartPage from "./components/CartPage.jsx";

function App() {
  return (
    <Router>
      <Cursour></Cursour>
      <Routes>
        {/* Routes without Navbar */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

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

        {/* Store route */}
        <Route
          path="/store"
          element={
            <>
              <Navbar />
              <Store />
            </>
          }
        />
        {/* cart route */}
        <Route
          path="/cart"
          element={
            <>
              <Navbar />
              <CartPage />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
