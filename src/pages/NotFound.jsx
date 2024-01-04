import Navbar from "../components/Navbar";
import Decoration from "../components/Decoration";
import PropTypes from "prop-types";

export default function NotFound({ logout }) {
  return (
    <>
      <Navbar logout={logout} />
      <div className="relative overflow-hidden min-h-screen">
        <div className="base-container flex flex-col gap-5 justify-center items-center h-screen">
          <img
            className="w-[70%] md:w-[60%] lg:w-[40%]"
            src="/404.svg"
            alt="404"
          />
          <h2 className="text-4xl font-bold">Page Not Found.</h2>
        </div>
        <Decoration position="right" />
        <Decoration position="left" />
      </div>
    </>
  );
}

NotFound.propTypes = {
  logout: PropTypes.func.isRequired,
}