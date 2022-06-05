const ipfs = artifacts.require("DStorage");

module.exports = function(deployer) {
  deployer.deploy(ipfs);
};