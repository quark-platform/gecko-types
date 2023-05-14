declare module "resource://gre/modules/NLP.sys.mjs" {
    var NLP: {
        levenshtein(word1, word2, costIns, costRep, costDel);
    };
}