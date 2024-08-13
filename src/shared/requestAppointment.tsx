import { CalendarDaysIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

type Props = {};
const RequestAppointment = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col gap-4 pb-4">
        <p className="w-[200px] text-center text-lg">Request Appointment</p>
        <p className="w-[200px] text-center text-sm">
          You can schedule your next appointment with us online!
        </p>
      </div>
      <div className="mt-5">
        <Link
          className="flex w-[200px] items-center justify-center gap-4 rounded bg-primary-300 py-4"
          to={`/appointments`}
        >
          <div className="h-6 w-6">
            <CalendarDaysIcon />
          </div>
          Appointments
        </Link>
      </div>
      <div className="mt-4">
        <a href="tel:3104565590" className="text-nowrap text-lg">
          (310) 456-5590
        </a>
      </div>
    </div>
  );
};
export default RequestAppointment;
