import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import { useState } from "react";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <div>
        <Router>
          <Sidebar showMenu={showMenu} setShowMenu={setShowMenu} />
          <main className=" lg:pl-32 ">
            <Routes>
              <Route path="/E-Commerce-Restaurante/" element={<Home setShowMenu={setShowMenu}/>}/>
                <Route path="/E-Commerce-Restaurante/about" element={<About />} />
              
            </Routes>
          </main>
        </Router>

       
      </div>

      <main></main>
    </>
  );
}

export default App;
