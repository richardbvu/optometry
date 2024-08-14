import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import React from "react";

type Props = {};
const Loading = (props: Props) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Outlet />
    </Suspense>
  );
};
export default Loading;
