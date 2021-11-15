import Web3 from "web3";
import CompaniesContractBuild from 'contracts/build/contracts/Companies.json';

async function getAddress(web3) {
  return web3.eth.getAccounts();
}

async function getCompanyContract(web3) {
  const networkId = await web3.eth.net.getId();
  return new web3.eth.Contract(CompaniesContractBuild.abi, CompaniesContractBuild.networks[networkId].address);
}

function setupWeb3() {
  return new Web3(Web3.givenProvider || "http://localhost:7545");
}

export {getAddress, getCompanyContract, setupWeb3};
