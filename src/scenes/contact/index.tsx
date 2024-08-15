import { useNavigate } from "react-router-dom";
import RequestAppointment from "../../shared/requestAppointment";

type Props = {};
const Contact = (props: Props) => {
  const navigate = useNavigate();
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    navigate("/contact/thank-you");
  };
  return (
    <section>
      <div className="w-full bg-gray-20">
        <div className="mx-auto flex gap-[50px] bg-white p-6 xs:flex-col sm:flex-col md:w-4/6 md:flex-row">
          {/* LEFT CONTENT */}
          <div className="flex basis-3/5 flex-col gap-3">
            <h1 className="text-3xl">Contact Us</h1>
            <p className="text-2xl text-gray-400">
              Contact Dr. Nancy Imamoto Optometry to schedule an appointment or
              to request additional information about our services. We look
              forward to hearing from you.
            </p>
            {/* CONTACT INFORMATION */}
            <div className="mb-5">
              <div className="grid grid-rows-3 border-[1px] border-gray-100">
                <div className="flex items-center border-b-[1px] border-gray-50 p-5">
                  Dr. Richard Imamoto Optometry
                </div>
                <div className="grid grid-flow-col divide-x border-gray-50">
                  <div className="ml-5 py-5">
                    <div className="">
                      <div className="font-bold">Phone : </div>
                      <span>
                        <a href="tel:3104565590">(310) 456-5590</a>
                      </span>{" "}
                    </div>
                  </div>
                  <div className="flex flex-col border-gray-50 py-5 pl-5">
                    <div>4224 W Artesia Blvd</div>
                    <div>Torrance, CA 90248</div>
                  </div>
                </div>
                <div className="ml-5 flex items-center border-t-[1px] border-gray-20">
                  <a href="mailto:staff.richardoptometry.com">
                    staff.richardoptometry.com
                  </a>
                </div>
              </div>
            </div>
            {/* FORM */}
            <div className="border-[1px] border-gray-100 p-5">
              <form action="" onSubmit={handleSubmit}>
                <div className="mb-4 flex flex-col">
                  <label htmlFor="name" className="font-2xl mb-2 text-lg">
                    Name <span className="text-primary-500">*</span>
                  </label>
                  <input
                    required
                    id="name"
                    type="text"
                    className="h-8 rounded-sm border-[1px] border-black pl-1"
                  />
                </div>
                <div className="mb-4 flex flex-col">
                  <label htmlFor="phone" className="font-2xl mb-2 text-lg">
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className="h-8 rounded-sm border-[1px] border-black pl-1"
                  />
                </div>
                <div className="mb-4 flex flex-col">
                  <label htmlFor="email" className="font-2xl mb-2 text-lg">
                    Email <span className="text-primary-500">*</span>
                  </label>
                  <input
                    required
                    id="email"
                    type="email"
                    className="h-8 rounded-sm border-[1px] border-black pl-1"
                  />
                </div>
                <div className="mb-4 flex flex-col">
                  <label htmlFor="message" className="font-2xl mb-2 text-lg">
                    Message
                  </label>
                  <textarea
                    name=""
                    id="message"
                    rows={10}
                    className="w-full border-[1px] border-black pl-1"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="h-[50px] w-[100px] rounded bg-primary-300 text-center"
                >
                  Submit
                </button>
              </form>
            </div>
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
export default Contact;
