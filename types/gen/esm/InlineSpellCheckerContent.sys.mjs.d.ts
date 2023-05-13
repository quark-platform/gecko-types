declare module "resource://gre/modules/InlineSpellCheckerContent.sys.mjs" {
    var InlineSpellCheckerContent: {
        _spellChecker;
        _actor;
        initContextMenu(event, editFlags, actor);
        uninitContextMenu();
        actorDestroyed();
        _generateSpellSuggestions();
        selectDictionaries(localeCodes);
        replaceMisspelling(suggestion);
        toggleEnabled();
        recheck();
    };
}