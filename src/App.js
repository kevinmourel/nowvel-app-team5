import { Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar';

import Detail from './pages/Detail';
import Home from './pages/Home';
import Watch from './pages/Watch';
import { useState, useEffect } from "react";
import Banner from "./components/Banner";

function App() {

  const [search, setSearch] = useState(null)

  return (
    <>
    <Navbar
      search={search}
      setSearch={setSearch}
    />
    <Routes>
        <Route exact path="/" element={ <Home search={search}/> } />
        <Route exact path="/detail/:id" element={ <Detail/> } />
        <Route exact path="detail/:title/watch/:id" element={ <Watch/> } />
     </Routes>
     </>
  );
}

export default App;
