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
import DoctorsAndStaff from "./scenes/about/doctorsAndStaff.tsx";
import AboutLayout from "./scenes/about/aboutLayout.tsx";
import ScrollToTop from "./hooks/scrollToTop.ts";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<AboutLayout />}>
          <Route index element={<About />} />
          <Route path="doctors-staff" element={<DoctorsAndStaff />} />
        </Route>

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
