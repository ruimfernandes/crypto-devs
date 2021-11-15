import Web3 from "web3";

async function getAddress(web3) {
  return web3.eth.getAccounts();
}

function setupWeb3() {
  return new Web3(Web3.givenProvider || "http://localhost:7545");
}

export {getAddress, setupWeb3};
