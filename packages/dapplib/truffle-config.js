require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid nation flock system egg develop remember modify idea process outer swear'; 
let testAccounts = [
"0xb6d9483543bdf934fcb663f73f55683cc6f54978c742cca202d6c320b8d9ecd7",
"0xecf496339c5d65dae9b02f37537f4d24f29831215fbfad959b789e58fba86a93",
"0x51f913f9ea5ddaadcd427322a6469956f36322ffcf642af52c7d1bd15e7a5855",
"0xe25267be08675a555981e826c755c2b232f380a81cd0298572d30d81e1f2922e",
"0xe178cc0a0ac63dfe68f16cdbee390808bcb4aaf1dffd876dbbd6b15816f09b67",
"0x337130b417e51f86bb8648649d35c229dcc2397b147502eb30629f531adb69e9",
"0xced36015dda553406e3359437fe2e774586996be5a8598e658561418e94e384f",
"0x4ffbd43af514f9ed775b8ef237b43835a82de97ec7aaa8073cd7475d1f9c32f6",
"0xfb670a4d78b3ccd8f34211a701be53889f15af494a590140d87d065241d22e2e",
"0x85db840016364700491c5928d4705d376837d3b1ac5860d034f59ce01ce1c484"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

