import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import { useState } from "react";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [modal, setModal] = useState(false);
  const toggleCarrito = () => {
    setModal(!modal);
    setShowMenu(false)
  };
  return (
    <>
      <div>
        <Router>
          <Sidebar showMenu={showMenu} setShowMenu={setShowMenu} toggleCarrito={toggleCarrito} />
          <main className=" lg:pl-32 ">
            <Routes>
              <Route path="/E-Commerce-Restaurante/" element={<Home modal={modal} toggleCarrito={toggleCarrito}  />}/>
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
