import { WeekWeather } from "./components/WeekWeather";

import backgroundImage from "./assets/background.png";

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      <div>Temperature Now</div>
      <div>
        <div>
          <div>Air Quality</div>
          <div>Sun Time</div>
        </div>
        <WeekWeather />
      </div>
    </div>
  );
}

export default App;
