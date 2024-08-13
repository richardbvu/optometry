import { Outlet } from "react-router-dom";

type Props = {};
const AboutLayout = (props: Props) => {
  return (
    <div>
      <Outlet />
    </div>
  );
};
export default AboutLayout;
