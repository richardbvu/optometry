import { Link, NavLink } from "react-router-dom";
import RequestAppointment from "../../shared/requestAppointment";

const DoctorsAndStaff = () => {
  return (
    <section>
      <div className="w-full bg-gray-20">
        <div className="mx-auto flex gap-[50px] bg-white p-6 xs:flex-col sm:flex-col md:w-4/6 md:flex-row">
          {/* LEFT CONTENT */}
          <div className="flex basis-3/5 flex-col gap-3">
            <h1 className="text-3xl">Doctors & Staff</h1>
            <p className="text-2xl text-gray-400">
              Meet the experienced and friendly doctors and staff who make Dr.
              Richard Imamoto Optometry a proud provider of vision care products
              and services in Torrance.
            </p>
            <p className="text-2xl">Dr. Richard Imamoto</p>
          </div>
          {/* RIGHT SIDE BAR */}
          <div className="flex basis-1/5 flex-col rounded border-[1px] border-gray-50 p-10 md:ml-5">
            <div className="mb-[100px] flex flex-col">
              <div className="mb-4 text-lg hover:text-primary-500">
                <Link to={`/about`}>About Us</Link>
              </div>
              <div className="hover:text-primary-500">
                <div className="ml-5 font-bold">
                  <NavLink to={"."}>Doctors & Staff</NavLink>
                </div>
              </div>
            </div>
            <RequestAppointment />
          </div>
        </div>
      </div>
    </section>
  );
};
export default DoctorsAndStaff;
