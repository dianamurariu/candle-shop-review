import React from "react";
import { Link } from "react-router-dom";

interface StepProps {
  to: string;
  text: string;
  className: string;
}

const Step: React.FC<StepProps> = ({ to, text, className }) => {
  return (
    <div className={className}>
      <Link to={to}>{text}</Link>
    </div>
  );
};

export default Step;
