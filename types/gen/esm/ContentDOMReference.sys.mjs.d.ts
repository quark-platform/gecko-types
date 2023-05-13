declare module "resource://gre/modules/ContentDOMReference.sys.mjs" {
    var ContentDOMReference: {
        _init();
        observe(subject, topic, data);
        get(element);
        resolve(identifier);
        _revoke(identifier);
        _resolveIDToElement(browsingContext, id);
    };
}