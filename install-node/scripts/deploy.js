/*
 * @Author: corinchen
 * @Date: 2022-11-28 16:45:34
 * @LastEditTime: 2022-11-28 16:45:40
 * @LastEditors: corinchen
 * @Description: 
 * @FilePath: \openzeppelin\install-node\scripts\deploy.js
 * for  good code
 */
// scripts/deploy.js
async function main () {
    // We get the contract to deploy
    const Box = await ethers.getContractFactory('Box');
    console.log('Deploying Box...');
    const box = await Box.deploy();
    await box.deployed();
    console.log('Box deployed to:', box.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });