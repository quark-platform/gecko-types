declare module "resource://gre/modules/AboutCertViewerParent.sys.mjs" {
    export class AboutCertViewerParent extends JSWindowActorParent {
        getCertificates();
        receiveMessage(aMessage?);
    }
}