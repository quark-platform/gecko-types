declare module "resource://app/modules/WebProtocolHandlerRegistrar.sys.mjs" {export function WebProtocolHandlerRegistrar(): void;
export class WebProtocolHandlerRegistrar {
    get stringBundle(): any;
    _getFormattedString(key: any, params: any): any;
    _getString(key: any): any;
    /**
     * See nsIWebProtocolHandlerRegistrar
     */
    removeProtocolHandler(aProtocol: any, aURITemplate: any): void;
    /**
     * Determines if a web handler is already registered.
     *
     * @param aProtocol
     *        The scheme of the web handler we are checking for.
     * @param aURITemplate
     *        The URI template that the handler uses to handle the protocol.
     * @return true if it is already registered, false otherwise.
     */
    _protocolHandlerRegistered(aProtocol: any, aURITemplate: any): boolean;
    /**
     * See nsIWebProtocolHandlerRegistrar
     */
    registerProtocolHandler(aProtocol: any, aURI: any, aTitle: any, aDocumentURI: any, aBrowserOrWindow: any): void;
    QueryInterface: any;
}
}