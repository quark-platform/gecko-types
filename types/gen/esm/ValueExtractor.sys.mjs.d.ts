declare module "resource://gre/modules/ValueExtractor.sys.mjs" {
    export class ValueExtractor {
        constructor(errors, aBundle);
        extractValue();
        extractColorValue();
        extractLanguageValue();
    }
}