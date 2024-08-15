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
  return (
    <section className="bg-gray-20">
      <div className="w-full">
        <ul className="mx-auto flex items-center justify-around bg-white xs:flex-col sm:w-full sm:flex-col sm:gap-5 md:w-4/6 md:flex-row md:pt-7">
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
    </section>
  );
};
export default Cards;
