declare module "resource://gre/modules/addons/ProductAddonChecker.sys.mjs" {
    var ProductAddonChecker: {
        NETWORK_REQUEST_ERR;
        NETWORK_TIMEOUT_ERR;
        ABORT_ERR;
        VERIFICATION_MISSING_DATA_ERR;
        VERIFICATION_FAILED_ERR;
        VERIFICATION_INVALID_ERR;
        XML_PARSE_ERR;
        getProductAddonList(url, allowNonBuiltIn, allowedCerts, verifyContentSignature);
        downloadAddon(addon, options);
    };
    var ProductAddonCheckerTestUtils: {
        overrideServiceRequest(mockRequest, callback);
    };
}