import React from "react";
import { Link } from "react-router";

const NotFoundPage = () => {
  return (
    <div className="100vh 100vw p-10 flex flex-col justify-center items-center gap-4 gap-y-6 pt-28">
      <h1 className="font-secondary text-7xl font-bold">404</h1>
      <h4 className="font-medium">Page Not Found</h4>
      <p className=" text-heading">
        Sorry, we can't find the page you're looking for.
      </p>
      <Link to="/" className="text-white px-7 py-4 bg-black">
        Back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
