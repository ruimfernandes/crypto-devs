import { useState, useEffect } from "react";
import {
  createCompany,
  getAddress,
  getCompaniesList,
  setupWeb3,
} from "./web3Client";
import Company from "./components/Company";

import "./App.css";

function App() {
  const [address, setAddress] = useState("N/A");
  const [companies, setCompanies] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    const fetchInitialData = async () => {
      await setupWeb3();
      const address = await getAddress();

      setAddress(address);
      fetchCompanies();
    };

    fetchInitialData();
  }, []);

  const fetchCompanies = async () => {
    const companies = await getCompaniesList();
    setCompanies(companies);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createCompany(address, name);
  };

  return (
    <div className="App">
      <h1>Crypto devs</h1>
      <span>{address}</span>
      {companies.map((value, index) => {
        return <Company key={index} company={value} />;
      })}
      <div>
        <form onSubmit={handleSubmit}>
          <h3>Insert company</h3>
          <label>
            Name:{" "}
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </label>
          <input type="submit" value="Create" />
        </form>
      </div>
    </div>
  );
}

export default App;
