import React from "react";
import styles from "./BackgroundCanvas.module.css";

interface BackgroundCanvasProps {} // extends ComponentProps

const BackgroundCanvas: React.FC<BackgroundCanvasProps> = ({}) => {
  return <canvas className={styles.backgroundCanvas}></canvas>;
};

export default BackgroundCanvas;
