declare module "resource://gre/modules/addons/crypto-utils.sys.mjs" {
    function computeHashAsString(hashType?, input?);
    function computeSha256HashAsString(input?);
    function computeSha1HashAsString(input?);
    function getHashStringForCrypto(aCrypto?);
}