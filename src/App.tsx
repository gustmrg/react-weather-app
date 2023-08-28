import { WeekWeather } from "./components/WeekWeather";
import { SunTime } from "./components/SunTime";
import { Temperature } from "./components/Temperature";

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
      <div>
        <Temperature />
      </div>
      <div>
        <div>
          <div>Air Quality</div>
          <SunTime />
        </div>
        <WeekWeather />
      </div>
    </div>
  );
}

export default App;
