
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
              <Route path="/about" element={<About />} />
              {/* home */}
              <Route path="/" element={<Home />}/>
                
              
            </Routes>
          </main>
        </Router>
      </div>

      <main></main>
    </>
  );
}

export default App;
