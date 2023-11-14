declare module "resource://app/modules/ChromeWindowsLoginCrypto.sys.mjs" {
    export class ChromeWindowsLoginCrypto {
        constructor(userDataPathSuffix);
        finalize();
        arrayToString(arr?);
        stringToArray(binary_string?);
        decryptData(ciphertext?);
        _decryptUnversioned(ciphertext?);
        _decryptV10(ciphertext?);
        encryptData(plaintext?);
        _encryptUnversioned(plaintext?);
        _encryptV10(plaintext?);
    }
}