declare module "resource://gre/modules/IdentityCredentialPromptService.sys.mjs" {
    export class IdentityCredentialPromptService {
        showProviderPrompt();
        showPolicyPrompt();
        showAccountListPrompt();
        close();
    }
}