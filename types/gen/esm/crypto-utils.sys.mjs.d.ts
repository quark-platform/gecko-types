declare module "resource://gre/modules/addons/crypto-utils.sys.mjs" {
    export function computeHashAsString(hashType?, input?);
    export function computeSha256HashAsString(input?);
    export function computeSha1HashAsString(input?);
    export function getHashStringForCrypto(aCrypto?);
}