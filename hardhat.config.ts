require("@nomiclabs/hardhat-ethers");
require("@openzeppelin/hardhat-upgrades");
require("@nomiclabs/hardhat-etherscan");

require("dotenv").config();

module.exports = {
 solidity: {
  version: "0.8.10",
  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
},
 networks: {
   rinkeby: {
     url: `https://rinkeby.infura.io/v3/${process.env.INFURA_API_KEY}`,
     accounts: [process.env.PRIVATE_KEY],
   },
 },
 etherscan: {
   apiKey: process.env.ETHERSCAN_API_KEY,
 },
};