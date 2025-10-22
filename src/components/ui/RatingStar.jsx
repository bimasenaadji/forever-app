import React from "react";
import StarIcon from "../icons/StarIcon";
import StarIcon05 from "../icons/StarIcon05";

const RatingStar = ({ rating }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<StarIcon key={i} />);
    } else {
      stars.push(<StarIcon05 key={i} />);
    }
  }
  return <div className="flex items-center gap-x-2">{stars}</div>;
};

export default RatingStar;
