import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Adopt from "./pages/Adopt/Adopt";
import GiveUp from "./pages/GiveUp/GiveUp";

const App = () => {
  const [pets, setPets] = useState([]);
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3002/pets')
      .then(res => res.json())
      .then(data => setPets(data));
  }, []);

  const addApplication = (newApp) => {
    setApplications([...applications, newApp]);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home pets={pets} />} />
        <Route path="/adopt" element={<Adopt pets={pets} addApplication={addApplication} />} />
        <Route path="/give-up" element={<GiveUp />} />
      </Routes>
    </Router>
  );
}
 
export default App;