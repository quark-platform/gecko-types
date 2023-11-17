interface WindowContext {
  readonly browsingContext?: BrowsingContext | null

  readonly windowGlobalChild?: WindowGlobalChild | null // in-process only

  readonly innerWindowId: number

  readonly parentWindowContext?: WindowContext | null

  readonly topWindowContext: WindowContext

  readonly isInProcess: boolean

  /** True if this WindowContext is currently frozen in the BFCache. */
  readonly isInBFCache: boolean

  /** True if this window has registered a "beforeunload" event handler. */
  readonly hasBeforeUnload: boolean

  /** True if the principal of this window is for a local ip address. */
  readonly isLocalIP: boolean

  readonly shouldResistFingerprinting: boolean

  /**
   * The granular fingerprinting protection overrides for the context. We will
   * use the granular overrides to decide which fingerprinting protection we
   * want to enable in the context due to the WebCompat reason. The value can be
   * null, which means we are using default fingerprinting protection in the
   * context.
   */
  readonly overriddenFingerprintingSettings?: number | null

  /**
   * Partially determines whether script execution is allowed in this
   * BrowsingContext. Script execution will be permitted only if this
   * attribute is true and script execution is allowed in the owner
   * BrowsingContext.
   *
   * May only be set in the context's owning process.
   */
  allowJavascript: boolean
}

interface WindowGlobalParent extends WindowContext {
  readonly isClosed: boolean

  readonly isCurrentGlobal: boolean

  readonly outerWindowId: number
  readonly contentParentId: number

  readonly osPid: number

  /** A WindowGlobalParent is the root in its process if it has no parent, or its
   * embedder is in a different process.
   */
  readonly isProcessRoot: boolean

  /** Is the document loaded in this WindowGlobalParent the initial document
   * implicitly created while "creating a new browsing context".
   * https://html.spec.whatwg.org/multipage/browsers.html#creating-a-new-browsing-context
   */
  readonly isInitialDocument: boolean

  readonly rootFrameLoader?: FrameLoader | null // Embedded (browser) only

  readonly childActor?: WindowGlobalChild | null // in-process only

  /** Checks for any WindowContexts with "beforeunload" listeners in this
   * WindowGlobal's subtree. If any exist, a "beforeunload" event is
   * dispatched to them. If any of those request to block the navigation,
   * displays a prompt to the user. Returns a boolean which resolves to true
   * if the navigation should be allowed.
   *
   * If `timeout` is greater than 0, it is the maximum time (in milliseconds)
   * we will wait for a child process to respond with a request to block
   * navigation before proceeding. If the user needs to be prompted, however,
   * the promise will not resolve until the user has responded, regardless of
   * the timeout.
   */
  permitUnload(action?: PermitUnloadAction, timeout?: number): Promise<boolean>

  // Information about the currently loaded document.
  readonly documentPrincipal: Principal
  readonly documentStoragePrincipal: Principal
  readonly contentBlockingAllowListPrincipal?: Principal | null
  readonly documentURI?: URI | null
  readonly documentTitle: string
  readonly cookieJarSettings?: nsICookieJarSettings | null

  /** True if the the currently loaded document is in fullscreen. */
  fullscreen: boolean

  /** Bit mask containing content blocking events that are recorded in
   * the document's content blocking log.
   */
  readonly contentBlockingEvents: number

  /** String containing serialized content blocking log. */
  readonly contentBlockingLog: string

  /** DOM Process which this window was loaded in. Will be either InProcessParent
   * for windows loaded in the parent process, or ContentParent for windows
   * loaded in the content process.
   */
  readonly domProcess?: nsIDOMProcessParent | null

  static getByInnerWindowId(innerWindowId: number): WindowGlobalParent | null

  /**
   * Get or create the JSWindowActor with the given name.
   *
   * See WindowActorOptions from JSWindowActor.webidl for details on how to
   * customize actor creation.
   */
  getActor(name: string): JSWindowActorParent
  getExistingActor(name: string): JSWindowActorParent | null

  /**
   * Renders a region of the frame into an image bitmap.
   *
   * @param rect Specify the area of the document to render, in CSS pixels,
   * relative to the page. If null, the currently visible viewport is rendered.
   * @param scale The scale to render the window at. Use devicePixelRatio
   * to have comparable rendering to the OS.
   * @param backgroundColor The background color to use.
   * @param resetScrollPosition If true, temporarily resets the scroll position
   * of the root scroll frame to 0, such that position:fixed elements are drawn
   * at their initial position. This parameter only takes effect when passing a
   * non-null rect.
   *
   * This API can only be used in the parent process, as content processes
   * cannot access the rendering of out of process iframes. This API works
   * with remote and local frames.
   */
  drawSnapshot(
    rect?: DOMRect | null,
    scale: number,
    backgroundColor: string,
    resetScrollPosition?: boolean
  ): Promise<ImageBitmap>

  /** True if any of the windows in the subtree rooted at this window
   * has active peer connections.  If this is called for a non-top-level
   * context, it always returns false.
   */
  hasActivePeerConnections(): boolean
}

interface WindowGlobalChild {
  readonly isClosed: boolean
  readonly isInProcess: boolean
  readonly browsingContext: BrowsingContext
  readonly windowContext: WindowContext

  readonly isCurrentGlobal: boolean

  readonly innerWindowId: number
  readonly outerWindowId: number
  readonly contentParentId: number

  /** A WindowGlobalChild is the root in its process if it has no parent, or its
   * embedder is in a different process.
   */
  readonly isProcessRoot: boolean

  /** Is this WindowGlobalChild same-origin with `window.top`? */
  readonly sameOriginWithTop: boolean

  readonly parentActor?: WindowGlobalParent | null // in-process only

  static getByInnerWindowId(innerWindowId: number): WindowGlobalChild | null

  findBrowsingContextWithName(name: string): BrowsingContext | null

  /**
   * Get or create the JSWindowActor with the given name.
   *
   * See WindowActorOptions from JSWindowActor.webidl for details on how to
   * customize actor creation.
   */
  getActor(name: string): JSWindowActorChild
  getExistingActor(name: string): JSWindowActorChild | null
}
