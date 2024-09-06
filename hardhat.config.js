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
    	url:SEPOLIA_URL || "http://127.0.0.1:8545/",
    	accounts:[PRIVATE_KEY] || "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"
    },
  },
  solidity: "0.8.20",
};