import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

type Props = {
  text: string;
  title: string;
  page: string;
};
const hyperTextBox = ({ title, text, page }: Props) => {
  return (
    <Link to={`${page}`}>
      <div className="flex flex-col gap-4 rounded border-[1px] border-gray-50 p-7 transition duration-[500ms] hover:cursor-pointer hover:border-black hover:text-black">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl">{title}</h1>
          <div className="h-6 w-7">
            <ArrowRightIcon />
          </div>
        </div>
        <p className="w-[90%]">{text}</p>
      </div>
    </Link>
  );
};
export default hyperTextBox;
