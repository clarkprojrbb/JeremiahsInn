import Header from "./component/Header"
import Home from "./component/Home"
import Contact from "./component/Contact"
import Donate from "./component/Donate"
import Volunteer from "./component/Volunteer"
import AboutUs from "./component/AboutUs";
import Footer from "./component/Footer"
import Residential from "./component/Residential"
import Nutrition from "./component/Nutrition"
import Recovery from "./component/Recovery"
import Form from "./component/Form"

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
                    <Route path="/volunteer" element={<Volunteer/>}/>
                    <Route path="/program-form" element={<Form/>}/>
                    <Route path="/about" element={<AboutUs/>}/>
                    <Route path="/residential" element={<Residential/>}/>
                    <Route path="/nutrition" element={<Nutrition/>}/>
                    <Route path="/recovery" element={<Recovery/>}/>
                </Routes>
                <Footer/>
            </div>
        </div>
    );
}

export default App;