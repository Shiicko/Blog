/* eslint-disable no-shadow-restricted-names */
import { Infinity } from "ldrs/react";
import "ldrs/react/Infinity.css";

export const Loader = () => {
  return (
    <div>
      <Infinity
        size="55"
        stroke="4"
        strokeLength="0.15"
        bgOpacity="0.1"
        speed="1.3"
        color="black"
      />
    </div>
  );
};
