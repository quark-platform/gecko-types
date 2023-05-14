declare module "resource://gre/modules/OSKeyStore.sys.mjs" {
    var OSKeyStore: {
        STORE_LABEL;
        _isLocked;
        _pendingUnlockPromise;
        get isLoggedIn(): any;
        get isUIBusy(): any;
        canReauth();
        _reauthInTests();
        ensureLoggedIn(reauth, dialogCaption, parentWindow, generateKeyIfNotAvailable);
        decrypt(cipherText, reauth);
        encrypt(plainText);
        waitForExistingDialog();
        cleanup();
    };
}