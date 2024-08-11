type Props = {
  name: string;
  description: string;
  icon?: JSX.Element;
};
const Card = ({ name, description, icon }: Props) => {
  return (
    <li className="hover:animate-wiggle rounded border-[1px] border-gray-500 drop-shadow-xl hover:cursor-pointer hover:shadow-2xl">
      <div className="flex flex-col items-center justify-center rounded bg-white p-5 px-[50px] hover:scale-[105%] hover:bg-gray-50">
        <div className="mb-2 h-[50px] w-[50px] text-gray-500">{icon}</div>
        <p className="text-nowrap text-center text-lg font-semibold">{name}</p>
        <p className="text-center text-sm text-gray-500">{description}</p>
      </div>
    </li>
  );
};
export default Card;
