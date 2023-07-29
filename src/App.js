import "./App.css";
import { useState } from "react";
import MinAndHour from "./Converter/MinAndHour";
import KmAndMile from "./Converter/kmAndMile";

function App() {
  const [index, setIndex] = useState(0);
  const onSelect = (event) => {
    setIndex(event.target.value);
  };

  return (
    <div>
      <div>
        <select value={index} onChange={onSelect}>
          <option value="0">Minutes & Hours</option>
          <option value="1">Km & Miles</option>
        </select>
        {index === "0" ? <MinAndHour /> : <KmAndMile />}
      </div>
    </div>
  );
}

export default App;
