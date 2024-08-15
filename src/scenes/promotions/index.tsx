import { Link, NavLink } from "react-router-dom";
import RequestAppointment from "../../shared/requestAppointment";
import PromotionCode from "../../shared/promotionCode";

type Props = {};
const Promotions = (props: Props) => {
  return (
    <section>
      <div className="w-full bg-gray-20">
        <div className="mx-auto flex gap-[50px] bg-white p-6 xs:flex-col sm:flex-col md:w-4/6 md:flex-row">
          {/* LEFT CONTENT */}
          <div className="flex basis-3/5 flex-col gap-3">
            <h1 className="text-3xl">Promotions</h1>
            <p className="text-2xl text-gray-400">
              Visit this page regularly to view the latest promotions offered at
              Dr. Nancy Imamoto Optometry in Gardena
            </p>

            <hr className="my-5" />
            <div>
              <PromotionCode
                date="December 31st, 2030"
                title="Current Wearers: Save up to $100 on Your Alcon Contact Lens Purchase"
                code="RICH2024"
              />
            </div>
            <hr className="my-5" />
            <div>
              <PromotionCode
                date="December 31st, 2030"
                title="New Wearers: New to an Alcon contact lens? Check out their New Wearer Rebate! Save up to $200 on Your Alcon Contact Lens Purchase"
                code="NEW200"
              />
            </div>
          </div>
          {/* RIGHT SIDE BAR */}
          <div className="flex basis-1/5 flex-col rounded border-[1px] border-gray-50 p-10 md:ml-5">
            <div className="mb-[100px] flex flex-col gap-4">
              {/* REQUEST APPOINTMENT */}
              <RequestAppointment />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Promotions;
