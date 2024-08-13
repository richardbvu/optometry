import { CalendarDaysIcon } from "@heroicons/react/24/solid";
import { Link, NavLink } from "react-router-dom";
import useMediaQuery from "../../hooks/useMediaQuery";
import RequestAppointment from "../../shared/requestAppointment";

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

              <RequestAppointment />
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
                    <NavLink to={"."}>Doctors & Staff</NavLink>
                  </div>
                </div>
              </div>
              <RequestAppointment />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
export default doctorsAndStaff;
