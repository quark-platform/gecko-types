declare module "resource://gre/modules/CreditCard.sys.mjs" {
    export var NETWORK_NAMES: {};
    export class CreditCard {
        constructor(param0);
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
        normalizeCardNumber(number?);
        getType(ccNumber?);
        getNetworkFromName(name?);
        isValid();
        get maskedNumber();
        get longMaskedNumber();
        getLabelInfo(param0?);
        getLabel(param0?);
        normalizeExpirationMonth(month?);
        normalizeExpirationYear(year?);
        parseExpirationString(expirationString?);
        normalizeExpiration(param0?);
        formatMaskedNumber(maskedNumber?);
        getCreditCardLogo(network?);
        getMaskedNumber(number?);
        getLongMaskedNumber(number?);
        isValidNumber(number?);
        isValidNetwork(network?);
        getSupportedNetworks();
        getNetworkL10nId(network?);
    }
}