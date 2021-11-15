import { useState, useEffect } from "react";
import { getAddress, getCompanyContract, setupWeb3 } from "./web3Client";
import Company from "./components/Company";

import "./App.css";

function App() {
  const [address, setAddress] = useState("N/A");
  const [company, setCompany] = useState(null);

  useEffect(() => {
    const web3 = setupWeb3();
    getAddress(web3).then((addresses) => setAddress(addresses[0]));
    getCompanyContract(web3).then(contract => {
      console.log(contract)
      contract.methods.companies(1).call().then(r => setCompany(r))
    });
  }, []);

  return (
    <div className="App">
      <h1>Crypto devs</h1>
      <span>{address}</span>
      <Company company={company}></Company>
    </div>
  );
}

export default App;
