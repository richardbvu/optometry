import { CalendarDaysIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "./Link";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};
const index = ({ selectedPage, setSelectedPage }: Props) => {
  return (
    <nav className="">
      <div className="mx-auto mt-8 flex w-8/12 basis-2/5 items-center justify-between rounded-lg bg-white px-7 py-5">
        <div className="">
          <div className="text-3xl">DR. RICHARD OPTOMETRY</div>
          <div className="text-lg font-light text-gray-400">
            MEMBER{" "}
            <span className="text-secondary-400 font-medium">
              VISION SOURCE
            </span>{" "}
            NETWORK
          </div>
        </div>
        <div className="just flex items-center gap-8">
          <p className="text-lg">(310) 456-5590</p>
          <button className="flex flex-row rounded border-2 border-slate-200 px-3 py-2 text-lg">
            <div className="flex gap-2">
              <CalendarDaysIcon className="h-7 w-7" />
              <p>Appointments</p>
            </div>
          </button>
        </div>
      </div>
      <div className="mx-auto basis-2/5">
        <div className="flex gap-20">
          <Link
            page="Home"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <Link
            page="About Us"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <Link
            page="Vision"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <Link
            page="Promotions"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <Link
            page="Patients"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <Link
            page="Contact"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        </div>
      </div>
    </nav>
  );
};
export default index;
