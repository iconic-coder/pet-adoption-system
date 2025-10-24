import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import AdoptionForm from "./components/AdoptionForm/AdoptionForm";
import SearchBar from "./components/SearchBar/SearchBar";


const App = () => {
  const [filter, setFilter] = useState('')
  const [data, setData] = useState([])
  return ( 
    <>
    <Navbar />
    <SearchBar filter={filter} onFilterChange={{setFilter}}/>
    <AdoptionForm data={data} setData={setData}/>
    </>
   );
}
 
export default App;