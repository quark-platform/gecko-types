declare module "resource://gre/modules/LoginRecipes.sys.mjs" {
    function LoginRecipesParent(aOptions);
    var LoginRecipesContent: {
        _recipeCache;
        _clearRecipeCache();
        cacheRecipes(aHost, win, recipes);
        getRecipes(aHost, win);
        _filterRecipesForForm(aRecipes, aForm);
        getFieldOverrides(aRecipes, aForm);
        queryLoginField(aParent, aSelector);
    };
}