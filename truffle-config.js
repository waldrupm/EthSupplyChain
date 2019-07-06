const HDWalletProvider = require('truffle-hdwallet-provider');
const fs = require('fs');

const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/39008d15f6664744aa5b5745b15c1ec1"),
      network_id: 4,
      gas: 4500000,
      gasPrice: 10000000000,
      from: "0x96E8493e45a2576df3d3e16688449298C9682C13"
    }
  },
  compilers: {
    solc: {
      version: "^0.4.23"
    }
  }
};