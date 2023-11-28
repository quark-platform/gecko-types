declare module "resource://gre/modules/MozProtocolHandler.sys.mjs" {export function MozProtocolHandler(): void;
export class MozProtocolHandler {
    scheme: string;
    defaultPort: number;
    protocolFlags: any;
    newChannel(uri: any, loadInfo: any): any;
    QueryInterface: any;
}
}