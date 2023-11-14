declare module "resource://app/modules/AttributionCode.sys.mjs" {
    export var AttributionIOUtils: {
        write;
        read;
        readUTF8;
        exists;
    };
    export var AttributionCode: {
        get msixCampaignId(): any;
        get attributionFile(): any;
        writeAttributionFile(code?);
        get allowedCodeKeys(): any;
        parseAttributionCode(code?);
        parseAttributionCodeFromUrl(url?);
        serializeAttributionData(data?);
        getAttrDataAsync();
        getCachedAttributionData();
        deleteFileAsync();
        _clearCache();
    };
}