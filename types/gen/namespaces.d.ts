declare module ChromeUtils {
    /**
     * If the chrome code has thrown a JavaScript Dev Error
     * in the current JSRuntime. the first such error, or `undefined`
     * otherwise.
     *
     * A JavaScript Dev Error is an exception thrown by JavaScript
     * code that matches both conditions:
     * - it was thrown by chrome code;
     * - it is either a `ReferenceError`, a `TypeError` or a `SyntaxError`.
     *
     * Such errors are stored regardless of whether they have been
     * caught.
     *
     * This mechanism is designed to help ensure that the code of
     * Firefox is free from Dev Errors, even if they are accidentally
     * caught by clients.
     *
     * The object returned is not an exception. It has fields:
     * - DOMString stack
     * - DOMString filename
     * - DOMString lineNumber
     * - DOMString message
     */
    var recentJSDevError: readonly any ;
    /**
     * nsIDOMProcessChild for the current process.
     */
    var domProcessChild: readonly nsIDOMProcessChildType ?;
    /**
     * The number of currently alive utility processes.
     */
    var aliveUtilityProcesses: readonly unsigned_long ;
    /**
     *
     */
    function getObjectNodeId(): NodeId ;
    /**
     * Serialize a snapshot of the heap graph, as seen by |JS::ubi::Node| and
     * restricted by |boundaries|, and write it to the provided file path.
     *
     * @param boundaries        The portion of the heap graph to write.
     *
     * @returns                 The path to the file the heap snapshot was written
     * to. This is guaranteed to be within the temp
     * directory and its file name will match the regexp
     * `\d+(\-\d+)?\.fxsnapshot`.
     */
    function saveHeapSnapshot(): DOMString ;
    /**
     * This is the same as saveHeapSnapshot, but with a different return value.
     *
     * @returns                 The snapshot ID of the file. This is the file name
     * without the temp directory or the trailing
     * `.fxsnapshot`.
     */
    function saveHeapSnapshotGetId(): DOMString ;
    /**
     * Deserialize a core dump into a HeapSnapshot.
     *
     * @param filePath          The file path to read the heap snapshot from.
     */
    function readHeapSnapshot(): HeapSnapshot ;
    /**
     *
     */
    function isDevToolsOpened(): boolean ;
    /**
     *
     */
    function notifyDevToolsOpened(): undefined ;
    /**
     *
     */
    function notifyDevToolsClosed(): undefined ;
    /**
     * Return the keys in a weak map.  This operation is
     * non-deterministic because it is affected by the scheduling of the
     * garbage collector and the cycle collector.
     *
     * @param aMap weak map or other JavaScript value
     * @returns If aMap is a weak map object, return the keys of the weak
     * map as an array.  Otherwise, return undefined.
     */
    function nondeterministicGetWeakMapKeys(): any ;
    /**
     * Return the keys in a weak set.  This operation is
     * non-deterministic because it is affected by the scheduling of the
     * garbage collector and the cycle collector.
     *
     * @param aSet weak set or other JavaScript value
     * @returns If aSet is a weak set object, return the keys of the weak
     * set as an array.  Otherwise, return undefined.
     */
    function nondeterministicGetWeakSetKeys(): any ;
    /**
     * Converts a buffer to a Base64 URL-encoded string per RFC 4648.
     *
     * @param source The buffer to encode.
     * @param options Additional encoding options.
     * @returns The encoded string.
     */
    function base64URLEncode(): ByteString ;
    /**
     * Decodes a Base64 URL-encoded string per RFC 4648.
     *
     * @param string The string to decode.
     * @param options Additional decoding options.
     * @returns The decoded buffer.
     */
    function base64URLDecode(): ArrayBuffer ;
    /**
     *
     */
    function releaseAssert(): undefined ;
    /**
     *
     */
    function clearRecentJSDevError(): undefined ;
    /**
     *
     */
    function clearStyleSheetCacheByBaseDomain(): undefined ;
    /**
     *
     */
    function clearStyleSheetCacheByPrincipal(): undefined ;
    /**
     *
     */
    function clearStyleSheetCache(): undefined ;
    /**
     *
     */
    function addProfilerMarker(): undefined ;
    /**
     *
     */
    function getXPCOMErrorName(): DOMString ;
    /**
     *
     */
    function dateNow(): double ;
    /**
     * Defines a getter on a specified object that will be created upon first
     * use.
     *
     * @param aTarget
     * The object to define the lazy getter on.
     * @param aName
     * The name of the getter to define on aTarget.
     * @param aLambda
     * A function that returns what the getter should return.  This will
     * only ever be called once.
     */
    function defineLazyGetter(): undefined ;
    /**
     *
     */
    function getLibcConstants(): LibcConstants ;
    /**
     *
     */
    function originAttributesToSuffix(): ByteString ;
    /**
     *
     */
    function originAttributesMatchPattern(): boolean ;
    /**
     * Returns an OriginAttributesDictionary with values from the |origin| suffix
     * and unspecified attributes added and assigned default values.
     *
     * @param origin            The origin URI to create from.
     * @returns                 An OriginAttributesDictionary with values from
     * the origin suffix and unspecified attributes
     * added and assigned default values.
     */
    function createOriginAttributesFromOrigin(): OriginAttributesDictionary ;
    /**
     * Returns an OriginAttributesDictionary with values from the origin |suffix|
     * and unspecified attributes added and assigned default values.
     *
     * @param suffix            The origin suffix to create from.
     * @returns                 An OriginAttributesDictionary with values from
     * the origin suffix and unspecified attributes
     * added and assigned default values.
     */
    function CreateOriginAttributesFromOriginSuffix(): OriginAttributesDictionary ;
    /**
     *
     */
    function fillNonDefaultOriginAttributes(): OriginAttributesDictionary ;
    /**
     *
     */
    function isOriginAttributesEqual(): boolean ;
    /**
     * Returns the base domain portion of a given partitionKey.
     * Returns the empty string for an empty partitionKey.
     * Throws for invalid partition keys.
     */
    function getBaseDomainFromPartitionKey(): DOMString ;
    /**
     * Returns the partitionKey for a given URL.
     *
     * The function will treat the URL as a first party and construct the
     * partitionKey according to the scheme, site and port in the URL.
     *
     * Throws for invalid urls.
     */
    function getPartitionKeyFromURL(): DOMString ;
    /**
     * Loads and compiles the script at the given URL and returns an object
     * which may be used to execute it repeatedly, in different globals, without
     * re-parsing.
     */
    function compileScript(): Promise<PrecompiledScript> ;
    /**
     * Returns an optimized QueryInterface method which, when called from
     * JavaScript, acts as an ordinary QueryInterface function call, and when
     * called from XPConnect, circumvents JSAPI entirely.
     *
     * The list of interfaces may include a mix of JS ID objects and interface
     * name strings.
     *
     * nsISupports is implicitly supported, and must not be included in the
     * interface list.
     */
    function generateQI(): MozQueryInterface ;
    /**
     * Waive Xray on a given value. Identity op for primitives.
     */
    function waiveXrays(): any ;
    /**
     * Strip off Xray waivers on a given value. Identity op for primitives.
     */
    function unwaiveXrays(): any ;
    /**
     *
     */
    function getClassName(): DOMString ;
    /**
     *
     */
    function isDOMObject(): boolean ;
    /**
     * Clones the properties of the given object into a new object in the given
     * target compartment (or the caller compartment if no target is provided).
     * Property values themeselves are not cloned.
     *
     * Ignores non-enumerable properties, properties on prototypes, and properties
     * with getters or setters.
     */
    function shallowClone(): object ;
    /**
     * Dispatches the given callback to the main thread when it would be
     * otherwise idle. Similar to Window.requestIdleCallback, but not bound to a
     * particular DOM windw.
     */
    function idleDispatch(): undefined ;
    /**
     * Synchronously loads and evaluates the JS module source located at
     * 'aResourceURI'.
     *
     * @param aResourceURI A resource:// URI string to load the module from.
     * @returns the module's namespace object.
     *
     * The implementation maintains a hash of aResourceURI->global obj.
     * Subsequent invocations of import with 'aResourceURI' pointing to
     * the same file will not cause the module to be re-evaluated.
     */
    function importESModule(): object ;
    /**
     * Defines a property on the given target which lazily imports a JavaScript
     * module when accessed.
     *
     * The first time the property is accessed, the module at the given URL is
     * imported, and the property is replaced with the module's exported symbol
     * of the same name.
     *
     * Some points to note when using this utility:
     *
     * - The cached module export is always stored on the `this` object that was
     * used to access the getter. This means that if you define the lazy
     * getter on a prototype, the module will be re-imported every time the
     * property is accessed on a new instance.
     *
     * - The getter property may be overwritten by simple assignment, but as
     * with imports, the new property value is always defined on the `this`
     * object that the setter is called with.
     *
     * - If the module import fails, the getter will throw an error, and the
     * property will not be replaced. Each subsequent attempt to access the
     * getter will attempt to re-import the object, which will likely continue
     * to result in errors.
     *
     * @param target The target object on which to define the property.
     * @param id The name of the property to define, and of the symbol to
     * import.
     * @param resourceURI The resource URI of the module, as passed to
     * ChromeUtils.import.
     */
    function defineModuleGetter(): undefined ;
    /**
     * Defines propertys on the given target which lazily imports a ES module
     * when accessed.
     *
     * @param target The target object on which to define the property.
     * @param modules An object with a property for each module property to be
     * imported, where the property name is the name of the
     * imported symbol and the value is the module URI.
     */
    function defineESModuleGetters(): undefined ;
    /**
     *
     */
    function getCallerLocation(): object ?;
    /**
     * Creates a JS Error object with the given message and stack.
     *
     * If a stack object is provided, the error object is created in the global
     * that it belongs to.
     */
    function createError(): object ;
    /**
     *
     */
    function setPerfStatsCollectionMask(): undefined ;
    /**
     * Collect results of detailed performance timing information.
     * The output is a JSON string containing performance timings.
     */
    function collectPerfStats(): Promise<DOMString> ;
    /**
     * Returns a Promise containing a sequence of I/O activities
     */
    function requestIOActivity(): Promise<sequence<IOActivityDataDictionary>> ;
    /**
     * Returns a Promise containing all processes info
     */
    function requestProcInfo(): Promise<ParentProcInfoDictionary> ;
    /**
     * For testing purpose.
     */
    function vsyncEnabled(): boolean ;
    /**
     *
     */
    function hasReportingHeaderForOrigin(): boolean ;
    /**
     *
     */
    function getPopupControlState(): PopupBlockerState ;
    /**
     * Milliseconds from the last iframe loading an external protocol.
     */
    function lastExternalProtocolIframeAllowed(): double ;
    /**
     * For testing purpose we need to reset this value.
     */
    function resetLastExternalProtocolIframeAllowed(): undefined ;
    /**
     * For webdriver consistency purposes, we need to be able to end a wheel
     * transaction from the browser chrome.
     */
    function endWheelTransaction(): undefined ;
    /**
     * Register a new toplevel window global actor. This method may only be
     * called in the parent process. |name| must be globally unique.
     *
     * See JSWindowActor.webidl for WindowActorOptions fields documentation.
     */
    function registerWindowActor(): undefined ;
    /**
     *
     */
    function unregisterWindowActor(): undefined ;
    /**
     * Register a new toplevel content global actor. This method may only be
     * called in the parent process. |name| must be globally unique.
     *
     * See JSProcessActor.webidl for ProcessActorOptions fields documentation.
     */
    function registerProcessActor(): undefined ;
    /**
     *
     */
    function unregisterProcessActor(): undefined ;
    /**
     *
     */
    function isClassifierBlockingErrorCode(): boolean ;
    /**
     * If leak detection is enabled, print a note to the leak log that this
     * process will intentionally crash. This should be called only on child
     * processes for testing purpose.
     */
    function privateNoteIntentionalCrash(): undefined ;
    /**
     * nsIDOMProcessParent for all processes.
     *
     * The first is for the parent process and all the next are for the content
     * processes.
     */
    function getAllDOMProcesses(): sequence<nsIDOMProcessParentType> ;
    /**
     * Returns a record of user interaction data. Currently only typing,
     * but will include scrolling and potentially other metrics.
     *
     * Valid keys: "Typing"
     */
    function consumeInteractionData(): record<DOMString, InteractionData> ;
    /**
     * Returns a record of user scrolling interactions collected from content processes.
     *
     * Valid keys: "Scrolling"
     */
    function collectScrollingData(): Promise<InteractionData> ;
    /**
     *
     */
    function getFormAutofillConfidences(): sequence<FormAutofillConfidences> ;
    /**
     *
     */
    function isDarkBackground(): boolean ;
    /**
     *
     */
    function ensureJSOracleStarted(): undefined ;
    /**
     * Get a list of all possible Utility process Actor Names ; mostly useful to
     * perform testing and ensure about:processes display is sound and misses no
     * actor name.
     */
    function getAllPossibleUtilityActorNames(): sequence<DOMString> ;
    /**
     *
     */
    function shouldResistFingerprinting(): boolean ;
}

declare module IOUtils {
    /**
     * The async shutdown client for the profile-before-change shutdown phase.
     */
    var profileBeforeChange: readonly any ;
    /**
     * The async shutdown client for the profile-before-change-telemetry shutdown
     * phase.
     *
     * ONLY telemetry should register blockers on this client.
     */
    var sendTelemetry: readonly any ;
    /**
     * Reads up to |opts.maxBytes| of the file at |path| according to |opts|.
     *
     * NB: The maximum file size that can be read is UINT32_MAX.
     *
     * @param path An absolute file path.
     *
     * @return Resolves with an array of unsigned byte values read from disk,
     * otherwise rejects with a DOMException.
     */
    function read(): Promise<Uint8Array> ;
    /**
     * Reads the UTF-8 text file located at |path| and returns the decoded
     * contents as a |DOMString|. If a UTF-8 byte order marker (BOM) is
     * present, it will be stripped from the returned string.
     *
     * NB: The maximum file size that can be read is UINT32_MAX.
     *
     * @param path An absolute file path.
     *
     * @return Resolves with the file contents encoded as a string, otherwise
     * rejects with a DOMException.
     */
    function readUTF8(): Promise<DOMString> ;
    /**
     * Read the UTF-8 text file located at |path| and return the contents
     * parsed as JSON into a JS value.
     *
     * NB: The maximum file size that can be read is UINT32_MAX.
     *
     * @param path An absolute path.
     *
     * @return Resolves with the contents of the file parsed as JSON.
     */
    function readJSON(): Promise<any> ;
    /**
     * Attempts to safely write |data| to a file at |path|.
     *
     * This operation can be made atomic by specifying the |tmpPath| option. If
     * specified, then this method ensures that the destination file is not
     * modified until the data is entirely written to the temporary file, after
     * which point the |tmpPath| is moved to the specified |path|.
     *
     * The target file can also be backed up to a |backupFile| before any writes
     * are performed to prevent data loss in case of corruption.
     *
     * @param path    An absolute file path.
     * @param data    Data to write to the file at path.
     *
     * @return Resolves with the number of bytes successfully written to the file,
     * otherwise rejects with a DOMException.
     */
    function write(): Promise<unsigned_long_long> ;
    /**
     * Attempts to encode |string| to UTF-8, then safely write the result to a
     * file at |path|. Works exactly like |write|.
     *
     * @param path      An absolute file path.
     * @param string    A string to write to the file at path.
     * @param options   Options for writing the file.
     *
     * @return Resolves with the number of bytes successfully written to the file,
     * otherwise rejects with a DOMException.
     */
    function writeUTF8(): Promise<unsigned_long_long> ;
    /**
     * Attempts to serialize |value| into a JSON string and encode it as into a
     * UTF-8 string, then safely write the result to a file at |path|. Works
     * exactly like |write|.
     *
     * @param path      An absolute file path
     * @param value     The value to be serialized.
     * @param options   Options for writing the file. The "append" mode is not supported.
     *
     * @return Resolves with the number of bytes successfully written to the file,
     * otherwise rejects with a DOMException.
     */
    function writeJSON(): Promise<unsigned_long_long> ;
    /**
     * Moves the file from |sourcePath| to |destPath|, creating necessary parents.
     * If |destPath| is a directory, then the source file will be moved into the
     * destination directory.
     *
     * @param sourcePath An absolute file path identifying the file or directory
     * to move.
     * @param destPath   An absolute file path identifying the destination
     * directory and/or file name.
     *
     * @return Resolves if the file is moved successfully, otherwise rejects with
     * a DOMException.
     */
    function move(): Promise<undefined> ;
    /**
     * Removes a file or directory at |path| according to |options|.
     *
     * @param path An absolute file path identifying the file or directory to
     * remove.
     *
     * @return Resolves if the file is removed successfully, otherwise rejects
     * with a DOMException.
     */
    function remove(): Promise<undefined> ;
    /**
     * Creates a new directory at |path| according to |options|.
     *
     * @param path An absolute file path identifying the directory to create.
     *
     * @return Resolves if the directory is created successfully, otherwise
     * rejects with a DOMException.
     */
    function makeDirectory(): Promise<undefined> ;
    /**
     * Obtains information about a file, such as size, modification dates, etc.
     *
     * @param path An absolute file path identifying the file or directory to
     * inspect.
     *
     * @return Resolves with a |FileInfo| object for the file at path, otherwise
     * rejects with a DOMException.
     *
     * @see FileInfo
     */
    function stat(): Promise<FileInfo> ;
    /**
     * Copies a file or directory from |sourcePath| to |destPath| according to
     * |options|.
     *
     * @param sourcePath An absolute file path identifying the source file to be
     * copied.
     * @param destPath   An absolute file path identifying the location for the
     * copy.
     *
     * @return Resolves if the file was copied successfully, otherwise rejects
     * with a DOMException.
     */
    function copy(): Promise<undefined> ;
    /**
     * Updates the access time for the file at |path|.
     *
     * @param path         An absolute file path identifying the file whose
     * modification time is to be set. This file must exist
     * and will not be created.
     * @param modification An optional access time for the file expressed in
     * milliseconds since the Unix epoch
     * (1970-01-01T00:00:00Z). The current system time is used
     * if this parameter is not provided.
     *
     * @return Resolves with the updated access time time expressed in
     * milliseconds since the Unix epoch, otherwise rejects with a
     * DOMException.
     */
    function setAccessTime(): Promise<long_long> ;
    /**
     * Updates the modification time for the file at |path|.
     *
     * @param path         An absolute file path identifying the file whose
     * modification time is to be set. This file must exist
     * and will not be created.
     * @param modification An optional modification time for the file expressed in
     * milliseconds since the Unix epoch
     * (1970-01-01T00:00:00Z). The current system time is used
     * if this parameter is not provided.
     *
     * @return Resolves with the updated modification time expressed in
     * milliseconds since the Unix epoch, otherwise rejects with a
     * DOMException.
     */
    function setModificationTime(): Promise<long_long> ;
    /**
     * Retrieves a (possibly empty) list of immediate children of the directory at
     * |path|.
     *
     * @param path An absolute file path.
     *
     * @return Resolves with a sequence of absolute file paths representing the
     * children of the directory at |path|, otherwise rejects with a
     * DOMException.
     */
    function getChildren(): Promise<sequence<DOMString>> ;
    /**
     * Set the permissions of the file at |path|.
     *
     * Windows does not make a distinction between user, group, and other
     * permissions like UNICES do. If a permission flag is set for any of user,
     * group, or other has a permission, then all users will have that
     * permission. Additionally, Windows does not support setting the
     * "executable" permission.
     *
     * @param path        An absolute file path
     * @param permissions The UNIX file mode representing the permissions.
     * @param honorUmask  If omitted or true, any UNIX file mode value is
     * modified by the process umask. If false, the exact value
     * of UNIX file mode will be applied. This value has no effect
     * on Windows.
     *
     * @return Resolves if the permissions were set successfully, otherwise
     * rejects with a DOMException.
     */
    function setPermissions(): Promise<undefined> ;
    /**
     * Return whether or not the file exists at the given path.
     *
     * @param path An absolute file path.
     *
     * @return A promise that resolves to whether or not the given file exists.
     */
    function exists(): Promise<boolean> ;
    /**
     * Create a file with a unique name and return its path.
     *
     * @param parent An absolute path to the directory where the file is to be
     * created.
     * @param prefix A prefix for the filename.
     *
     * @return A promise that resolves to a unique filename.
     */
    function createUniqueFile(): Promise<DOMString> ;
    /**
     * Create a directory with a unique name and return its path.
     *
     * @param parent An absolute path to the directory where the file is to be
     * created.
     * @param prefix A prefix for the directory name.
     *
     * @return A promise that resolves to a unique directory name.
     */
    function createUniqueDirectory(): Promise<DOMString> ;
    /**
     * Compute the hash of a file as a hex digest.
     *
     * @param path   The absolute path of the file to hash.
     * @param method The hashing method to use.
     *
     * @return A promise that resolves to the hex digest of the file's hash in lowercase.
     */
    function computeHexDigest(): Promise<DOMString> ;
    /**
     * Return the Windows-specific file attributes of the file at the given path.
     *
     * @param path An absolute file path.
     *
     * @return A promise that resolves to the Windows-specific file attributes.
     */
    function getWindowsAttributes(): Promise<WindowsFileAttributes> ;
    /**
     * Set the Windows-specific file attributes of the file at the given path.
     *
     * @param path An absolute file path.
     * @param attrs The attributes to set. Attributes will only be set if they are
     * |true| or |false| (i.e., |undefined| attributes are not
     * changed).
     *
     * @return A promise that resolves is the attributes were set successfully.
     */
    function setWindowsAttributes(): Promise<undefined> ;
    /**
     * Return whether or not the file has a specific extended attribute.
     *
     * @param path An absolute path.
     * @param attr The attribute to check for.
     *
     * @return A promise that resolves to whether or not the file has an extended
     * attribute, or rejects with an error.
     */
    function hasMacXAttr(): Promise<boolean> ;
    /**
     * Return the value of an extended attribute for a file.
     *
     * @param path An absolute path.
     * @param attr The attribute to get the value of.
     *
     * @return A promise that resolves to the value of the extended attribute, or
     * rejects with an error.
     */
    function getMacXAttr(): Promise<Uint8Array> ;
    /**
     * Set the extended attribute on a file.
     *
     * @param path  An absolute path.
     * @param attr  The attribute to set.
     * @param value The value of the attribute to set.
     *
     * @return A promise that resolves to whether or not the file has an extended
     * attribute, or rejects with an error.
     */
    function setMacXAttr(): Promise<undefined> ;
    /**
     * Delete the extended attribute on a file.
     *
     * @param path An absolute path.
     * @param attr The attribute to delete.
     *
     * @return A promise that resolves if the attribute was deleted, or rejects
     * with an error.
     */
    function delMacXAttr(): Promise<undefined> ;
    /**
     * Return a nsIFile whose parent directory exists. The parent directory of the
     * file will be created off main thread if it does not already exist.
     *
     * @param components The path components. The first component must be an
     * absolute path.
     *
     * @return A promise that resolves to an nsIFile for the requested file.
     */
    function getFile(): Promise<nsIFileType> ;
    /**
     * Return an nsIFile corresponding to a directory. It will be created
     * off-main-thread if it does not already exist.
     *
     * @param components The path components. The first component must be an
     * absolute path.
     *
     * @return A promise that resolves to an nsIFile for the requested directory.
     */
    function getDirectory(): Promise<nsIFileType> ;
    /**
     * Synchronously opens the file at |path|. This API is only available in workers.
     *
     * @param path An absolute file path.
     *
     * @return A |SyncReadFile| object for the file.
     */
    function openFileForSyncReading(): SyncReadFile ;
    /**
     * Launch a child process; uses `base::LaunchApp` from IPC.  (This WebIDL
     * binding is currently Unix-only; it could also be supported on Windows
     * but it would use u16-based strings, so it would basically be a separate
     * copy of the bindings.)
     *
     * This interface was added for use by `Subprocess.sys.jsm`; other would-be
     * callers may want to just use Subprocess instead of calling this directly.
     *
     * @param argv The command to run and its arguments.
     * @param options Various parameters about how the child process is launched
     * and its initial environment.
     *
     * @return The process ID.  Note that various errors (e.g., the
     * executable to be launched doesn't exist) may not be
     * encountered until after the process is created, so a
     * successful return doesn't necessarily imply a successful
     * launch.
     */
    function launchProcess(): unsigned_long ;
}

declare module InspectorUtils {
    /**
     *
     */
    function getAllStyleSheets(): sequence<StyleSheet> ;
    /**
     *
     */
    function getCSSStyleRules(): sequence<CSSStyleRule> ;
    /**
     *
     */
    function getRuleLine(): unsigned_long ;
    /**
     *
     */
    function getRuleColumn(): unsigned_long ;
    /**
     *
     */
    function getRelativeRuleLine(): unsigned_long ;
    /**
     *
     */
    function hasRulesModifiedByCSSOM(): boolean ;
    /**
     *
     */
    function getAllStyleSheetCSSStyleRules(): sequence<CSSRule> ;
    /**
     *
     */
    function isInheritedProperty(): boolean ;
    /**
     *
     */
    function getCSSPropertyNames(): sequence<DOMString> ;
    /**
     *
     */
    function getCSSPropertyPrefs(): sequence<PropertyPref> ;
    /**
     *
     */
    function getCSSValuesForProperty(): sequence<DOMString> ;
    /**
     *
     */
    function rgbToColorName(): DOMString ;
    /**
     *
     */
    function colorToRGBA(): InspectorRGBATuple ?;
    /**
     *
     */
    function isValidCSSColor(): boolean ;
    /**
     *
     */
    function getSubpropertiesForCSSProperty(): sequence<DOMString> ;
    /**
     *
     */
    function cssPropertyIsShorthand(): boolean ;
    /**
     *
     */
    function cssPropertySupportsType(): boolean ;
    /**
     *
     */
    function supports(): boolean ;
    /**
     *
     */
    function isIgnorableWhitespace(): boolean ;
    /**
     *
     */
    function getParentForNode(): Node ?;
    /**
     *
     */
    function getChildrenForNode(): sequence<Node> ;
    /**
     *
     */
    function setContentState(): boolean ;
    /**
     *
     */
    function removeContentState(): boolean ;
    /**
     *
     */
    function getContentState(): unsigned_long_long ;
    /**
     * Get the font face(s) actually used to render the text in /range/,
     * as a collection of InspectorFontFace objects (below).
     * If /maxRanges/ is greater than zero, each InspectorFontFace will record
     * up to /maxRanges/ fragments of content that used the face, for the caller
     * to access via its .ranges attribute.
     */
    function getUsedFontFaces(): sequence<InspectorFontFace> ;
    /**
     *
     */
    function getCSSPseudoElementNames(): sequence<DOMString> ;
    /**
     *
     */
    function addPseudoClassLock(): undefined ;
    /**
     *
     */
    function removePseudoClassLock(): undefined ;
    /**
     *
     */
    function hasPseudoClassLock(): boolean ;
    /**
     *
     */
    function clearPseudoClassLocks(): undefined ;
    /**
     *
     */
    function parseStyleSheet(): undefined ;
    /**
     *
     */
    function isCustomElementName(): boolean ;
    /**
     *
     */
    function isElementThemed(): boolean ;
    /**
     *
     */
    function containingBlockOf(): Element ?;
    /**
     * If the element is styled as display:block, returns an array of numbers giving
     * the number of lines in each fragment.
     * Returns null if the element is not a block.
     */
    function getBlockLineCounts(): sequence<unsigned_long> ?;
    /**
     *
     */
    function getOverflowingChildrenOfElement(): NodeList ;
    /**
     *
     */
    function getRegisteredCssHighlights(): sequence<DOMString> ;
    /**
     *
     */
    function getCSSRegisteredProperties(): sequence<InspectorCSSPropertyDefinition> ;
}

declare module L10nOverlays {
    /**
     *
     */
    function translateElement(): sequence<L10nOverlaysError> ?;
}

declare module MediaControlService {
    /**
     *
     */
    function generateMediaControlKey(): undefined ;
    /**
     *
     */
    function getCurrentActiveMediaMetadata(): MediaMetadataInit ;
    /**
     *
     */
    function getCurrentMediaSessionPlaybackState(): MediaSessionPlaybackState ;
}

declare module PathUtils {
    /**
     * The profile directory.
     */
    var profileDir: readonly DOMString ;
    /**
     * The local-specific profile directory.
     */
    var localProfileDir: readonly DOMString ;
    /**
     * The OS temporary directory.
     */
    var tempDir: readonly DOMString ;
    /**
     * The libxul path.
     */
    var xulLibraryPath: readonly DOMString ;
    /**
     * Return the last path component.
     *
     * @param path An absolute path.
     *
     * @returns The last path component.
     */
    function filename(): DOMString ;
    /**
     * Return an ancestor directory of the given path.
     *
     * @param path An absolute path.
     * @param depth The number of ancestors to remove, defaulting to 1 (i.e., the
     * parent).
     *
     * @return The ancestor directory.
     *
     * If the path provided is a root path (e.g., `C:` on Windows or `/`
     * on *NIX), then null is returned.
     */
    function parent(): DOMString ?;
    /**
     * Join the given components into a full path.
     *
     * @param components The path components. The first component must be an
     * absolute path. There must be at least one component.
     */
    function join(): DOMString ;
    /**
     * Join the given relative path to the base path.
     *
     * @param base The base path. This must be an absolute path.
     * @param relativePath A relative path to join to the base path.
     */
    function joinRelative(): DOMString ;
    /**
     * Creates an adjusted path using a path whose length is already close
     * to MAX_PATH. For windows only.
     *
     * @param path An absolute path.
     */
    function toExtendedWindowsPath(): DOMString ;
    /**
     * Normalize a path by removing multiple separators and `..` and `.`
     * directories.
     *
     * On UNIX platforms, the path must exist as symbolic links will be resolved.
     *
     * @param path The absolute path to normalize.
     */
    function normalize(): DOMString ;
    /**
     * Split a path into its components.
     *
     * @param path An absolute path.
     */
    function split(): sequence<DOMString> ;
    /**
     * Split a relative path into its components.
     *
     * @param path A relative path.
     */
    function splitRelative(): sequence<DOMString> ;
    /**
     * Transform a file path into a file: URI
     *
     * @param path An absolute path.
     *
     * @return The file: URI as a string.
     */
    function toFileURI(): DOMString ;
    /**
     *
     */
    function isAbsolute(): boolean ;
    /**
     * The profile directory.
     */
    function getProfileDir(): Promise<DOMString> ;
    /**
     * The local-specific profile directory.
     */
    function getLocalProfileDir(): Promise<DOMString> ;
    /**
     * The OS temporary directory.
     */
    function getTempDir(): Promise<DOMString> ;
    /**
     * The libxul path.
     */
    function getXulLibraryPath(): Promise<DOMString> ;
}

declare module PlacesObservers {
    /**
     *
     */
    function addListener(): undefined ;
    /**
     *
     */
    function addListener(): undefined ;
    /**
     *
     */
    function removeListener(): undefined ;
    /**
     *
     */
    function removeListener(): undefined ;
    /**
     *
     */
    function notifyListeners(): undefined ;
}

declare module PromiseDebugging {
    /**
     * The various functions on this interface all expect to take promises but
     * don't want the WebIDL behavior of assimilating random passed-in objects
     * into promises.  They also want to treat Promise subclass instances as
     * promises instead of wrapping them in a vanilla Promise, which is what the
     * IDL spec says to do.  So we list all our arguments as "object" instead of
     * "Promise" and check for them being a Promise internally.
     *
     *
     * /**
     * Get the current state of the given promise.
     * /
     */
    function getState(): PromiseDebuggingStateHolder ;
    /**
     * Return an identifier for a promise. This identifier is guaranteed
     * to be unique to the current process.
     */
    function getPromiseID(): DOMString ;
    /**
     * Return the stack to the promise's allocation point.  This can
     * return null if the promise was not created from script.
     */
    function getAllocationStack(): object ?;
    /**
     * Return the stack to the promise's rejection point, if the
     * rejection happened from script.  This can return null if the
     * promise has not been rejected or was not rejected from script.
     */
    function getRejectionStack(): object ?;
    /**
     * Return the stack to the promise's fulfillment point, if the
     * fulfillment happened from script.  This can return null if the
     * promise has not been fulfilled or was not fulfilled from script.
     */
    function getFullfillmentStack(): object ?;
    /**
     *
     */
    function addUncaughtRejectionObserver(): undefined ;
    /**
     *
     */
    function removeUncaughtRejectionObserver(): boolean ;
}

declare module SessionStoreUtils {
    /**
     * Calls the given |callback| once for each non-dynamic child frame of the
     * given |window|.
     */
    function forEachNonDynamicChildFrame(): undefined ;
    /**
     * Takes the given listener, wraps it in a filter that filters out events from
     * dynamic docShells, and adds that filter as a listener for the given event
     * type on the given event target.  The listener that was added is returned
     * (as nsISupports) so that it can later be removed via
     * removeDynamicFrameFilteredListener.
     *
     * This is implemented as a native filter, rather than a JS-based one, for
     * performance reasons.
     */
    function addDynamicFrameFilteredListener(): nsISupportsType ?;
    /**
     * Remove the passed-in filtered listener from the given event target, if it's
     * currently a listener for the given event type there.  The 'listener'
     * argument must be something that was returned by
     * addDynamicFrameFilteredListener.
     *
     * This is needed, instead of the normal removeEventListener, because the
     * caller doesn't actually have something that WebIDL considers an
     * EventListener.
     */
    function removeDynamicFrameFilteredListener(): undefined ;
    /**
     *
     */
    function collectDocShellCapabilities(): ByteString ;
    /**
     *
     */
    function restoreDocShellCapabilities(): undefined ;
    /**
     *
     */
    function collectScrollPosition(): CollectedData ?;
    /**
     *
     */
    function restoreScrollPosition(): undefined ;
    /**
     *
     */
    function collectFormData(): CollectedData ?;
    /**
     *
     */
    function restoreFormData(): boolean ;
    /**
     *
     */
    function constructSessionStoreRestoreData(): nsISessionStoreRestoreDataType ;
    /**
     *
     */
    function initializeRestore(): Promise<undefined> ;
    /**
     *
     */
    function restoreDocShellState(): Promise<undefined> ;
    /**
     *
     */
    function restoreSessionStorageFromParent(): undefined ;
}

declare module TelemetryStopwatch {
    /**
     *
     */
    function start(): boolean ;
    /**
     *
     */
    function running(): boolean ;
    /**
     *
     */
    function cancel(): boolean ;
    /**
     *
     */
    function timeElapsed(): long ;
    /**
     *
     */
    function finish(): boolean ;
    /**
     *
     */
    function startKeyed(): boolean ;
    /**
     *
     */
    function runningKeyed(): boolean ;
    /**
     *
     */
    function cancelKeyed(): boolean ;
    /**
     *
     */
    function timeElapsedKeyed(): long ;
    /**
     *
     */
    function finishKeyed(): boolean ;
    /**
     *
     */
    function setTestModeEnabled(): undefined ;
}

declare module UniFFIScaffolding {
    /**
     * Call a scaffolding function on the worker thread.
     *
     * id is a unique identifier for the function, known to both the C++ and JS code
     */
    function callAsync(): Promise<UniFFIScaffoldingCallResult> ;
    /**
     * Call a scaffolding function on the main thread
     *
     * id is a unique identifier for the function, known to both the C++ and JS code
     */
    function callSync(): UniFFIScaffoldingCallResult ;
    /**
     * Read a UniFFIPointer from an ArrayBuffer
     *
     * id is a unique identifier for the pointer type, known to both the C++ and JS code
     */
    function readPointer(): UniFFIPointer ;
    /**
     * Write a UniFFIPointer to an ArrayBuffer
     *
     * id is a unique identifier for the pointer type, known to both the C++ and JS code
     */
    function writePointer(): undefined ;
    /**
     * Register the global calblack handler
     *
     * This will be used to invoke all calls for a CallbackInterface.
     * interfaceId is a unique identifier for the callback interface, known to both the C++ and JS code
     */
    function registerCallbackHandler(): undefined ;
    /**
     * Deregister the global calblack handler
     *
     * This is called at shutdown to clear out the reference to the JS function.
     */
    function deregisterCallbackHandler(): undefined ;
}

declare module UserInteraction {
    /**
     *
     */
    function start(): boolean ;
    /**
     *
     */
    function update(): boolean ;
    /**
     *
     */
    function cancel(): boolean ;
    /**
     *
     */
    function running(): boolean ;
    /**
     *
     */
    function finish(): boolean ;
}

declare module APZHitResultFlags { }

declare module AddonManagerPermissions {
    /**
     *
     */
    function isHostPermitted(): boolean ;
}

declare module CSS {
    /**
     *
     */
    var highlights: readonly HighlightRegistry ;
    /**
     *
     */
    function supports(): boolean ;
    /**
     *
     */
    function supports(): boolean ;
    /**
     *
     */
    function escape(): DOMString ;
    /**
     *
     */
    function registerProperty(): undefined ;
}

declare module console {
    /**
     * NOTE: if you touch this namespace, remember to update the ConsoleInstance
     * interface as well!
     * Logging
     */
    function assert(): undefined ;
    /**
     *
     */
    function clear(): undefined ;
    /**
     *
     */
    function count(): undefined ;
    /**
     *
     */
    function countReset(): undefined ;
    /**
     *
     */
    function debug(): undefined ;
    /**
     *
     */
    function error(): undefined ;
    /**
     *
     */
    function info(): undefined ;
    /**
     *
     */
    function log(): undefined ;
    /**
     *
     */
    function table(): undefined ;
    /**
     * FIXME: The spec is still unclear about this.
     */
    function trace(): undefined ;
    /**
     *
     */
    function warn(): undefined ;
    /**
     *
     */
    function dir(): undefined ;
    /**
     * FIXME: This doesn't follow the spec yet.
     */
    function dirxml(): undefined ;
    /**
     * Grouping
     */
    function group(): undefined ;
    /**
     *
     */
    function groupCollapsed(): undefined ;
    /**
     *
     */
    function groupEnd(): undefined ;
    /**
     * Timing
     */
    function time(): undefined ;
    /**
     *
     */
    function timeLog(): undefined ;
    /**
     *
     */
    function timeEnd(): undefined ;
    /**
     * Mozilla only or Webcompat methods
     */
    function exception(): undefined ;
    /**
     *
     */
    function timeStamp(): undefined ;
    /**
     *
     */
    function profile(): undefined ;
    /**
     *
     */
    function profileEnd(): undefined ;
    /**
     *
     */
    function createInstance(): ConsoleInstance ;
}

declare module TestUtils {
    /**
     *
     */
    function gc(): Promise<undefined> ;
}

declare module WebrtcGlobalInformation {
    /**
     *
     */
    var debugLevel: readonly long ;
    /**
     *
     */
    var aecDebug: readonly boolean ;
    /**
     *
     */
    var aecDebugLogDir: readonly DOMString ;
    /**
     *
     */
    function getAllStats(): undefined ;
    /**
     *
     */
    function getStatsHistoryPcIds(): undefined ;
    /**
     *
     */
    function getStatsHistorySince(): undefined ;
    /**
     *
     */
    function getMediaContext(): WebrtcGlobalMediaContext ;
    /**
     *
     */
    function clearAllStats(): undefined ;
    /**
     *
     */
    function getLogging(): undefined ;
    /**
     *
     */
    function clearLogging(): undefined ;
}

declare module WorkerTestUtils {
    /**
     *
     */
    function currentTimerNestingLevel(): unsigned_long ;
}

