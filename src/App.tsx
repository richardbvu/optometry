import React, { Suspense } from "react";
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
import ScrollToTop from "./hooks/scrollToTop.ts";
import Lenses from "./scenes/vision/lenses.tsx";
import PageLayout from "./shared/pageLayout.tsx";
import Contacts from "./scenes/vision/contacts.tsx";
import VisionCorrection from "./scenes/vision/visionCorrection.tsx";
import EyeConditions from "./scenes/vision/eyeConditions.tsx";
import EyeDiseases from "./scenes/vision/eyeDiseases.tsx";
import VisionProblems from "./scenes/vision/visionProblems.tsx";
import ErrorPage from "./shared/errorPage.tsx";
import SuspenseLayout from "./shared/suspenseLayout.tsx";
import InsuranceInformation from "./scenes/patients/insuranceInformation.tsx";
import PatientForms from "./scenes/patients/patientForms.tsx";
import ContactThankYou from "./scenes/contact/contactThankYou.tsx";

const NavbarLazy = React.lazy(() => import("./scenes/navbar"));
const HomeLazy = React.lazy(() => import("./scenes/home"));
const AboutLazy = React.lazy(() => import("./scenes/about"));

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      {/* <Suspense fallback={<div>Loading....</div>}> */}
      <Suspense fallback={<div></div>}>
        {/* NAVBAR */}
        <NavbarLazy />
        <Routes>
          {/* LAYOUT FOR HOME */}
          <Route
            path="/"
            element={
              // <Suspense fallback={<div>loading LOADING LOADING</div>}>
              <HomeLazy />
              /* </Suspense> */
            }
          ></Route>
          {/* LAYOUT FOR ABOUT */}
          <Route path="about" element={<PageLayout />}>
            {/* INSIDE PAGE LAYOUT, THERE MUST BE A <OUTLET/> COMPONENT */}
            {/* <Route index element={<About />} /> */}
            <Route
              index
              element={
                // <Suspense fallback={<div>Loading...</div>}>
                <AboutLazy />
                // </Suspense>
              }
            />
            <Route path="doctors-staff" element={<DoctorsAndStaff />} />
          </Route>
          {/* LAYOUT FOR VISION */}
          <Route path="vision" element={<PageLayout />}>
            <Route index element={<Vision />} />
            <Route path="lenses" element={<Lenses />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="vision-correction" element={<VisionCorrection />} />
            <Route path="eye-conditions" element={<EyeConditions />} />
            <Route path="eye-diseases" element={<EyeDiseases />} />
            <Route path="vision-problems" element={<VisionProblems />} />
          </Route>
          {/* LAYOUT FOR PROMOTIONS */}
          <Route path="promotions" element={<Promotions />}></Route>
          {/* LAYOUT FOR PATIENTS */}
          <Route path="patients" element={<PageLayout />}>
            <Route index element={<Patients />}></Route>
            <Route
              path="insurance-information"
              element={<InsuranceInformation />}
            ></Route>
            <Route path="patient-forms" element={<PatientForms />}></Route>
          </Route>
          <Route path="contact" element={<PageLayout />}>
            <Route index element={<Contact />}></Route>
            <Route path="thank-you" element={<ContactThankYou />}></Route>
          </Route>

          <Route path="appointments" element={<Appointments />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
        {/* FOOTER */}
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
