type Props = {
  name: string;
  type: string;
  pdf?: any;
};
const PatientPhysicalForm = ({ name, type, pdf }: Props) => {
  return (
    <div>
      <hr className="mb-5" />
      <div className="ml-5 flex gap-1">
        <a href={pdf} download={name} target="_blank">
          {name}
        </a>
        <div className="text-black">[{type}]</div>
      </div>
    </div>
  );
};
export default PatientPhysicalForm;
