import { useState, useEffect } from "react";
import {
  createCompany,
  getAddress,
  getCompany,
  getCompaniesCount,
  setupWeb3,
} from "./web3Client";
import Company from "./components/Company";

import "./App.css";

function App() {
  const [address, setAddress] = useState("N/A");
  const [company, setCompany] = useState(null);
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
    const companies_count = await getCompaniesCount();
    const company = await getCompany(1);
    console.log(companies_count);
    setCompany(company);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("The name you entered was: ", name);
    createCompany(address, name);
  };

  return (
    <div className="App">
      <h1>Crypto devs</h1>
      <span>{address}</span>
      <Company company={company}></Company>
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
