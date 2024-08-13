import { Link, NavLink } from "react-router-dom";
import useMediaQuery from "../../hooks/useMediaQuery";
import RequestAppointment from "../../shared/requestAppointment";
import HyperTextBox from "../../shared/hyperTextBox";
import LensesOptions from "../../assets/LensesOptions.png";

type Props = {};
const Vision = (props: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <section>
      <div className="w-full bg-gray-20">
        {isAboveMediumScreens ? (
          <div className="mx-auto flex w-4/6 flex-row gap-[50px] bg-white p-6">
            {/* LEFT CONTENT */}
            <div className="flex basis-3/5 flex-col gap-3">
              <h1 className="text-3xl">Vision Care & Products</h1>
              <p className="text-2xl text-gray-400">
                Dr. Richard Imamoto Optometry offers a number of cutting-edge
                vision care services and products at our optometrist office in
                Torrance.
                {/* CONTROL + SHIFT + L = FIND ALL INSTANCES */}
              </p>
              <p className="pb-5">
                To learn more about the specific products we offer and
                conditions we treat, please select one of the subcategories
                below and request an appointment with your eye care provider.
              </p>
              <HyperTextBox
                page="lenses"
                title="Lenses and Frames"
                text="Review the variety of lenses and frames available at our Torrance optometrist office."
              />
              <HyperTextBox
                title="Contacts"
                text="A list of options and information about the contact lenses offered at Dr. Richard Imamoto Optometry."
              />
              <HyperTextBox
                title="Vision Correction"
                text="A brief illustration of some of the most common vision correction services offered at Dr. Richard Imamoto Optometry."
              />
              <HyperTextBox
                title="Eye Conditions"
                text="Brief descriptions of the various eye conditions we commonly see, diagnose and treat at our office in Torrance, including lazy eye, cataracts and more."
              />
              <HyperTextBox
                title="Eye Diseases"
                text="A quick look at some of the most common eye diseases diagnosed, and often treated, at Dr. Richard Imamoto Optometry, including pink eye, glaucoma and more."
              />
              <HyperTextBox
                title="Vision Problems"
                text="A concise guide to some of the most common vision problems diagnosed, and often treated, at our Torrance optometric office, including astigmatism, farsightedness and more."
              />
            </div>
            {/* RIGHT SIDE BAR */}
            <div className="flex basis-1/5 flex-col rounded border-[1px] border-gray-50 p-10 md:ml-5">
              <div className="mb-[100px] flex flex-col">
                <div className="mb-4 text-nowrap text-lg font-bold hover:text-primary-500">
                  <Link to={`/vision`}>Vision Care & Products</Link>
                </div>
                <div className="hover:text-primary-500">
                  <div className="ml-5">
                    <NavLink
                      // className={({ isActive, isPending }) => {
                      //   return isActive ? "ml-5 font-bold" : "";
                      // }}
                      to={"lenses"}
                    >
                      Lenses and Frames
                    </NavLink>
                  </div>
                </div>
              </div>
              {/* REQUEST APPOINTMENT */}
              <RequestAppointment />
            </div>
          </div>
        ) : (
          // MEDIA QUERY MEDIUM SCREENS
          <div className="mx-auto flex flex-row flex-col gap-[50px] bg-white p-6">
            {/* LEFT CONTENT FOR MEDIA QUERY */}
            <div className="flex basis-3/5 flex-col gap-3">
              <h1 className="text-3xl">Vision Care & Products</h1>
              <p className="text-2xl text-gray-400">
                Dr. Richard Imamoto Optometry offers a number of cutting-edge
                vision care services and products at our optometrist office in
                Torrance.
                {/* CONTROL + SHIFT + L = FIND ALL INSTANCES */}
              </p>
              <p className="pb-5">
                To learn more about the specific products we offer and
                conditions we treat, please select one of the subcategories
                below and request an appointment with your eye care provider.
              </p>
              <HyperTextBox
                page="lenses"
                title="Lenses and Frames"
                text="Review the variety of lenses and frames available at our Torrance optometrist office."
              />
              <HyperTextBox
                title="Contacts"
                text="A list of options and information about the contact lenses offered at Dr. Richard Imamoto Optometry."
              />
              <HyperTextBox
                title="Vision Correction"
                text="A brief illustration of some of the most common vision correction services offered at Dr. Richard Imamoto Optometry."
              />
              <HyperTextBox
                title="Eye Conditions"
                text="Brief descriptions of the various eye conditions we commonly see, diagnose and treat at our office in Torrance, including lazy eye, cataracts and more."
              />
              <HyperTextBox
                title="Eye Diseases"
                text="A quick look at some of the most common eye diseases diagnosed, and often treated, at Dr. Richard Imamoto Optometry, including pink eye, glaucoma and more."
              />
              <HyperTextBox
                title="Vision Problems"
                text="A concise guide to some of the most common vision problems diagnosed, and often treated, at our Torrance optometric office, including astigmatism, farsightedness and more."
              />
            </div>
            {/* RIGHT SIDE BAR FOR MEDIA QUERY*/}
            <div className="flex basis-1/5 flex-col rounded border-[1px] border-gray-50 p-10 md:ml-5">
              <div className="mb-[100px] flex flex-col">
                <div className="mb-4 text-nowrap text-lg font-bold hover:text-primary-500">
                  <Link to={`/vision`}>Vision Care & Products</Link>
                </div>
                <div className="hover:text-primary-500">
                  <div className="ml-5">
                    <NavLink
                      // className={({ isActive, isPending }) => {
                      //   return isActive ? "ml-5 font-bold" : "";
                      // }}
                      to={"lenses"}
                    >
                      Lenses and Frames
                    </NavLink>
                  </div>
                </div>
              </div>
              {/* REQUEST APPOINTMENT */}
              <RequestAppointment />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
export default Vision;
