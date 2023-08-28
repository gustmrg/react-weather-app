import styles from "./WeekWeather.module.css";
import cloudyImage from "../assets/cloudy.png";

export function WeekWeather() {
  return (
    <div className={styles.weekWeather}>
      <div className={styles.weekDay}>
        <p className={styles.weekDayTitle}>Amanhã</p>
        <img src={cloudyImage} alt="Cloudy Weather Image" />
        <p>
          <span className={styles.maxTemperature}>21°</span>{" "}
          <span className={styles.minTemperature}>16°</span>
        </p>
      </div>
      <div className={styles.weekDay}>
        <p className={styles.weekDayTitle}>Amanhã</p>
        <img src={cloudyImage} alt="Cloudy Weather Image" />
        <p>
          <span className={styles.maxTemperature}>21°</span>{" "}
          <span className={styles.minTemperature}>16°</span>
        </p>
      </div>
      <div className={styles.weekDay}>
        <p className={styles.weekDayTitle}>Amanhã</p>
        <img src={cloudyImage} alt="Cloudy Weather Image" />
        <p>
          <span className={styles.maxTemperature}>21°</span>{" "}
          <span className={styles.minTemperature}>16°</span>
        </p>
      </div>
      <div className={styles.weekDay}>
        <p className={styles.weekDayTitle}>Amanhã</p>
        <img src={cloudyImage} alt="Cloudy Weather Image" />
        <p>
          <span className={styles.maxTemperature}>21°</span>{" "}
          <span className={styles.minTemperature}>16°</span>
        </p>
      </div>
      <div className={styles.weekDay}>
        <p className={styles.weekDayTitle}>Amanhã</p>
        <img src={cloudyImage} alt="Cloudy Weather Image" />
        <p>
          <span className={styles.maxTemperature}>21°</span>{" "}
          <span className={styles.minTemperature}>16°</span>
        </p>
      </div>
    </div>
  );
}
