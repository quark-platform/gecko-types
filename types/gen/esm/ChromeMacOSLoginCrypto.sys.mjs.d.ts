declare module "resource://app/modules/ChromeMacOSLoginCrypto.sys.mjs" {
    export class ChromeMacOSLoginCrypto {
        constructor(serviceName, accountName);
        arrayToString(arr?);
        stringToArray(binary_string?);
        decryptData(ciphertextArray?);
        encryptData(plaintext?);
    }
}