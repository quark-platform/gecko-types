declare module "resource://gre/modules/InlineSpellChecker.sys.mjs" {
    function InlineSpellChecker(aEditor);
    var SpellCheckHelper: {
        EDITABLE: number;
        INPUT: number;
        TEXTAREA: number;
        TEXTINPUT: number;
        KEYWORD: number;
        CONTENTEDITABLE: number;
        NUMERIC: number;
        PASSWORD: number;
        SPELLCHECKABLE: number;
        isTargetAKeywordField(aNode, window);
        getComputedStyle(aElem, aProp);
        isEditable(element, window);
    };
}