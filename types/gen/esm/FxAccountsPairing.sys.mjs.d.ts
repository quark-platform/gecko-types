declare module "resource://gre/modules/FxAccountsPairing.sys.mjs" {
    export class FxAccountsPairingFlow {
        get();
        finalizeAll();
        start();
        constructor(options);
        _onFlowTimeout();
        _closeChannel();
        finalize();
        _setupListeners();
        _onAbort();
        _onError();
        _onPairingChannelError();
        onWebChannelMessage();
        onPairingChannelMessage();
        onPrefViewClosed();
        _authorizeOAuthCode();
        _createKeysJWE();
    }
}