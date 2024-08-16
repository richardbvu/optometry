import AppointmentsButton from "../shared/appointmentsButton";

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
        <AppointmentsButton />
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
