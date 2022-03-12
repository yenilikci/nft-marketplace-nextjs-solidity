require("@nomiclabs/hardhat-waffle");

const projectID = "1033ba1a46b94c0c942bf99ffcaa7ce0";

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337, //config standart
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${projectID}`,
      accounts: [],
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${projectID}`,
      accounts: [],
    }
  },
  solidity: "0.8.4",
};
