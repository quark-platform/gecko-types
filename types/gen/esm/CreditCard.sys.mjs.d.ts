declare module "resource://gre/modules/CreditCard.sys.mjs" {
    var NETWORK_NAMES: {};
    export class CreditCard {
        constructor();
        set name(value);
        set expirationMonth(value);
        get expirationMonth();
        set expirationYear(value);
        get expirationYear();
        set expirationString(value);
        set ccv(value);
        get number();
        set number(value);
        get network();
        set network(value);
        isValidNumber();
        normalizeCardNumber();
        getType();
        getNetworkFromName();
        isValid();
        get maskedNumber();
        get longMaskedNumber();
        getLabelInfo();
        getLabel();
        normalizeExpirationMonth();
        normalizeExpirationYear();
        parseExpirationString();
        normalizeExpiration();
        formatMaskedNumber();
        getCreditCardLogo();
        getMaskedNumber();
        getLongMaskedNumber();
        isValidNumber();
        isValidNetwork();
        getSupportedNetworks();
        getNetworkL10nId();
    }
}