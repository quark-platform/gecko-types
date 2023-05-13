declare module "resource://app/modules/ChromeWindowsLoginCrypto.sys.mjs" {
    export class ChromeWindowsLoginCrypto {
        constructor(userDataPathSuffix);
        finalize();
        arrayToString();
        stringToArray();
        decryptData();
        _decryptUnversioned();
        _decryptV10();
        encryptData();
        _encryptUnversioned();
        _encryptV10();
    }
}