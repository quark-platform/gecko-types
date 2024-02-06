declare interface MessageListenerManager {
  /**
   * Register |listener| to receive |messageName|.  All listener
   * callbacks for a particular message are invoked when that message
   * is received.
   *
   * The message manager holds a strong ref to |listener|.
   *
   * If the same listener registers twice for the same message, the
   * second registration is ignored.
   *
   * Pass true for listenWhenClosed if you want to receive messages
   * during the short period after a frame has been removed from the
   * DOM and before its frame script has finished unloading. This
   * parameter only has an effect for frame message managers in
   * the main process. Default is false.
   */
  addMessageListener(
    messageName: string,
    listener: MessageListener,
    listenWhenClosed?: boolean,
  ): void

  /**
   * Undo an |addMessageListener| call -- that is, calling this causes us to no
   * longer invoke |listener| when |messageName| is received.
   *
   * removeMessageListener does not remove a message listener added via
   * addWeakMessageListener; use removeWeakMessageListener for that.
   */
  removeMessageListener(messageName: string, listener: MessageListener): void

  /**
   * This is just like addMessageListener, except the message manager holds a
   * weak ref to |listener|.
   *
   * If you have two weak message listeners for the same message, they may be
   * called in any order.
   */
  addWeakMessageListener(messageName: string, listener: MessageListener): void

  /**
   * This undoes an |addWeakMessageListener| call.
   */
  removeWeakMessageListener(
    messageName: string,
    listener: MessageListener,
  ): void
}

declare interface MessageBroadcaster extends MessageListenerManager {
  /**
   * Like |sendAsyncMessage()|, but also broadcasts this message to
   * all "child" message managers of this message manager.  See long
   * comment above for details.
   *
   * WARNING: broadcasting messages can be very expensive and leak
   * sensitive data.  Use with extreme caution.
   */
  broadcastAsyncMessage(messageName?: string | null, obj?: any): void

  /**
   * Number of subordinate message managers.
   */
  readonly childCount: number

  /**
   * Return a single subordinate message manager.
   */
  getChildAt(aIndex: number): MessageListenerManager | null

  /**
   * Some processes are kept alive after their last tab/window are closed for testing
   * (see dom.ipc.keepProcessesAlive). This function releases those.
   */
  releaseCachedProcesses(): void
}

declare namespace Services {
  export var ppmm: MessageBroadcaster
}
