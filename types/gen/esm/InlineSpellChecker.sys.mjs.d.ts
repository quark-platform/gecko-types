declare module "resource://gre/modules/InlineSpellChecker.sys.mjs" {export function InlineSpellChecker(aEditor: any): void;
export class InlineSpellChecker {
    constructor(aEditor: any);
    mAddedWordStack: any[];
    init(aEditor: any): void;
    mEditor: any;
    mInlineSpellChecker: any;
    initFromRemote(aSpellInfo: any, aWindowGlobalParent: any): void;
    mRemote: RemoteSpellChecker;
    mOverMisspelling: any;
    mMisspelling: any;
    uninit(): void;
    mMenu: any;
    mSuggestionItems: any[];
    mDictionaryMenu: any;
    mDictionaryItems: any[];
    mWordNode: any;
    initFromEvent(rangeParent: any, rangeOffset: any): void;
    mWordOffset: any;
    get canSpellCheck(): any;
    get initialSpellCheckPending(): any;
    set enabled(isEnabled: any);
    get enabled(): any;
    get overMisspelling(): any;
    addSuggestionsToMenuOnParent(menu: any, insertBefore: any, maxNumber: any): any;
    addSuggestionsToMenu(menu: any, insertBefore: any, spellSuggestions: any): any;
    _addSuggestionsToMenu(menu: any, insertBefore: any, spellSuggestions: any): any;
    clearSuggestionsFromMenu(): void;
    sortDictionaryList(list: any): {
        localeCode: any;
        displayName: any;
    }[];
    languageMenuListener(evt: any): Promise<void>;
    addDictionaryListToMenu(menu: any, insertBefore: any): any;
    languageMenuListenerBind: any;
    clearDictionaryListFromMenu(): void;
    selectDictionaries(localeCodes: any): Promise<void>;
    replaceMisspelling(suggestion: any): void;
    toggleEnabled(): void;
    addToDictionary(): void;
    undoAddToDictionary(): void;
    canUndo(): boolean;
    ignoreWord(): void;
}
export namespace SpellCheckHelper {
    let EDITABLE: number;
    let INPUT: number;
    let TEXTAREA: number;
    let TEXTINPUT: number;
    let KEYWORD: number;
    let CONTENTEDITABLE: number;
    let NUMERIC: number;
    let PASSWORD: number;
    let SPELLCHECKABLE: number;
    function isTargetAKeywordField(aNode: any, window: any): boolean;
    function getComputedStyle(aElem: any, aProp: any): any;
    function isEditable(element: any, window: any): number;
}
declare function RemoteSpellChecker(aSpellInfo: any, aWindowGlobalParent: any): void;
declare class RemoteSpellChecker {
    constructor(aSpellInfo: any, aWindowGlobalParent: any);
    _spellInfo: any;
    _suggestionGenerator: any;
    _actor: any;
    get canSpellCheck(): any;
    get spellCheckPending(): any;
    get overMisspelling(): any;
    get enableRealTimeSpell(): any;
    get suggestions(): any;
    set currentDictionaries(dicts: any);
    get currentDictionaries(): any;
    get dictionaryList(): any;
    selectDictionaries(localeCodes: any): void;
    replaceMisspelling(suggestion: any): void;
    toggleEnabled(): void;
    addToDictionary(): void;
    undoAddToDictionary(word: any): void;
    ignoreWord(): void;
    uninit(): void;
    actorDestroyed(): void;
}
export {};
}