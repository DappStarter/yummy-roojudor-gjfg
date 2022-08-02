require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'just problem forget venture strong dash sad exchange good knee metal general'; 
let testAccounts = [
"0xd3d1db87039da7941490cf7b9fd38f8769b9d9ff81d886839ab728db5133cbdf",
"0x210ea8960760cd932bfbc3e34a4314f9c7f54b2ceab2c2767ad375ba0b341f56",
"0x2c94d091ed07325c028f9ae8a5dcd0305e4b3a5c6a54abb16acf2d400f4dda79",
"0x97b92818878171cae72e76f753e10d30860cd6e6929de05c1464bdd6d16c6af7",
"0x37544c71af20ee2e69de49e46f865c86bc55648c5800a4b3b3515b31e445acb5",
"0xcf3487561e4dbf1a8a6644737a2d4528165820b2bec32258d5f80627b335c6f1",
"0xcb57a4f79ae46753dbf55e7eb969969a7573b9e9194be67dbf4ad65f03280ab0",
"0xe47e5c165361b3fb1ccb4e565a72382365eeff90ed71530e3e0b785a9f728d01",
"0x1507ea007402da0b692a18f168b8f9fb65c2c161fb6482a62d84a7d5915ef363",
"0xe29f072da01dfbea5441fb9812ed92d4ed28e899131e5b3ed3cc55aa54a61335"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


