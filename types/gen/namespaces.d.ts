declare module ChromeUtils {
    /*If the chrome code has thrown a JavaScript Dev Error
    in the current JSRuntime. the first such error, or `undefined`
    otherwise.
    
    A JavaScript Dev Error is an exception thrown by JavaScript
    code that matches both conditions:
    - it was thrown by chrome code;
    - it is either a `ReferenceError`, a `TypeError` or a `SyntaxError`.
    
    Such errors are stored regardless of whether they have been
    caught.
    
    This mechanism is designed to help ensure that the code of
    Firefox is free from Dev Errors, even if they are accidentally
    caught by clients.
    
    The object returned is not an exception. It has fields:
    - DOMString stack
    - DOMString filename
    - DOMString lineNumber
    - DOMString message*/
    var recentJSDevError: readonly any ;
    /*nsIDOMProcessChild for the current process.*/
    var domProcessChild: readonly nsIDOMProcessChildType ?;
}

declare module IOUtils {
    /*The async shutdown client for the profile-before-change shutdown phase.*/
    var profileBeforeChange: readonly any ;
    /*The async shutdown client for the profile-before-change-telemetry shutdown
    phase.
    
    ONLY telemetry should register blockers on this client.*/
    var sendTelemetry: readonly any ;
}

declare module InspectorUtils { }

declare module L10nOverlays { }

declare module MediaControlService { }

declare module PathUtils {
    /*The profile directory.*/
    var profileDir: readonly DOMString ;
    /*The local-specific profile directory.*/
    var localProfileDir: readonly DOMString ;
    /*The temporary directory for the process.*/
    var tempDir: readonly DOMString ;
    /*The OS temporary directory.*/
    var osTempDir: readonly DOMString ;
    /*The libxul path.*/
    var xulLibraryPath: readonly DOMString ;
}

declare module PlacesObservers { }

declare module PrioEncoder { }

declare module PromiseDebugging { }

declare module SessionStoreUtils { }

declare module TelemetryStopwatch { }

declare module UniFFIScaffolding { }

declare module UserInteraction { }

declare module APZHitResultFlags { }

declare module AddonManagerPermissions { }

declare module CSS { }

declare module console { }

declare module TestUtils { }

declare module WebrtcGlobalInformation {
    /**/
    var debugLevel: readonly long ;
    /**/
    var aecDebug: readonly boolean ;
    /**/
    var aecDebugLogDir: readonly DOMString ;
}

declare module WorkerTestUtils { }

