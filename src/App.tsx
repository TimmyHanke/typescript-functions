import "./types/functions";
import {
  landscape,
  max,
  area,
  tellFortune,
  calculateDogAge,
  daysOfSupply,
  degrees,
  ageInSeconds,
  checkSpeed,
} from "./types/functions";

function App() {
  return (
    <div>
      <h1>
        Max...
        <>{max(1, 2)}</>
      </h1>
      <h1>
        Landscape...
        <>{landscape(2, 1)}</>
      </h1>
      <h1>
        Area...
        <>{area("circle", 2, 15)}</>
      </h1>
      <h1>
        <>{tellFortune("Painter", "Bosse", 15)}</>
      </h1>
      <h1>
        CalculateDogAge...
        <>{calculateDogAge(30, 7)}</>
      </h1>
      <h1>
        DaysOfSupply...
        <>{daysOfSupply(30, 7)}</>
      </h1>
      <h1>
        Degrees...
        <>{degrees("farenheit", 7)}</>
      </h1>
      <h1>
        AgeInSeconds...
        <>{ageInSeconds(1)}</>
      </h1>
      <h1>
        CheckSpeed...
        <>{checkSpeed(130)}</>
      </h1>
    </div>
  );
}

export default App;
