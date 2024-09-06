require("@nomicfoundation/hardhat-toolbox")
require("dotenv").config();
const SEPOLIA_URL = process.env.SEPOLIA_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork:"infuraSep",
  networks:{
    localhost: {
      url:"http://127.0.0.1:8545/"
    },
    infuraSep:{
    	url:SEPOLIA_URL,
    	accounts:[PRIVATE_KEY]
    },
  },
  solidity: "0.8.20",
};
