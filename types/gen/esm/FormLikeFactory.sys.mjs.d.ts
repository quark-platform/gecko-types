declare module "resource://gre/modules/FormLikeFactory.sys.mjs" {
    var FormLikeFactory: {
        _propsFromForm;
        createFromForm(aForm);
        createFromField(aField);
        closestFormIgnoringShadowRoots(aField);
        findRootForField(aField);
        _addToJSONProperty(aFormLike);
    };
}