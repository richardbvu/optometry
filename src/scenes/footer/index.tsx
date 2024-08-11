import useMediaQuery from "../../hooks/useMediaQuery";
import Link from "../navbar/Link";
import { EnvelopeIcon } from "@heroicons/react/24/solid";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};
const Footer = ({ selectedPage, setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <footer className="bg-gray-50">
      <div className="w-full bg-gray-20">
        <div className="mx-auto flex justify-start gap-10 bg-gray-100 p-10 md:w-4/6">
          {isAboveMediumScreens ? (
            <div className="flex basis-2/5 flex-col items-center gap-5">
              <div className="flex flex-col items-start gap-5">
                <p className="text-xl font-bold">Quick Links</p>
                <div>
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                <div>
                  <Link
                    page="About"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                <div>
                  <Link
                    page="Vision"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                <div>
                  <Link
                    page="Promotions"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                <div>
                  <Link
                    page="Patients"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                <div>
                  <Link
                    page="Contact"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          {isAboveMediumScreens ? (
            <div className="flex basis-2/5 justify-center">
              <div>
                <p className="text-xl font-bold">Contact Us</p>
                <div className="py-4">
                  <p className="font-bold">Dr. Richard Imamoto Optometry</p>
                  <p>4224 W Artesia Blvd</p>
                  <p>Torrance, CA 90248</p>
                </div>
                <p className="pb-4">
                  <span className="font-bold">Phone :</span> (310) 456-5590
                </p>
                <div className="flex w-fit items-center justify-center rounded bg-primary-300 px-[20px] py-[15px] text-center transition duration-300 hover:cursor-pointer hover:text-white">
                  <button>
                    <div className="flex gap-5">
                      <div className="h-6 w-6">
                        <EnvelopeIcon />
                      </div>
                      <p>Email Us</p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="mx-auto flex items-center justify-center text-center">
              <div className="flex flex-col items-center">
                <p className="text-xl font-bold">Contact Us</p>
                <div className="py-4">
                  <p className="font-bold">Dr. Richard Imamoto Optometry</p>
                  <p>4224 W Artesia Blvd</p>
                  <p>Torrance, CA 90248</p>
                </div>
                <p className="pb-4">
                  <span className="font-bold">Phone :</span> (310) 456-5590
                </p>
                <div className="flex w-fit rounded bg-primary-300 px-[20px] py-[15px] text-center transition duration-300 hover:cursor-pointer hover:text-white">
                  <button>
                    <div className="flex gap-5">
                      <div className="h-6 w-6">
                        <EnvelopeIcon />
                      </div>
                      <p>Email Us</p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="w-full md:pb-5">
          <div className="mx-auto rounded-b-lg bg-gray-100 md:w-4/6">
            <div className="mx-auto w-2/4 pb-5 text-center">
              Copyright © 2024 Dr. Richard Imamoto Optometry. All rights
              reserved. Privacy Policy / Website by Richard Vu.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
