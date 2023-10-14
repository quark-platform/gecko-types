declare module "resource://gre/modules/IdentityCredentialPromptService.sys.mjs" {
    export class IdentityCredentialPromptService {
        loadIconFromManifest();
        showProviderPrompt();
        showPolicyPrompt();
        showAccountListPrompt();
        close();
    }
}