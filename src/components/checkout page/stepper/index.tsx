import React from "react";
import styles from "./stepper.module.css";
import { iconDimensions } from "../../../config";
import Step from "./step";

interface StepperProps {
  active: string;
  passed: string | string[];
}

const steps = [
  { to: "/cart", text: "Cart" },
  { to: "/checkout/details", text: "Details" },
  { to: "/checkout/shipping", text: "Shipping" },
  { to: "/checkout/payment", text: "Payment" },
];

const Stepper: React.FC<StepperProps> = ({ active, passed }) => {
  return (
    <div className={styles.stepper}>
      {steps.map((step, index) => (
        <React.Fragment key={step.to}>
          <Step
            to={step.to}
            text={step.text}
            className={`${styles.stepper_item} ${
              active === step.text
                ? styles.stepper_active
                : passed.includes(step.text)
                ? styles.stepper_passed
                : ""
            }`}
          />
          {index < steps.length - 1 && (
            <span>
              <img
                className={styles.stepper_separator}
                src="/images/ChevronRight.svg"
                width={iconDimensions().xsmall}
                height={iconDimensions().xsmall}
                alt="separator"
              />
            </span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Stepper;
