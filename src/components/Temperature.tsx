import { MapPin } from "@phosphor-icons/react";

import styles from "./Temperature.module.css";

import cloudyImage from "../assets/cloudy.png";

export function Temperature() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper_header}>
        <img src={cloudyImage} />
        <div className={styles.location}>
          <MapPin size={20} color={`var(--purple-300)`} weight="fill" />{" "}
          Fortaleza, CE
        </div>
      </div>
      <div className={styles.temperature}>
        18 <span className={styles.degrees}>°C</span>
      </div>
      <div className={styles.statistics}>Statistics</div>
    </div>
  );
}
