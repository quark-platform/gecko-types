declare module "resource://app/modules/ChromeProfileMigrator.sys.mjs" {
    import type { MigratorBase } from "resource://app/modules/MigratorBase.sys.mjs";
    export class ChromeProfileMigrator extends MigratorBase {
        get key();
        get displayNameL10nID();
        get brandImage();
        get _chromeUserDataPathSuffix();
        _getChromeUserDataPathIfExists();
        getResources(aProfile?);
        getLastUsedDate();
        getSourceProfiles();
        _GetPasswordsResource(aProfileFolder?);
        _GetPaymentMethodsResource(aProfileFolder?);
        _keychainServiceName;
        _keychainAccountName;
    }
    import type { ChromeProfileMigrator } from "resource://app/modules/ChromeProfileMigrator.sys.mjs";
    export class ChromiumProfileMigrator extends ChromeProfileMigrator {
        get key();
        get displayNameL10nID();
        get brandImage();
        _chromeUserDataPathSuffix;
        _keychainServiceName;
        _keychainAccountName;
    }
    import type { ChromeProfileMigrator } from "resource://app/modules/ChromeProfileMigrator.sys.mjs";
    export class CanaryProfileMigrator extends ChromeProfileMigrator {
        get key();
        get displayNameL10nID();
        get brandImage();
        get _chromeUserDataPathSuffix();
        get _keychainServiceName();
        get _keychainAccountName();
    }
    import type { ChromeProfileMigrator } from "resource://app/modules/ChromeProfileMigrator.sys.mjs";
    export class ChromeDevMigrator extends ChromeProfileMigrator {
        get key();
        get displayNameL10nID();
        _chromeUserDataPathSuffix;
        _keychainServiceName;
        _keychainAccountName;
    }
    import type { ChromeProfileMigrator } from "resource://app/modules/ChromeProfileMigrator.sys.mjs";
    export class ChromeBetaMigrator extends ChromeProfileMigrator {
        get key();
        get displayNameL10nID();
        _chromeUserDataPathSuffix;
        _keychainServiceName;
        _keychainAccountName;
    }
    import type { ChromeProfileMigrator } from "resource://app/modules/ChromeProfileMigrator.sys.mjs";
    export class BraveProfileMigrator extends ChromeProfileMigrator {
        get key();
        get displayNameL10nID();
        get brandImage();
        _chromeUserDataPathSuffix;
        _keychainServiceName;
        _keychainAccountName;
    }
    import type { ChromeProfileMigrator } from "resource://app/modules/ChromeProfileMigrator.sys.mjs";
    export class ChromiumEdgeMigrator extends ChromeProfileMigrator {
        get key();
        get displayNameL10nID();
        get brandImage();
        _chromeUserDataPathSuffix;
        _keychainServiceName;
        _keychainAccountName;
    }
    import type { ChromeProfileMigrator } from "resource://app/modules/ChromeProfileMigrator.sys.mjs";
    export class ChromiumEdgeBetaMigrator extends ChromeProfileMigrator {
        get key();
        get displayNameL10nID();
        get brandImage();
        _chromeUserDataPathSuffix;
        _keychainServiceName;
        _keychainAccountName;
    }
    import type { ChromeProfileMigrator } from "resource://app/modules/ChromeProfileMigrator.sys.mjs";
    export class Chromium360seMigrator extends ChromeProfileMigrator {
        get key();
        get displayNameL10nID();
        get brandImage();
        _chromeUserDataPathSuffix;
        _keychainServiceName;
        _keychainAccountName;
    }
    import type { ChromeProfileMigrator } from "resource://app/modules/ChromeProfileMigrator.sys.mjs";
    export class OperaProfileMigrator extends ChromeProfileMigrator {
        get key();
        get displayNameL10nID();
        get brandImage();
        getSourceProfiles();
        _chromeUserDataPathSuffix;
        _keychainServiceName;
        _keychainAccountName;
    }
    import type { ChromeProfileMigrator } from "resource://app/modules/ChromeProfileMigrator.sys.mjs";
    export class OperaGXProfileMigrator extends ChromeProfileMigrator {
        get key();
        get displayNameL10nID();
        get brandImage();
        getSourceProfiles();
        _chromeUserDataPathSuffix;
        _keychainServiceName;
        _keychainAccountName;
    }
    import type { ChromeProfileMigrator } from "resource://app/modules/ChromeProfileMigrator.sys.mjs";
    export class VivaldiProfileMigrator extends ChromeProfileMigrator {
        get key();
        get displayNameL10nID();
        get brandImage();
        _chromeUserDataPathSuffix;
        _keychainServiceName;
        _keychainAccountName;
    }
}