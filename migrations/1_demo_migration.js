const demo = artifacts.require("demo");

module.exports = function(deployer) {
  // deployment steps
  deployer.deploy(demo);
};
