import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Adopt from "./pages/Adopt/Adopt";
import GiveUp from "./pages/GiveUp/GiveUp";
import PetDetails from "./pages/PetDetails/PetDetails";
import { fetchPets } from "./utils/api";

const App = () => {
  const [pets, setPets] = useState([]);
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetchPets().then(setPets);
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
        <Route path="/pet/:id" element={<PetDetails pets={pets} />} />
      </Routes>
    </Router>
  );
}
 
export default App;