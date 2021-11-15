import { useState, useEffect } from "react";
import { getAddress, setupWeb3 } from "./web3Client";

import "./App.css";

function App() {
  const [address, setAddress] = useState("N/A");

  useEffect(() => {
    const web3 = setupWeb3();
    getAddress(web3).then((addresses) => setAddress(addresses[0]));
  }, []);

  return (
    <div className="App">
      <h1>Crypto devs</h1>
      <span>{address}</span>
    </div>
  );
}

export default App;
