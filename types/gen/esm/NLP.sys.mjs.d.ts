declare module "resource://gre/modules/NLP.sys.mjs" {
    export var NLP: {
        levenshtein(word1?, word2?, costIns?, costRep?, costDel?);
    };
}