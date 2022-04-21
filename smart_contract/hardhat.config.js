require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten : {
      url: 'https://eth-ropsten.alchemyapi.io/v2/8gxhVBF9tX-jt0wEFOFSsJBotdQwZ638',
      accounts: [ '56e368500560b36cecb7476ddd969c0e2426b3875d7fd65837766397a52d802d' ]
    }
  }
}