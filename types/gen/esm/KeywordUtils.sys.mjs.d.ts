declare module "resource://gre/modules/KeywordUtils.sys.mjs" {
    var KeywordUtils: {
        parseUrlAndPostData(url, postData, param);
        getBindableKeyword(keyword, searchString);
    };
}