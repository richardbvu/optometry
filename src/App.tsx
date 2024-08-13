import { useState } from "react";
import Navbar from "././scenes/navbar";
import Home from "./scenes/home";
import Footer from "./scenes/footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./scenes/about";
import Vision from "./scenes/vision";
import Promotions from "./scenes/promotions";
import Appointments from "./scenes/appointments";
import Contact from "./scenes/contact";
import Patients from "./scenes/patients";
import { SelectedPage } from "./shared/types";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home,
  );
  return (
    <BrowserRouter>
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <Routes>
        <Route
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          path="/"
          element={<Home />}
        ></Route>
        <Route
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          path="about"
          element={<About />}
        ></Route>
        <Route path="vision" element={<Vision />}></Route>
        <Route path="promotions" element={<Promotions />}></Route>
        <Route path="patients" element={<Patients />}></Route>
        <Route path="contact" element={<Contact />}></Route>
        <Route path="appointments" element={<Appointments />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>

    // <div className="app">
    //   <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    //   <Home />
    //   <Cards />
    //   <HomeInfo />
    //   <Footer />
    // </div>
  );
}

export default App;
