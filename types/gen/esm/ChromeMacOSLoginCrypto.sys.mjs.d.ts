declare module "resource://app/modules/ChromeMacOSLoginCrypto.sys.mjs" {
    export class ChromeMacOSLoginCrypto {
        constructor(serviceName, accountName);
        arrayToString();
        stringToArray();
        decryptData();
        encryptData();
    }
}