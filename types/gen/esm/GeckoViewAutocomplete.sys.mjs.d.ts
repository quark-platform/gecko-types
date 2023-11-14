declare module "resource://gre/modules/GeckoViewAutocomplete.sys.mjs" {
    export class LoginEntry {
        constructor();
        toLoginInfo();
        parse(aObj?);
        fromLoginInfo(aInfo?);
    }
    export class Address {
        constructor();
        isValid();
        fromGecko(aObj?);
        parse(aObj?);
        toGecko();
    }
    export class CreditCard {
        constructor();
        isValid();
        fromGecko(aObj?);
        parse(aObj?);
        toGecko();
    }
    export class SelectOption {
        constructor();
    }
    var GeckoViewAutocomplete: {
        _prompt;
        fetchLogins(aDomain?);
        fetchCreditCards();
        fetchAddresses();
        onCreditCardSave(aCreditCard?);
        onAddressSave(aAddress?);
        onLoginSave(aLogin?);
        onLoginPasswordUsed(aLogin?);
        _numActiveSelections: number;
        onLoginSelect(aBrowser?, aOptions?);
        onCreditCardSelect(aBrowser?, aOptions?);
        onAddressSelect(aBrowser?, aOptions?);
        delegateSelection(param0?);
        delegateDismiss();
    };
}