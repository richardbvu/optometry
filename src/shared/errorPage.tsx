import { Link } from "react-router-dom";
import Footer from "../scenes/footer";
import Navbar from "../scenes/navbar";

const ErrorPage = () => {
  return (
    <div>
      <Navbar />
      <section>
        <div className="w-full bg-gray-20">
          <div className="mx-auto flex w-4/6 justify-center bg-white p-20">
            <div className="flex flex-col gap-10 text-center">
              <p>This page isn't available. Sorry about that</p>
              <p className="underline underline-offset-2">
                <Link to={"/"}>Go Home</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default ErrorPage;
