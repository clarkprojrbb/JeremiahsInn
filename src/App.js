import Header from "./component/Header"
import Home from "./component/Home"
import Contact from "./component/Contact"
import Donate from "./component/Donate"
import Footer from "./component/Footer"

import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div>
          <Header/>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/donate" element={<Donate />}/>
          </Routes>
          <Footer/>
      </div>
    </div>
  );
}

export default App;
