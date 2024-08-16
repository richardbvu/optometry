import RequestAppointment from "../../shared/requestAppointment";

const ContactThankYou = () => {
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
              If you're attempting to make an appointment, please not that the
              date and time you requested may not be available. We will contact
              you you to confirm an exact date and time for your appointment.
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
export default ContactThankYou;
