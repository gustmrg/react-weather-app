import { Sun } from "@phosphor-icons/react";

import styles from "./SunTime.module.css";

import chartImage from "../assets/chart.png";

export function SunTime() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Sun size={24} weight="fill" />
        <h4>Horário do sol</h4>
      </div>
      <img src={chartImage}></img>
    </div>
  );
}
