import { useNavigate } from "react-router-dom";

const Appointments = () => {
  const navigate = useNavigate();
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    navigate("/appointments/thank-you");
  };
  return (
    <section>
      <div className="w-full bg-gray-20">
        <div className="mx-auto flex gap-[50px] bg-white p-6 xs:flex-col sm:flex-col md:w-4/6 md:flex-row">
          {/* TITLE */}
          <div className="flex basis-4/5 flex-col gap-3">
            <h1 className="text-3xl">Make an Appointment</h1>
            <p className="text-2xl text-gray-400">
              Please take a moment to request an appointment and a member of our
              staff will be in touch with you shortly to schedule and confirm
              your appointment.
            </p>
            {/* FIELDSET */}
            <fieldset className="border-[1px] border-gray-100 p-5">
              <div className="flex flex-col">
                <legend className="text-2xl font-bold">
                  Contact Information
                </legend>
                <div>
                  Please provide current contact information so that we can
                  contact you to confirm your appointment.
                </div>
                <hr className="my-2" />
              </div>
              {/* FORM */}
              <form action="" onSubmit={handleSubmit}>
                {/* NAME */}
                <div className="mb-4 flex flex-col">
                  <label
                    htmlFor="name"
                    className="font-2xl mb-2 text-lg font-bold"
                  >
                    Name <span className="text-primary-500">*</span>
                  </label>
                  <input
                    required
                    id="name"
                    type="text"
                    className="h-8 rounded-sm border-[1px] border-black pl-1"
                  />
                </div>
                {/* PHONE */}
                <div className="mb-4 flex flex-col">
                  <label
                    htmlFor="phone"
                    className="font-2xl mb-2 text-lg font-bold"
                  >
                    Phone <span className="text-primary-500">*</span>
                  </label>
                  <input
                    required
                    id="phone"
                    pattern="^-?[0-9]\d*\.?\d*$"
                    type="tel"
                    className="h-8 rounded-sm border-[1px] border-black pl-1"
                  />
                </div>
                {/* EMAIL */}
                <div className="mb-4 flex flex-col">
                  <label
                    htmlFor="email"
                    className="font-2xl mb-2 text-lg font-bold"
                  >
                    Email <span className="text-primary-500">*</span>
                  </label>
                  <input
                    required
                    id="email"
                    type="email"
                    className="h-8 rounded-sm border-[1px] border-black pl-1"
                  />
                </div>
                {/* PATIENT STATUS */}
                <div className="mb-4 flex flex-col">
                  <div className="font-2xl mb-2 text-lg font-bold">
                    Patient Status <span className="text-primary-500">*</span>
                  </div>
                  <div className="ml-5 flex flex-col gap-2">
                    <div className="flex gap-2">
                      <label
                        htmlFor="patient-status-new"
                        className="has-[:checked]:font-bold"
                      >
                        <div className="flex gap-3">
                          <input
                            required
                            name="patient-status"
                            id="patient-status-new"
                            type="radio"
                            className="rounded-sm border-[1px] border-black pl-1 checked:font-bold"
                          />
                          <div>New Patient</div>
                        </div>
                      </label>
                    </div>
                    <div className="flex gap-2">
                      <label
                        htmlFor="patient-status-existing"
                        className="has-[:checked]:font-bold"
                      >
                        <div className="flex gap-3">
                          <input
                            name="patient-status"
                            id="patient-status-existing"
                            type="radio"
                            className="rounded-sm border-[1px] border-black pl-1 checked:font-bold"
                          />
                          <div>Existing Patient</div>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
                {/* DATE & TIMES */}
                <div className="mb-4">
                  <div className="mb-2 text-lg font-bold">Date & Times</div>
                  <div>
                    Please be aware that appointments must be requested at least
                    1 day(s) in advance.
                  </div>
                </div>
                {/* PREFERRED DATE */}
                <div className="mb-4">
                  <label
                    className="font-2xl text-lg font-bold"
                    htmlFor="preferred-date"
                  >
                    Preferred Date <span className="text-primary-500">*</span>
                  </label>
                  <div className="ml-5">
                    <input
                      className="mt-2 rounded-sm border-[1px] border-black p-2"
                      type="date"
                      id="preferred-date"
                      required
                    />
                  </div>
                </div>
                {/* ALTERNATIVE DATE */}
                <div className="mb-4">
                  <label
                    className="font-2xl text-lg font-bold"
                    htmlFor="alternative-date"
                  >
                    Alternative Date
                  </label>
                  <div className="ml-5">
                    <input
                      className="mt-2 rounded-sm border-[1px] border-black p-2"
                      type="date"
                      id="alternative-date"
                    />
                  </div>
                </div>
                {/* TIME */}
                <div className="mb-4">
                  <label className="font-2xl text-lg font-bold" htmlFor="time">
                    Time <span className="text-primary-500">*</span>
                  </label>
                  <div className="ml-5">
                    <select
                      className="mt-2 w-[160px] rounded-sm border-[1px] border-black p-2"
                      id="time"
                      required
                    >
                      <option value="morning">Morning</option>
                      <option value="afternoon">Afternoon</option>
                      <option value="anytime">Anytime</option>
                    </select>
                  </div>
                </div>
                {/* COMMENTS */}
                <div className="mb-4 flex flex-col">
                  <label
                    htmlFor="message"
                    className="font-2xl mb-2 text-lg font-bold"
                  >
                    Comments
                  </label>
                  <textarea
                    name=""
                    id="message"
                    rows={5}
                    placeholder="Please leave any additional comments"
                    className="w-full border-[1px] border-black p-2"
                  ></textarea>
                </div>
                <div className="mb-4 max-w-[450px]">
                  <span className="font-bold">Important: </span>Please note that
                  the date and time you requested may not be available. We will
                  contact you to confirm your actual appointment details.
                </div>
                {/* BUTTON */}
                <button
                  type="submit"
                  className="h-[50px] w-[100px] rounded bg-primary-300 text-center"
                >
                  Submit
                </button>
              </form>
            </fieldset>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Appointments;
