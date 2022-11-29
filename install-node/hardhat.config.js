/*
 * @Author: corinchen
 * @Date: 2022-11-21 12:50:44
 * @LastEditTime: 2022-11-28 18:17:04
 * @LastEditors: corinchen
 * @Description: 
 * @FilePath: \openzeppelin\install-node\hardhat.config.js
 * for  good code
 */
/** @type import('hardhat/config').HardhatUserConfig */
require('@nomiclabs/hardhat-ethers');
require('@nomiclabs/hardhat-truffle5');
const { alchemyApiKey, mnemonic} = require('./secret.json')
module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${alchemyApiKey}`,
      accounts: { mnemonic: mnemonic },
    }
  }
};
