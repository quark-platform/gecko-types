declare module "resource://gre/modules/IdentityCredentialPromptService.sys.mjs" {
    export class IdentityCredentialPromptService {
        loadIconFromManifest(providerManifest?, param1?, param2?);
        showProviderPrompt(browsingContext?, identityProviders?, identityManifests?);
        showPolicyPrompt(browsingContext?, identityProvider?, identityManifest?, identityCredentialMetadata?);
        showAccountListPrompt(browsingContext?, accountList?, provider?, providerManifest?);
        close(browsingContext?);
    }
}