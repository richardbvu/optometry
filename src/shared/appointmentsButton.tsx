import { Link } from "react-router-dom";

type Props = {};
const appointmentsButton = (props: Props) => {
  return (
    <div className="w-full">
      <Link
        className="flex items-center justify-center rounded bg-primary-300 py-4 transition duration-200 hover:bg-primary-500 hover:text-white xs:w-[150px] sm:w-[150px] md:w-[150px]"
        to={`/appointments`}
      >
        Appointments
      </Link>
    </div>
  );
};
export default appointmentsButton;
