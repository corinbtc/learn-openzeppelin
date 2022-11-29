/*
 * @Author: corinchen
 * @Date: 2022-11-28 16:59:31
 * @LastEditTime: 2022-11-28 17:29:25
 * @LastEditors: corinchen
 * @Description:
 * @FilePath: \openzeppelin\install-node\scripts\index.js
 * for  good code
 */
async function main() {
    // const accounts = await ethers.provider.listAccounts();
    // console.log(accounts);
    const address = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
    const Box = await ethers.getContractFactory('Box');
    const box = await Box.attach(address);
    await box.store(66);
    const value = await box.retrieve();
    console.log('Box value is', value.toString());
}
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
