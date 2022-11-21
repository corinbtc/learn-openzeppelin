pragma solidity ^0.8.0;
import "./access-control/Auth.sol";
contract Box {
    uint256 private _valute;
    Auth private _auth;
    event ValueChanged(uint256 value);
    constructor() {
        _auth = new Auth(msg.sender);
    }
    function store(uint256 value) public {
        require(_auth.isAdmin(msg.sender), "auth no init");
        _valute = value;
        emit ValueChanged(value);
    }
    function retrieve() public view returns(uint256) {
        return _valute;
    }
}