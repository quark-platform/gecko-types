declare module "resource://gre/modules/PushCrypto.sys.mjs" {
    function getCryptoParamsFromHeaders(headers);
    var PushCrypto: {
        concatArray;
        generateAuthenticationSecret();
        validateAppServerKey(key);
        generateKeys();
        decrypt(privateKey, publicKey, authenticationSecret, headers, payload);
        encrypt(plaintext, receiverPublicKey, receiverAuthSecret);
    };
}