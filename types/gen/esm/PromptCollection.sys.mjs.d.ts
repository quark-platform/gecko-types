declare module "resource://gre/modules/PromptCollection.sys.mjs" {
    export class PromptCollection {
        confirmRepost(browsingContext?);
        asyncBeforeUnloadCheck(browsingContext?);
        confirmFolderUpload();
    }
}