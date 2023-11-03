declare module "resource://app/modules/syncedtabs/util.sys.mjs" {
    var Utils: {
        generateRandomBytesLegacy;
        computeHTTPMACSHA1;
        digestUTF8;
        digestBytes;
        sha256;
        hkdfExpand;
        pbkdf2Generate;
        getHTTPMACSHA1Header;
        _userAgent;
        get userAgent(): any;
        catch(func?, exceptionCallback?);
        throwLockException(label?);
        lock(label?, func?);
        isLockException;
        notify(prefix?);
        makeGUID;
        _base64url_regex;
        checkGUID;
        deferGetSet;
        deepEquals;
        throwHMACMismatch;
        isHMACMismatch;
        base32ToFriendly;
        base32FromFriendly;
        encodeKeyBase32;
        decodeKeyBase32;
        jsonFilePath();
        jsonLoad(filePath?, that?);
        jsonSave(filePath?, that?, obj?);
        tryFitItems(records?, payloadSizeMaxBytes?);
        jsonMove(aFrom?, aTo?, that?);
        jsonRemove(filePath?, that?);
        isPassphrase(s?);
        normalizePassphrase;
        arraySub;
        arrayUnion;
        setAddAll(set?, items?);
        setDeleteAll(set?, items?);
        subsetOfSize(items?, size?);
        bind2;
        mpLocked();
        ensureMPUnlocked();
        calculateBackoff;
        getSyncCredentialsHosts();
        defineLazyIDProperty(object?, propName?, prefName?);
        getDeviceType();
        formatTimestamp(date?);
        walkTree(tree?, parent?);
    };
    export class SerializableSet {
        toJSON();
    }
    var Svc: {};
}