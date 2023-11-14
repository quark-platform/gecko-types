declare module "resource://app/modules/pagedata/PageDataSchema.sys.mjs" {
    export var PageDataSchema: {
        DATA_TYPE;
        nameForType(type?);
        validateData(type?, data?);
        validatePageData(pageData?);
        coalescePageData(existingPageData?, newPageData?);
        collectPageData(document?);
    };
}