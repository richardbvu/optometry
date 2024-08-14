import { Link } from "react-router-dom";
import { EnvelopeIcon } from "@heroicons/react/24/solid";

type Props = {};
const Footer = (props: Props) => {
  return (
    <footer className="bg-gray-50">
      <div className="w-full bg-gray-20">
        <div className="mx-auto flex justify-center gap-10 bg-gray-100 p-10 md:w-4/6">
          {/* FOOTER LEFT SIDE */}
          <div className="basis-2/5 flex-col gap-8 xs:hidden sm:hidden md:flex">
            <div className="flex flex-col items-start gap-5">
              <p className="pl-4 text-xl font-bold">Quick Links</p>
              <div className="transition duration-300 hover:text-white">
                <Link to={`/`} className="py-4 pl-4 pr-4">
                  Home
                </Link>
              </div>
              <div className="transition duration-300 hover:text-white">
                <Link to={`about`} className="py-4 pl-4 pr-4">
                  About
                </Link>
              </div>
              <div className="transition duration-300 hover:text-white">
                <Link to={`vision`} className="py-4 pl-4 pr-4">
                  Vision
                </Link>
              </div>
              <div className="transition duration-300 hover:text-white">
                <Link to={`promotions`} className="py-4 pl-4 pr-4">
                  Promotions
                </Link>
              </div>
              <div className="transition duration-300 hover:text-white">
                <Link to={`patients`} className="py-4 pl-4 pr-4">
                  Patients
                </Link>
              </div>
              <div className="transition duration-300 hover:text-white">
                <Link to={`contact`} className="py-4 pl-4 pr-4">
                  Contact
                </Link>
              </div>
            </div>
          </div>
          {/* FOOTER RIGHT SIDE */}
          <div className="md:text-normal flex basis-2/5 justify-center xs:mx-auto sm:mx-auto md:mx-0">
            <div className="xs:text-center sm:text-center md:text-start">
              <p className="text-xl font-bold">Contact Us</p>
              <div className="py-4">
                <p className="font-bold">Dr. Richard Imamoto Optometry</p>
                <p>4224 W Artesia Blvd</p>
                <p>Torrance, CA 90248</p>
              </div>
              <div>
                <span className="font-bold">Phone : </span>
                <a href="tel:3104565590" className="text-nowrap">
                  (310) 456-5590
                </a>
              </div>
              <div className="mt-5 flex xs:justify-center sm:justify-center md:justify-start">
                <a
                  className="flex w-[150px] items-center justify-center gap-4 rounded bg-primary-300 py-4"
                  href="mailto:staff.richardoptometry.com"
                >
                  <div className="h-6 w-6">
                    <EnvelopeIcon />
                  </div>
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* COPYRIGHT */}
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
