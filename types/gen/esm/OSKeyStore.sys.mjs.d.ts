declare module "resource://gre/modules/OSKeyStore.sys.mjs" {
    var OSKeyStore: {
        STORE_LABEL;
        _isLocked;
        _pendingUnlockPromise;
        get isLoggedIn(): any;
        get isUIBusy(): any;
        canReauth();
        _reauthInTests();
        ensureLoggedIn();
        decrypt(cipherText);
        encrypt(plainText);
        waitForExistingDialog();
        cleanup();
    };
}