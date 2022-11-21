<!--
 * @Author: corinchen
 * @Date: 2022-11-18 13:58:52
 * @LastEditTime: 2022-11-21 12:54:32
 * @LastEditors: corinchen
 * @Description: 
 * @FilePath: \openzeppelin\README.md
 * for  good code
-->

## 学习openzeppelin
### 搭建环境

```
    1.node instlal
    2.truffle init
    3.hardhat install
    4.npx hardhat 创建一个部署文件配置
```

### 写一个简单的合约

```
// 使用sol 版本
prama solidity ^0.8.0;
import "./access-control/Auth.sol";
// 定义一个 Box 合约
contract Box {
    // 定义一个值可以存储
    uint256 private _valute;
    // Auth 谁有权去修改存储这个值
    Auth private _auth;
    // 事件传播
    event ValueChanged(uint256 value);
    constructor() {
        // 初始化 权限账号
        _auth = new Auth(msg.sender);
    }
    // 存储方法
    function store(uint256 value) public {
        // 必须是 isAdmin 才能存储值
        require(_auth.isAdmin(msg.sender), "auth no init");
        _valute = value;
        // 将时间传播给前端
        emit ValueChanged(value);
    }
    // 共用方法，任何人可调用
    function retrieve() public view returns(uint256) {
        return _valute;
    }
}

}
```