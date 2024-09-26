import React from "react";
import Home from "./Components/Home";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Login from "./Components/Login";
import NaveBar from "./NaveBar";
import About from "./Components/About";
import List from "./List";
import Page1 from "./Components/Page1";
import Page2 from "./Components/Page2";
import Params from "./Components/Params";

function App() {
  return (
    <section>
    
     
      <BrowserRouter>
      <div>
      <NaveBar />
      </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/list" element={<List />}>
             <Route path="page-1" element={<Page1/>}/>
             <Route path="page-2" element={<Page2/>}/>
          </Route>
          <Route path="/params/:name" element={<Params/>}/>
        </Routes>
      </BrowserRouter>
    </section>
  );
}

export default App;
