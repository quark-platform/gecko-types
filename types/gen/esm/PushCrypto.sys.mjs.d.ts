declare module "resource://gre/modules/PushCrypto.sys.mjs" {
    export function getCryptoParamsFromHeaders(headers?);
    export var PushCrypto: {
        concatArray;
        generateAuthenticationSecret();
        validateAppServerKey(key?);
        generateKeys();
        decrypt(privateKey?, publicKey?, authenticationSecret?, headers?, payload?);
        encrypt(plaintext?, receiverPublicKey?, receiverAuthSecret?, options?);
    };
}