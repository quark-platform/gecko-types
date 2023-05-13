declare module "resource://app/modules/ChromeProfileMigrator.sys.mjs" {
    export class ChromeProfileMigrator {
        get key();
        get displayNameL10nID();
        get brandImage();
        get _chromeUserDataPathSuffix();
        _getChromeUserDataPathIfExists();
        getResources();
        getLastUsedDate();
        getSourceProfiles();
        _GetPasswordsResource();
    }
    export class ChromiumProfileMigrator {
        get key();
        get displayNameL10nID();
        get brandImage();
    }
    export class CanaryProfileMigrator {
        get key();
        get displayNameL10nID();
        get brandImage();
        get _chromeUserDataPathSuffix();
        get _keychainServiceName();
        get _keychainAccountName();
    }
    export class ChromeDevMigrator {
        get key();
        get displayNameL10nID();
    }
    export class ChromeBetaMigrator {
        get key();
        get displayNameL10nID();
    }
    export class BraveProfileMigrator {
        get key();
        get displayNameL10nID();
    }
    export class ChromiumEdgeMigrator {
        get key();
        get displayNameL10nID();
        get brandImage();
    }
    export class ChromiumEdgeBetaMigrator {
        get key();
        get displayNameL10nID();
        get brandImage();
    }
    export class Chromium360seMigrator {
        get key();
        get displayNameL10nID();
        get brandImage();
    }
    export class OperaProfileMigrator {
        get key();
        get displayNameL10nID();
        get brandImage();
        getSourceProfiles();
    }
    export class OperaGXProfileMigrator {
        get key();
        get displayNameL10nID();
        get brandImage();
        getSourceProfiles();
    }
    export class VivaldiProfileMigrator {
        get key();
        get displayNameL10nID();
        get brandImage();
    }
}