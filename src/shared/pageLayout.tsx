import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../scenes/navbar";
import Footer from "../scenes/footer";

const PageLayout = () => {
  return (
    <div>
      <ScrollRestoration />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
export default PageLayout;
