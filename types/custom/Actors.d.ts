declare class JSActor {
  readonly name: string

  sendAsyncMessage<T>(messageName: string, obj?: T): void

  sendQuery<T, U>(messageName: string, obj?: T): Promise<U>
}

declare class JSWindowActorParent extends JSActor {
  readonly manager?: WindowGlobalParent

  readonly windowContext?: WindowContext

  readonly browsingContext?: CanonicalBrowsingContext
}

declare class JSWindowActorChild extends JSActor {
  readonly manager?: WindowGlobalChild

  readonly windowContext?: WindowContext

  readonly browsingContext?: BrowsingContext

  readonly document: Document

  readonly docShell: nsIDocShellType

  contentWindow: WindowProxy
}

declare interface WindowActorOptions {
  allFames?: boolean
  includeChrome?: boolean
  matches?: string[]
  remoteTypes?: string[]
  messageManagerGroups?: string[]

  parent?: WindowActorSidedOptions
  child?: WindowActorChildOptions
}

declare interface WindowActorSidedOptions {
  moduleURI?: string
  esModuleURI?: string
}

declare interface WindowActorEventListenerOptions
  extends AddEventListenerOptions {
  createActor?: boolean
}

declare interface WindowActorChildOptions {
  events?: Record<string, WindowActorEventListenerOptions>
  observers?: string[]
}
