import { useState } from "react";
import { BounceLoader } from "react-spinners";

function Spinner() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");

  return (
    <div className="sweet-loading">
      <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
      <input
        value={color}
        onChange={(input) => setColor(input.target.value)}
        placeholder="Color of the loader"
      />

      <BounceLoader loading={loading} color={color} />
    </div>
  );
}

export default Spinner;