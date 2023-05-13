declare module "resource://app/modules/pagedata/PageDataSchema.sys.mjs" {
    var PageDataSchema: {
        DATA_TYPE;
        nameForType(type);
        validateData(type, data);
        validatePageData(pageData);
        coalescePageData(existingPageData, newPageData);
        collectPageData(document);
    };
}