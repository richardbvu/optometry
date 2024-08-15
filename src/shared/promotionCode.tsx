type Props = {
  date: string;
  title: string;
  code: string;
};
const PromotionBox = ({ date, title, code }: Props) => {
  return (
    <div>
      <hr className="my-5" />
      <div className="ml-4">
        <div className="flex flex-row justify-start gap-5">
          <div className="rounded bg-gray-50 px-5 py-2">Valid through :</div>
          <div className="flex items-center">{date}</div>
        </div>
        <div className="ml-4 mt-3 text-2xl">{title}</div>
        <div className="ml-4 mt-3 text-2xl">CODE : {code}</div>
      </div>
    </div>
  );
};
export default PromotionBox;
