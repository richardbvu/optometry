import useMediaQuery from "../../hooks/useMediaQuery";
import Card from "./Card";
import {
  ClipboardDocumentCheckIcon,
  StarIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/solid";

const cards: Array<ClassType> = [
  {
    name: "Patient Forms",
    description: "Get the forms you need.",
    icon: <ClipboardDocumentCheckIcon />,
  },
  {
    name: "Specials",
    description: "View our latest deals.",
    icon: <StarIcon />,
  },
  {
    name: "Shop Contacts",
    description: "Reorder contacts online.",
    icon: <ShoppingBagIcon />,
  },
];

type Props = {};
const index = ({}: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    // <div className="absolute bottom-[-200px] z-40 mx-auto w-full bg-gray-20">
    <div className="bg-gray-20">
      {isAboveMediumScreens ? (
        <div className="w-full">
          <ul className="mx-auto flex w-4/6 items-center justify-around bg-white">
            {cards.map((card, index) => (
              <Card
                key={index}
                name={card.name}
                description={card.description}
                icon={card.icon}
              />
            ))}
          </ul>
        </div>
      ) : (
        <div className="bg-white">
          <ul className="mx-auto flex w-5/6 flex-col gap-4 pt-10">
            {cards.map((card, index) => (
              <Card
                key={index}
                name={card.name}
                description={card.description}
                icon={card.icon}
              />
            ))}
          </ul>
        </div>
      )}
    </div>

    // <div className="">
    //   <ul className="mx-auto flex w-4/6 items-center justify-around">
    //     {cards.map((card, index) => (
    //       <Card
    //         key={index}
    //         name={card.name}
    //         description={card.description}
    //         icon={card.icon}
    //       />
    //     ))}
    //   </ul>
    // </div>
  );
};
export default index;
