declare module "resource://gre/modules/FxAccountsPairing.sys.mjs" {
    export class FxAccountsPairingFlow {
        get(channelId?);
        finalizeAll();
        start(options?);
        constructor(options);
        _onFlowTimeout();
        _closeChannel();
        finalize();
        _setupListeners();
        _onAbort();
        _onError(error?);
        _onPairingChannelError(error?);
        onWebChannelMessage(command?);
        onPairingChannelMessage(sender?, payload?);
        onPrefViewClosed();
        _authorizeOAuthCode(options?);
        _createKeysJWE(sessionToken?, clientId?, scopes?, jwk?);
    }
}