/*
 * @Author: corinchen
 * @Date: 2022-11-28 17:31:31
 * @LastEditTime: 2022-11-28 17:37:12
 * @LastEditors: corinchen
 * @Description: 
 * @FilePath: \openzeppelin\install-node\test\Box.test.js
 * for  good code
 */
const { expect } = require('chai');

describe('Box', function() {
    before(async function() {
        this.Box = await ethers.getContractFactory('Box');
    })
    beforeEach(async function() {
        this.box = await this.Box.deploy();
        await this.box.deployed();
    })
    it('retrieve returns a value previously stored', async function() {
        await this.box.store(66)
        expect((await this.box.retrieve()).toString()).to.equal('66');
    })
})