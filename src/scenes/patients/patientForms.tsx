import { Link, NavLink } from "react-router-dom";
import useMediaQuery from "../../hooks/useMediaQuery";
import RequestAppointment from "../../shared/requestAppointment";
import HyperTextBox from "../../shared/hyperTextBox";
import PatientPhysicalForm from "./patientPhysicalForm";
import PatientHistoryQuestionnaire from "../../assets/Patient-History-Questionnaire.pdf";
import SpanishPatientHistoryQuestionnaire from "../../assets/Spanish-Patient-History-Questionnaire.pdf";

type Props = {};
const PatientForms = (props: Props) => {
  return (
    <section>
      <div className="w-full bg-gray-20">
        <div className="mx-auto flex gap-[50px] bg-white p-6 xs:flex-col sm:flex-col md:w-4/6 md:flex-row">
          {/* LEFT CONTENT */}
          <div className="flex basis-3/5 flex-col gap-3">
            <h1 className="text-3xl">Patient Forms</h1>
            <p className="mb-5 text-2xl text-gray-400">
              Access our patient forms that you can fill out before your next
              visit to Dr. Richard Imamoto Optometry in Torrance.
            </p>
            <p className="text-2xl">Our Forms</p>
            <PatientPhysicalForm
              pdf={PatientHistoryQuestionnaire}
              name="Patient History Questionnaire"
              type="PDF"
            />
            <PatientPhysicalForm
              pdf={SpanishPatientHistoryQuestionnaire}
              name="Patient History Questionnaire - Espanol"
              type="PDF"
            />
          </div>
          {/* RIGHT SIDE BAR */}
          <div className="flex basis-1/5 flex-col rounded border-[1px] border-gray-50 p-10 md:ml-5">
            <div className="mb-[100px] flex w-[200px] flex-col gap-4">
              <div className="text-nowrap text-lg hover:text-primary-500">
                <Link to={`.`}>Patients</Link>
              </div>
              <div className="hover:text-primary-500">
                <div className="ml-5">
                  <NavLink to={"/patients/insurance-information"}>
                    Insurance Information
                  </NavLink>
                </div>
              </div>
              <div className="font-bold hover:text-primary-500">
                <div className="ml-5">
                  <NavLink to={"."}>Patient Forms</NavLink>
                </div>
              </div>
            </div>
            {/* REQUEST APPOINTMENT */}
            <RequestAppointment />
          </div>
        </div>
      </div>
    </section>
  );
};
export default PatientForms;
