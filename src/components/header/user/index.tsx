import React from "react";
import { iconDimensions } from "../../../config";

interface UserProps {
  imgSrc: string;
  to: string;
}

const User: React.FC<UserProps> = ({ imgSrc, to }) => {
  return (
    <a href={to}>
      <img src={imgSrc} width={iconDimensions().xlarge} height={iconDimensions().xlarge} alt="icon-user" />
    </a>
  );
};

export default User;
