import { useState } from "react";

function KmAndMile() {
  const [amount, setAmount] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const onChange = (event) => {
    setAmount(event.target.value);
  };

  const reset = () => setAmount(0);

  const onFlip = () => {
    reset();
    setFlipped((current) => !current);
  };

  return (
    <div>
      <h1>Super Converter</h1>
      <div>
        <label htmlFor="km">Km</label>
        <input
          value={flipped ? amount / 0.62137 : amount}
          id="km"
          placeholder="km"
          type="number"
          onChange={onChange}
          disabled={flipped === true}
        />
      </div>

      <div>
        <label htmlFor="mile">Mile</label>
        <input
          value={flipped ? amount : amount * 0.62137}
          id="mile"
          placeholder="mile"
          type="number"
          onChange={onChange}
          disabled={flipped === false}
        />
      </div>
      <button onClick={reset}>Reset</button>
      <button onClick={onFlip}>Flip</button>
    </div>
  );
}

export default KmAndMile;
