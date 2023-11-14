declare module "resource://gre/modules/IdentityCredentialPromptService.sys.mjs" {
    export class IdentityCredentialPromptService {
        loadIconFromManifest(providerManifest?);
        showProviderPrompt(browsingContext?, identityProviders?, identityManifests?);
        showPolicyPrompt(browsingContext?, identityProvider?, identityManifest?, identityCredentialMetadata?);
        showAccountListPrompt(browsingContext?, accountList?, provider?, providerManifest?);
        close(browsingContext?);
    }
}