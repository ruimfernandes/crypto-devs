import Web3 from "web3";
import CompaniesContractBuild from "contracts/build/contracts/Companies.json";

let web3;
let companyContract;

async function setupWeb3() {
  web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
  companyContract = await getCompanyContract();
  return web3;
}

async function createCompany(address, name) {
  return companyContract.methods
    .createCompany(name)
    .send({ from: address })
    .then((r) => r);
}

async function getCompaniesCount() {
  return companyContract.methods
    .company_count()
    .call()
    .then((r) => r);
}

async function getCompaniesList() {
  const count = await getCompaniesCount();
  let resultList = [];

  for (let i = 1; i <= count; i++) {
    let res = await getCompany(i);
    resultList.push(res);
  }

  return resultList;
}

async function getCompany(id) {
  return companyContract.methods
    .companies(id)
    .call()
    .then((r) => r);
}

async function getAddress() {
  return web3.eth.getAccounts().then((addresses) => addresses[0]);
}

async function getCompanyContract() {
  const networkId = await web3.eth.net.getId();
  return new web3.eth.Contract(
    CompaniesContractBuild.abi,
    CompaniesContractBuild.networks[networkId].address
  );
}

export { createCompany, getAddress, getCompaniesList, setupWeb3 };
