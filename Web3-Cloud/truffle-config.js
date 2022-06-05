// require imports 

require('babel-register') //Babel is a JavaScript transpiler 
const HDWalletProvider = require('@truffle/hdwallet-provider'); //HD Wallet-enabled Web3 provider. 
require('babel-polyfill')   
require('dotenv').config(); 
const privateKeys = process.env.PRIVATE_KEYS || ""                                                          //Use it to sign transactions for addresses.  
// const fs = require('fs');
// const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  /**
   * Networks define how you connect to your ethereum client and let you set the
   * defaults web3 uses to send transactions. If you don't specify one truffle
   * will spin up a development blockchain for you on port 9545 when you
   * run `develop` or `test`. You can ask a truffle command to use a specific
   * network from the command line, e.g
   *
   * $ truffle test --network <network-name>
   */

  networks: {
    development: {
     host: "127.0.0.1",     // Localhost (default: none)
     port: 7545,            // Standard Ethereum port (default: none)
     network_id: "*",       // Any network (default: none)
    },
  //  our provided testnet
    ropsten: {
      provider: function() {
        return new HDWalletProvider(
          privateKeys.split(','), // Array of account private keys
          `https://ropsten.infura.io/v3/${process.env.INFURA_API_KEY}`// Url to an Ethereum Node
        )
      },
      network_id: 3,       // Custom network
      gas: 5000000,           // Gas sent with each transaction (default: ~6700000)
      gasPrice: 25000000000,  // 20 gwei (in wei) (default: 100 gwei)
    }
  },

  // Set default mocha options here, use special reporters, etc.
  // mocha: {
  //   // timeout: 100000
  // },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.14",      // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
       optimizer: {
          enabled: false,
         runs: 200
        },
      //  evmVersion: "byzantium"
      // }
    }
  },

  // After you backed up your artifacts you can utilize db by running migrate as follows:
  // $ truffle migrate --reset --compile-all
  //
  // db: {
  //   enabled: false,
  //   host: "127.0.0.1",
  //   adapter: {
  //     name: "sqlite",
  //     settings: {
  //       directory: ".db"
  //     }
  //   }
  // }
};
