const { expect } = require('chai');
const { BN, expectEvent, expectRevert } = require('@openzeppelin/test-helpers');

const Box = artifacts.require('Box')

contract('Box', function([owner, other]){
    const value = new BN('42');
    beforeEach(async function () {
        this.box = await Box.new({ from: owner });
    });
    it('retrieve returns a value previously stored', async function () {
        await this.box.store(value, { from: owner });
    
        // Use large integer comparisons
        expect(await this.box.retrieve()).to.be.bignumber.equal(value);
    });
    it('store emits an event', async function () {
        const receipt = await this.box.store(value, { from: owner });
    
        // Test that a ValueChanged event was emitted with the new value
        expectEvent(receipt, 'ValueChanged', { value: value });
    });
    it('non owner cannot store a value', async function () {
        // Test a transaction reverts
        await expectRevert(
          this.box.store(value, { from: other }),
          'auth no init',
        );
    });
})