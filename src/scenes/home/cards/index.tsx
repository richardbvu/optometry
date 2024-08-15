import useMediaQuery from "../../../hooks/useMediaQuery";
import Card from "../cards/Card";
import {
  ClipboardDocumentCheckIcon,
  StarIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/solid";

const cards: Array<{
  name: string;
  page: string;
  description: string;
  icon: JSX.Element;
}> = [
  {
    name: "Patient Forms",
    page: "/patients/patient-forms",
    description: "Get the forms you need.",
    icon: <ClipboardDocumentCheckIcon />,
  },
  {
    name: "Specials",
    page: "/promotions",

    description: "View our latest deals.",
    icon: <StarIcon />,
  },
  {
    name: "Shop Contacts",
    page: "/vision/contacts",
    description: "Reorder contacts online.",
    icon: <ShoppingBagIcon />,
  },
];

type Props = {};
const Cards = ({}: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    // <div className="absolute bottom-[-200px] z-40 mx-auto w-full bg-gray-20">
    <section className="bg-gray-20">
      {isAboveMediumScreens ? (
        <div className="w-full">
          <ul className="mx-auto flex w-4/6 items-center justify-around bg-white md:pt-7">
            {cards.map((card, index) => (
              <Card
                key={index}
                name={card.name}
                page={card.page}
                description={card.description}
                icon={card.icon}
              />
            ))}
          </ul>
        </div>
      ) : (
        <div className="bg-white">
          <ul className="mx-auto flex w-4/6 flex-col gap-4 pt-10">
            {cards.map((card, index) => (
              <Card
                key={index}
                name={card.name}
                page={card.page}
                description={card.description}
                icon={card.icon}
              />
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};
export default Cards;
