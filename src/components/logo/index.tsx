import React from "react";

interface LogoProps {
  imgSrc: string;
  width: number;
  height: number;
}

const Logo: React.FC<LogoProps> = ({ imgSrc, width, height }) => {
  return (
    <a href="/">
      <img src={imgSrc} alt="logo" width={width} height={height} />
    </a>
  );
};

export default Logo;
