import { useState, useEffect } from "react";
import { getAddress, getCompany, setupWeb3 } from "./web3Client";

import "./App.css";

function App() {
  const [address, setAddress] = useState("N/A");
  const [company, setCompany] = useState(null);

  useEffect(() => {
    const web3 = setupWeb3();
    getAddress(web3).then((addresses) => setAddress(addresses[0]));
    getCompany(web3).then((company) => setCompany(company));
  }, []);

  return (
    <div className="App">
      <h1>Crypto devs</h1>
      <span>{address}</span>
    </div>
  );
}

export default App;
