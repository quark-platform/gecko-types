declare module "resource://gre/modules/CertUtils.sys.mjs" {
    export var CertUtils: {
        BadCertHandler;
        checkCert;
        readCertPrefs;
        validateCert;
    };
}