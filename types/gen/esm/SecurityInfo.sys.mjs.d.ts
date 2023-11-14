declare module "resource://gre/modules/SecurityInfo.sys.mjs" {
    export var SecurityInfo: {
        getSecurityInfo(channel?, options?);
        getCertificateChain(certChain?, options?);
        parseCertificateInfo(cert?, options?);
        getTransparencyStatus(status?);
        formatSecurityProtocol(version?);
        getReasonsForWeakness(state?);
    };
}