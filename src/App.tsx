import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <>
      <div>
        <Router>
          <Sidebar />
          <main className=" lg:pl-32 ">
            <Routes>
              <Route path="/E-Commerce-Restaurante/*" element={<Home/>}>
                <Route path="about" element={<About />} />
              </Route>
            </Routes>
          </main>
        </Router>

        Hola mundo
      </div>

      <main></main>
    </>
  );
}

export default App;
