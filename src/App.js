import { Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar';

import Detail from './pages/Detail';
import Home from './pages/Home';
import Watch from './pages/Watch';
import { useState, useEffect } from "react";
import Search from "./pages/Search";

function App() {

  const [searchParams, setSearchParams] = useState(null)

  return (
    <>
    <Navbar
      searchParams={searchParams}
      setSearchParams={setSearchParams}
    />
    <Routes>
        <Route exact path="/" element={ <Home/> } />
        <Route exact path="/search/:search" element={ <Search/> } />
        <Route exact path="/detail/:id" element={ <Detail/> } />
        <Route exact path="detail/:title/watch/:id" element={ <Watch/> } />
     </Routes>
     </>
  );
}

export default App;
