import Header from "./component/Header"
import Footer from "./component/Footer"

import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div>
          <Header/>
          <Footer/>
      </div>
    </div>
  );
}

export default App;
