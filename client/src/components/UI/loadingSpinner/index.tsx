import React from "react";
import { shadeColor } from "./services";
import styles from "./styles/LoadingSpinner.module.scss";

interface LoadingSpinnerProps {
  color?: string;
  width?: string;
  styleClass?: string;
}

function LoadingSpinner({
  color = "white",
  width = "1rem",
  styleClass,
}: LoadingSpinnerProps) {
  
  const topColor = shadeColor(color, 37, 1);
  const leftColor = shadeColor(color, 37, 0.6);

  return (
    <div className={`${styles.loadingSpinner} ${styleClass ?? ""}`}>
      <div
        className={styles.spinnerIcon}
        style={{
          borderTopColor: topColor,
          borderLeftColor: leftColor,
          width: width,
          height: width,
        }}
      ></div>
    </div>
  );
}

export default LoadingSpinner;
