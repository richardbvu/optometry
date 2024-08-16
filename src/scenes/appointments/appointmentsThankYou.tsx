import RequestAppointment from "../../shared/requestAppointment";

const AppointmentsThankYou = () => {
  return (
    <section>
      <div className="w-full bg-gray-20">
        <div className="mx-auto flex gap-[50px] bg-white p-6 xs:flex-col sm:flex-col md:w-4/6 md:flex-row">
          {/* LEFT CONTENT */}
          <div className="flex basis-3/5 flex-col gap-3">
            <h1 className="text-3xl">Thank You!</h1>
            <p className="text-2xl text-gray-400">
              We've received your message and a member of our staff will contact
              you shortly.
            </p>
            <p className="italic">
              Please note that the date and time you requested may not be
              available. We will contact you to confirm an exact datte and time
              for yor appointment.
            </p>
          </div>
          {/* RIGHT SIDE BAR */}
          <div className="flex basis-1/5 flex-col rounded border-[1px] border-gray-50 p-10 md:ml-5">
            {/* REQUEST APPOINTMENT */}
            <RequestAppointment />
          </div>
        </div>
      </div>
    </section>
  );
};
export default AppointmentsThankYou;
