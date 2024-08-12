import { ClockIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import useMediaQuery from "../../../hooks/useMediaQuery";

type Props = {};
const homeInfo = (props: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <section className="">
      <div className="w-full md:bg-gray-20">
        <div className="mx-auto w-4/6 bg-white pb-10">
          <div className="flex flex-col gap-5 pt-10 md:ml-10 md:w-3/4">
            <p className="text-3xl">Dr. Richard Imamoto Optometry Services</p>
            <p>
              Dr. Richard Imamoto Optometry has been a proud provider of
              optometry services and vision care products in the Torrance
              community since 2015, and we want to help you achieve and maintain
              clear vision for years to come.
            </p>
            <p>
              Our experienced eye doctor offers comprehensive vision
              examinations at our Torrance optometry office and are trained in
              the diagnosis and treatment of a wide array of eye diseases,
              {/* LINKS TO THESE PAGES LATER */}
              conditions, and problems. We use advanced diagnostic technology
              and vision correction products and are committed to improving the
              quality of life of persons in the Torrance community through
              enhanced vision. Give yourself the gift of clear vision – schedule
              an appointment with your eye care provider today.
            </p>
          </div>
          <div className="mt-10 rounded border-[1px] border-gray-50 p-10 md:mx-10">
            {/* INFO TITLE */}
            <p className="mb-5 text-2xl">Dr. Richard Imamoto Optometry</p>
            {/* INFO */}
            {isAboveMediumScreens ? (
              <div className="flex gap-24">
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-5">
                    <div className="h-6 w-6">
                      <MapPinIcon />
                    </div>
                    <div>
                      <p>4224 W Artesia Blvd</p>
                      <p>Torrance, CA 90248</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-5">
                    <div className="h-6 w-6">
                      <PhoneIcon />
                    </div>
                    <div>
                      <a href="tel:3104565590" className="font-bold">
                        (310) 456-5590
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="h-6 w-6">
                    <ClockIcon />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p>
                      <span className="font-bold">Monday :</span> 10:00am -
                      1:00pm
                    </p>
                    <p>
                      <span className="font-bold">Monday :</span> 2:00pm -
                      6:00pm
                    </p>
                    <p>
                      <span className="font-bold">Tuesday :</span> 10:00am -
                      1:00pm
                    </p>
                    <p>
                      <span className="font-bold">Tuesday :</span> 2:00pm -
                      6:00pm
                    </p>
                    <p>
                      <span className="font-bold">Thursday :</span> 10:00am -
                      1:00pm
                    </p>
                    <p>
                      <span className="font-bold">Thursday :</span> 2:00pm -
                      6:00pm
                    </p>
                    <p>
                      <span className="font-bold">Friday :</span> 10:00am -
                      1:00pm
                    </p>
                    <p>
                      <span className="font-bold">Friday :</span> 2:00pm -
                      6:00pm
                    </p>
                    <p>
                      <span className="font-bold">Saturday :</span> 9:00am -
                      1:00pm
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-12">
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-5">
                    <div className="h-6 w-6">
                      <MapPinIcon />
                    </div>
                    <div>
                      <p>4224 W Artesia Blvd</p>
                      <p>Torrance, CA 90248</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-5">
                    <div className="h-6 w-6">
                      <PhoneIcon />
                    </div>
                    <div>
                      <a href="tel:3104565590" className="font-bold">
                        (310) 456-5590
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex w-full">
                  {/* <div className="h-6 w-6">
                    <ClockIcon />
                  </div> */}
                  <div className="flex flex-col gap-1">
                    <p>
                      <span className="font-bold">Monday :</span> 10:00am -
                      1:00pm
                    </p>
                    <p>
                      <span className="font-bold">Monday :</span> 2:00pm -
                      6:00pm
                    </p>
                    <p>
                      <span className="font-bold">Tuesday :</span> 10:00am -
                      1:00pm
                    </p>
                    <p>
                      <span className="font-bold">Tuesday :</span> 2:00pm -
                      6:00pm
                    </p>
                    <p>
                      <span className="font-bold">Thursday :</span> 10:00am -
                      1:00pm
                    </p>
                    <p>
                      <span className="font-bold">Thursday :</span> 2:00pm -
                      6:00pm
                    </p>
                    <p>
                      <span className="font-bold">Friday :</span> 10:00am -
                      1:00pm
                    </p>
                    <p>
                      <span className="font-bold">Friday :</span> 2:00pm -
                      6:00pm
                    </p>
                    <p>
                      <span className="font-bold">Saturday :</span> 9:00am -
                      1:00pm
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default homeInfo;
