import { Suspense } from "react";
import { Outlet } from "react-router-dom";

type Props = {};
const PageLayout = (props: Props) => {
  return (
    // <Suspense fallback={<div>Loading...</div>}>
    <div>
      <Outlet />
    </div>
    // </Suspense>
  );
};
export default PageLayout;
