declare module "resource://gre/modules/services-common/utils.sys.mjs" {
    var CryptoUtils: {
        xor(a?, b?);
        generateRandomBytesLegacy(length?);
        generateRandomBytes(length?);
        digestUTF8(message?, hasher?);
        digestBytes(bytes?, hasher?);
        digestBytesArray(bytes?, hasher?);
        updateUTF8(message?, hasher?);
        sha256(message?);
        sha256Base64(message?);
        hmacLegacy(alg?, key?, data?);
        hkdfLegacy(ikm?, xts?, info?, len?);
        hmac(alg?, key?, data?);
        hkdf(ikm?, salt?, info?, len?);
        pbkdf2Generate(passphrase?, salt?, iterations?, len?);
        computeHTTPMACSHA1(identifier?, key?, method?, uri?, extra?);
        getHTTPMACSHA1Header;
        stripHeaderAttributes(value?);
        computeHAWK(uri?, method?, options?);
    };
}