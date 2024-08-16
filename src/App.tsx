import React, { Suspense } from "react";
// import Navbar from "././scenes/navbar";
// import Home from "./scenes/home";
// import Footer from "./scenes/footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import About from "./scenes/about";
// import Vision from "./scenes/vision";
// import Promotions from "./scenes/promotions";
// import Appointments from "./scenes/appointments";
// import Contact from "./scenes/contact";
// import Patients from "./scenes/patients";
// import DoctorsAndStaff from "./scenes/about/doctorsAndStaff.tsx";
import ScrollToTop from "./hooks/scrollToTop.ts";
// import Lenses from "./scenes/vision/lenses.tsx";
// import PageLayout from "./shared/pageLayout.tsx";
// import Contacts from "./scenes/vision/contacts.tsx";
// import VisionCorrection from "./scenes/vision/visionCorrection.tsx";
// import EyeConditions from "./scenes/vision/eyeConditions.tsx";
// import EyeDiseases from "./scenes/vision/eyeDiseases.tsx";
// import VisionProblems from "./scenes/vision/visionProblems.tsx";
// import ErrorPage from "./shared/errorPage.tsx";
// import InsuranceInformation from "./scenes/patients/insuranceInformation.tsx";
// import PatientForms from "./scenes/patients/patientForms.tsx";
// import ContactThankYou from "./scenes/contact/contactThankYou.tsx";
// import AppointmentsThankYou from "./scenes/appointments/appointmentsThankYou.tsx";

const NavbarLazy = React.lazy(() => import("./scenes/navbar"));
const HomeLazy = React.lazy(() => import("./scenes/home"));
const PageLayoutLazy = React.lazy(() => import("./shared/pageLayout.tsx"));
const AboutLazy = React.lazy(() => import("./scenes/about"));
const DoctorsAndStaffLazy = React.lazy(
  () => import("./scenes/about/doctorsAndStaff.tsx"),
);

const VisionLazy = React.lazy(() => import("./scenes/vision"));
const LensesLazy = React.lazy(() => import("./scenes/vision/lenses.tsx"));
const ContactsLazy = React.lazy(() => import("./scenes/vision/contacts.tsx"));
const VisionCorrectionLazy = React.lazy(
  () => import("./scenes/vision/visionCorrection.tsx"),
);
const EyeConditionsLazy = React.lazy(
  () => import("./scenes/vision/eyeConditions.tsx"),
);
const EyeDiseasesLazy = React.lazy(
  () => import("./scenes/vision/eyeDiseases.tsx"),
);
const VisionProblemsLazy = React.lazy(
  () => import("./scenes/vision/visionProblems.tsx"),
);
const PromotionsLazy = React.lazy(() => import("./scenes/promotions"));
const PatientsLazy = React.lazy(() => import("./scenes/patients"));
const InsuranceInformationLazy = React.lazy(
  () => import("./scenes/patients/insuranceInformation.tsx"),
);
const PatientFormsLazy = React.lazy(
  () => import("./scenes/patients/patientForms.tsx"),
);
const ContactLazy = React.lazy(() => import("./scenes/contact"));
const ContactThankYouLazy = React.lazy(
  () => import("./scenes/contact/contactThankYou.tsx"),
);
const AppointmentsLazy = React.lazy(() => import("./scenes/appointments"));
const AppointmentsThankYouLazy = React.lazy(
  () => import("./scenes/appointments/appointmentsThankYou.tsx"),
);
const ErrorPageLazy = React.lazy(() => import("./shared/errorPage.tsx"));
const FooterLazy = React.lazy(() => import("./scenes/footer"));

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      {/* <Suspense fallback={<div>Loading....</div>}> */}
      <Suspense fallback={<div></div>}>
        {/* NAVBAR */}
        <NavbarLazy />
        <Routes>
          {/* HOME */}
          <Route path="/" element={<HomeLazy />}></Route>
          {/* ABOUT */}
          <Route path="about" element={<PageLayoutLazy />}>
            {/* INSIDE PAGE LAYOUT COMPONENT, THERE MUST BE A <OUTLET/> COMPONENT */}
            <Route index element={<AboutLazy />} />
            <Route path="doctors-staff" element={<DoctorsAndStaffLazy />} />
          </Route>
          {/* VISION */}
          <Route path="vision" element={<PageLayoutLazy />}>
            <Route index element={<VisionLazy />} />
            <Route path="lenses" element={<LensesLazy />} />
            <Route path="contacts" element={<ContactsLazy />} />
            <Route
              path="vision-correction"
              element={<VisionCorrectionLazy />}
            />
            <Route path="eye-conditions" element={<EyeConditionsLazy />} />
            <Route path="eye-diseases" element={<EyeDiseasesLazy />} />
            <Route path="vision-problems" element={<VisionProblemsLazy />} />
          </Route>
          {/* PROMOTIONS */}
          <Route path="promotions" element={<PromotionsLazy />}></Route>
          {/* PATIENTS */}
          <Route path="patients" element={<PageLayoutLazy />}>
            <Route index element={<PatientsLazy />}></Route>
            <Route
              path="insurance-information"
              element={<InsuranceInformationLazy />}
            ></Route>
            <Route path="patient-forms" element={<PatientFormsLazy />}></Route>
          </Route>
          {/* CONTACT */}
          <Route path="contact" element={<PageLayoutLazy />}>
            <Route index element={<ContactLazy />}></Route>
            <Route path="thank-you" element={<ContactThankYouLazy />}></Route>
          </Route>
          {/* APPOINTMENTS */}
          <Route path="appointments" element={<PageLayoutLazy />}>
            <Route index element={<AppointmentsLazy />}></Route>
            <Route
              path="thank-you"
              element={<AppointmentsThankYouLazy />}
            ></Route>
          </Route>
          {/* ERROR */}
          <Route path="*" element={<ErrorPageLazy />}></Route>
        </Routes>
        {/* FOOTER */}
        <FooterLazy />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
