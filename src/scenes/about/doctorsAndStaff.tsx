import { CalendarDaysIcon } from "@heroicons/react/24/solid";
import { Link, NavLink } from "react-router-dom";
import useMediaQuery from "../../hooks/useMediaQuery";

type Props = {};
const doctorsAndStaff = (props: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <section>
      <div className="w-full bg-gray-20">
        {isAboveMediumScreens ? (
          <div className="mx-auto flex w-4/6 flex-row gap-[50px] bg-white p-6">
            {/* LEFT CONTENT */}
            <div className="flex basis-3/5 flex-col gap-3">
              <h1 className="text-3xl">Doctors & Staff</h1>
              <p className="text-2xl text-gray-400">
                Meet the experienced and friendly doctors and staff who make Dr.
                Richard Imamoto Optometry a proud provider of vision care
                products and services in Torrance.
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
                    <NavLink
                      // className={({ isActive, isPending }) => {
                      //   return isActive ? "font-bold" : "";
                      // }}
                      to={"."}
                    >
                      Doctors & Staff
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col gap-4 pb-4">
                  <p className="w-[200px] text-center text-lg">
                    Request Appointment
                  </p>
                  <p className="w-[200px] text-center text-sm">
                    You can schedule your next appointment with us online!
                  </p>
                </div>
                <div>
                  <div className="flex flex-row rounded border-slate-200 bg-primary-300 py-2 text-lg transition duration-[1000ms] ease-out hover:border-black">
                    <button className="flex items-center justify-center gap-3 px-10 transition duration-300 hover:text-white">
                      <CalendarDaysIcon className="h-7 w-7" />
                      <div className="text-center">
                        <Link to={`/appointments`}>Appointments</Link>
                      </div>
                    </button>
                  </div>
                </div>
                <div className="mt-4">
                  <a href="tel:3104565590" className="text-nowrap text-lg">
                    (310) 456-5590
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // MEDIA QUERY MEDIUM SCREENS
          <div className="mx-auto mb-10 flex flex-col gap-[50px] bg-white p-6">
            {/* LEFT CONTENT */}
            <div className="mb-10 flex basis-3/5 flex-col gap-3">
              <h1 className="text-3xl">Doctors & Staff</h1>
              <p className="text-2xl text-gray-400">
                Meet the experienced and friendly doctors and staff who make Dr.
                Richard Imamoto Optometry a proud provider of vision care
                products and services in Torrance.
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
                    <NavLink
                      // className={({ isActive, isPending }) => {
                      //   return isActive ? "font-bold" : "";
                      // }}
                      to={"."}
                    >
                      Doctors & Staff
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col gap-4 pb-4">
                  <p className="w-[200px] text-center text-lg">
                    Request Appointment
                  </p>
                  <p className="w-[200px] text-center text-sm">
                    You can schedule your next appointment with us online!
                  </p>
                </div>
                <div>
                  <div className="flex flex-row rounded border-slate-200 bg-primary-300 py-2 text-lg transition duration-[1000ms] ease-out hover:border-black">
                    <button className="flex items-center justify-center gap-3 px-10 transition duration-300 hover:text-white">
                      <CalendarDaysIcon className="h-7 w-7" />
                      <div className="text-center">
                        <Link to={`/appointments`}>Appointments</Link>
                      </div>
                    </button>
                  </div>
                </div>
                <div className="mt-4">
                  <a href="tel:3104565590" className="text-nowrap text-lg">
                    (310) 456-5590
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
export default doctorsAndStaff;
