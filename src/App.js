import Header from "./component/Header"
import Home from "./component/Home"
import Footer from "./component/Footer"

import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div>
          <Header/>
          <Home/>
          <Footer/>
      </div>
    </div>
  );
}

export default App;
