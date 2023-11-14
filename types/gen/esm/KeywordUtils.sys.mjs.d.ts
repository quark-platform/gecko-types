declare module "resource://gre/modules/KeywordUtils.sys.mjs" {
    export var KeywordUtils: {
        parseUrlAndPostData(url?, postData?, param?);
        getBindableKeyword(keyword?, searchString?);
    };
}