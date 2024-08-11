type Props = {
  name: string;
  description: string;
  icon?: JSX.Element;
};
const Card = ({ name, description, icon }: Props) => {
  return (
    <li className="border-[1px] border-black drop-shadow-xl">
      <div className="flex flex-col items-center justify-center bg-white p-5 px-[50px]">
        <div className="mb-2 h-[50px] w-[50px] text-gray-500">{icon}</div>
        <p className="text-nowrap text-center text-lg font-semibold">{name}</p>
        <p className="text-center text-sm text-gray-500">{description}</p>
      </div>
    </li>
  );
};
export default Card;
