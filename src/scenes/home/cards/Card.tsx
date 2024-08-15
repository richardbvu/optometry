import { Link } from "react-router-dom";

type Props = {
  name: string;
  description: string;
  icon: JSX.Element;
  page: string;
};
const Card = ({ name, description, icon, page }: Props) => {
  return (
    <Link
      to={`${page}`}
      className="rounded border-[1px] border-gray-500 drop-shadow-xl hover:animate-wiggle hover:cursor-pointer hover:shadow-lg"
    >
      <div className="flex flex-col items-center justify-center rounded bg-white p-5 px-[50px] hover:border-black hover:bg-slate-50">
        <div className="mb-2 h-[50px] w-[50px] text-gray-500">{icon}</div>
        <p className="text-nowrap text-center text-lg font-semibold">{name}</p>
        <p className="text-center text-sm text-gray-500">{description}</p>
      </div>
    </Link>
  );
};
export default Card;
