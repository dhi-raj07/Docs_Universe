const path = require("path");
const HDWalletProvider = require("@truffle/hdwallet-provider");
const mnemonic =
  "garden inherit fun surface lobster answer make hat nerve dream beauty rebuild";
module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    // Configuration for mainnet
    mainnet: {
      provider: function () {
        // Setting the provider with the Infura Mainnet address and Token
        return new HDWalletProvider(
          mnemonic,
          "https://fabled-silent-silence.ethereum-goerli.discover.quiknode.pro/dd856c5890e38c4b47228a6b01a710ad4c1b1995/"
        );
      },
      network_id: "1",
    },
    // Configuration for rinkeby network
    goerli: {
      // Special function to setup the provider
      provider: function () {
        // Setting the provider with the Infura Rinkeby address and Token
        return new HDWalletProvider(
          mnemonic,
          "https://fabled-silent-silence.ethereum-goerli.discover.quiknode.pro/dd856c5890e38c4b47228a6b01a710ad4c1b1995/"
        );
      },
      network_id: 5,
    },
    ganache: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
    },
  },
  compilers: {
    solc: {
      version: "^0.8.0",
    },
  },
};
