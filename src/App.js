import "./App.css";
import { useState } from "react";
import MinAndHour from "./Converter/MinAndHour";
import KmAndMile from "./Converter/kmAndMile";

function App() {
  const [value, setValue] = useState(true);

  const setDistance = () => {
    setValue(false);
  };

  const setTime = () => {
    setValue(true);
  };

  return (
    <div>
      <div>
        <button onClick={setDistance}>{`Km <-> Mile`}</button>
        <button onClick={setTime}>{`Minutes <-> Hours`}</button>
      </div>
      {value ? <MinAndHour /> : <KmAndMile />}
    </div>
  );
}

export default App;
