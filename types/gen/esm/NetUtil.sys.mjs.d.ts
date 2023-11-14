declare module "resource://gre/modules/NetUtil.sys.mjs" {
    export var NetUtil: {
        asyncCopy;
        asyncFetch;
        newURI;
        newChannel;
        newWebTransport;
        readInputStreamToString;
        readInputStream(aInputStream?, aCount?);
    };
}