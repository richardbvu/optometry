import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import React, { Suspense } from "react";
import DoctorsAndStaff from "./scenes/about/doctorsAndStaff.tsx";
import Lenses from "./scenes/vision/lenses.tsx";
import Contacts from "./scenes/vision/contacts.tsx";
import VisionCorrection from "./scenes/vision/visionCorrection.tsx";
import EyeConditions from "./scenes/vision/eyeConditions.tsx";
import EyeDiseases from "./scenes/vision/eyeDiseases.tsx";
import VisionProblems from "./scenes/vision/visionProblems.tsx";
import InsuranceInformation from "./scenes/patients/insuranceInformation.tsx";
import PatientForms from "./scenes/patients/patientForms.tsx";
const HomeLazy = React.lazy(() => import("./scenes/home"));
const PageLayoutLazy = React.lazy(() => import("./shared/pageLayout.tsx"));
const AboutLazy = React.lazy(() => import("./scenes/about"));
const VisionLazy = React.lazy(() => import("./scenes/vision"));
const PromotionsLazy = React.lazy(() => import("./scenes/promotions"));
const PatientsLazy = React.lazy(() => import("./scenes/patients"));
const ContactLazy = React.lazy(() => import("./scenes/contact"));
const ContactThankYouLazy = React.lazy(
  () => import("./scenes/contact/contactThankYou.tsx"),
);
const AppointmentsLazy = React.lazy(() => import("./scenes/appointments"));
const AppointmentsThankYouLazy = React.lazy(
  () => import("./scenes/appointments/appointmentsThankYou.tsx"),
);
const ErrorPageLazy = React.lazy(() => import("./shared/errorPage.tsx"));
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div></div>}>
        <PageLayoutLazy />
      </Suspense>
    ),
    errorElement: <ErrorPageLazy />,
    children: [
      { index: true, path: "/", element: <HomeLazy /> },
      { path: "about", element: <AboutLazy /> },
      { path: "/about/doctors-staff", element: <DoctorsAndStaff /> },
      { path: "vision", element: <VisionLazy /> },
      { path: "vision/lenses", element: <Lenses /> },
      { path: "vision/contacts", element: <Contacts /> },
      { path: "vision/vision-correction", element: <VisionCorrection /> },
      { path: "vision/eye-conditions", element: <EyeConditions /> },
      { path: "vision/eye-diseases", element: <EyeDiseases /> },
      { path: "vision/vision-problems", element: <VisionProblems /> },
      { path: "promotions", element: <PromotionsLazy /> },
      { path: "patients", element: <PatientsLazy /> },
      {
        path: "patients/insurance-information",
        element: <InsuranceInformation />,
      },
      { path: "patients/patient-forms", element: <PatientForms /> },
      { path: "contact", element: <ContactLazy /> },
      { path: "contact/thank-you", element: <ContactThankYouLazy /> },
      { path: "appointments", element: <AppointmentsLazy /> },
      { path: "appointments/thank-you", element: <AppointmentsThankYouLazy /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
