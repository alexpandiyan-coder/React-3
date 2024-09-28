import React, { createContext, useState } from "react";
import Home from "./Components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import NaveBar from "./NaveBar";
import About from "./Components/About";
import List from "./List";
import Params from "./Components/Params";
import Signup from "./Components/Singup";
import Admin from "./Components/Admin";
import Protector from "./Components/Protector";

export const AppContext = createContext();

function App() {
  const [child, setChild] = useState([]);

  const [adminlist, setAdminlist] = useState(false);

  function callback(share) {
    setChild(share);
  }

  function pro(protect) {
    setAdminlist(protect);
    console.log(protect);
  }
  
  console.log(adminlist);

  const store = [child, adminlist, setAdminlist, setChild];

  return (
    <section>
      <AppContext.Provider value={store}>
        <BrowserRouter>
          <div>
            <NaveBar />
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/singup" element={<Signup fun={callback} />} />
            <Route path="/about" element={<About />} />
            <Route path="/admin" element={<Admin fun={pro} />}></Route>
            <Route element={<Protector share={adminlist} />}>
              <Route path="list" element={<List />}></Route>
            </Route>
            <Route path="/params/:name" element={<Params />} />
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </section>
  );
}

export default App;
