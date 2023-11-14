declare module "resource://gre/modules/LoginManagerChild.sys.mjs" {
    var AUTOFILL_RESULT: {
        FILLED;
        NO_PASSWORD_FIELD;
        PASSWORD_DISABLED_READONLY;
        NO_LOGINS_FIT;
        NO_SAVED_LOGINS;
        EXISTING_PASSWORD;
        EXISTING_USERNAME;
        MULTIPLE_LOGINS;
        NO_AUTOFILL_FORMS;
        AUTOCOMPLETE_OFF;
        INSECURE;
        PASSWORD_AUTOCOMPLETE_NEW_PASSWORD;
        TYPE_NO_LONGER_PASSWORD;
        FORM_IN_CROSSORIGIN_SUBFRAME;
        FILLED_USERNAME_ONLY_FORM;
    };
    export class LoginFormState {
        getScenario(inputElement?);
        setScenario(formLikeRoot?, scenario?);
        storeUserInput(field?);
        isProbablyAnEmailField(inputElement?);
        isProbablyAUsernameField(inputElement?);
        _togglePasswordFieldMasking(passwordField?, unmask?);
        _treatAsGeneratedPasswordField(passwordField?);
        _formHasModifiedFields(form?);
        _stopTreatingAsGeneratedPasswordField(passwordField?);
        onFocus(field?, focusedField?);
        _highlightFilledField(element?);
        getUsernameFieldFromUsernameOnlyForm(formElement?, param1?);
        _getPasswordFields(form?, param1?);
        compareAndUpdatePreviouslySentValues(formLikeRoot?, usernameValue?, passwordValue?, param3?, param4?);
        fillConfirmFieldWithGeneratedPassword(passwordField?);
        _getFormFields(form?, isSubmission?, recipes?, param3?);
        getUserNameAndPasswordFields(aField?);
        getFieldContext(aField?);
    }
    export class LoginManagerChild extends JSWindowActorChild {
        forWindow(window?);
        receiveMessage(msg?);
        repopulateAutocompletePopup();
        shouldIgnoreLoginManagerEvent(event?);
        handleEvent(event?);
        notifyObserversOfFormProcessed(formid?);
        _getLoginDataFromParent(form?, options?);
        setupProgressListener(window?);
        onDocumentVisibilityChange(event?);
        _deferHandlingEventUntilDocumentVisible(event?, document?, fn?);
        _processDOMFormHasPasswordEvent(event?);
        _processDOMFormHasPossibleUsernameEvent(event?);
        _processDOMInputPasswordAddedEvent(event?);
        _fetchLoginsFromParentAndFillForm(form?);
        isPasswordGenerationForcedOn(passwordField?);
        stateForDocument(document?);
        fillForm(param0?);
        loginsFound(param0?);
        onFieldAutoComplete(acInputField?, loginGUID?);
        onUsernameAutocompleted(acInputField?, param1?);
        _isAutocompleteDisabled(element?);
        _onDocumentRestored(aDocument?);
        _onNavigation(aDocument?);
        _onFormSubmit(form?, reason?);
        _maybeSendFormInteractionMessage(form?, messageName?, param2?);
        _maybeSendFormInteractionMessageContinue(form?, messageName?, param2?);
        _doesEventClearPrevFieldValue(param0?);
        _filledWithGeneratedPassword(passwordField?);
        _ignorePasswordEdit();
        _passwordEditedOrGenerated(passwordField?, param1?);
        _filterForExactFormOriginLogins(logins?, form?);
        _fillForm(form?, foundLogins?, recipes?, param3?);
        getScenario(inputElement?);
    }
}