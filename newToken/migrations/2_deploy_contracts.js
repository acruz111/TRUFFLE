var myToken = artifacts.require("MyToken");

/*
module.exports = function(deployer) {
  deployer.deploy(myToken, 0x61f9b8180b55cca73b0615f262cf4674ac47401c);
};
*/

module.exports = function(deployer, network, accounts) {
  deployer.deploy(myToken, accounts[0]);
};
