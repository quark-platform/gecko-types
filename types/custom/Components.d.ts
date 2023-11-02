declare module Components {
  declare function ID(id: string): unknown

  /**
   * Determins wether a given XPCOM return code indicates the success or failure of an operation
   * returning `true` or `fase` respectivly
   *
   * @see {@link https://udn.realityripple.com/docs/Mozilla/Tech/XPCOM/Language_Bindings/Components.isSuccessCode}
   */
  declare function isSuccessCode(returnCode: nsresult): boolean

  /**
   * Components.Exception is a JavaScript constructor to create nsIException objects. These
   * exception objects may be thrown when implementing xpcom interfaces in JavaScript, and they
   * can provide better diagnostics in the error console if not caught than simply throwing an
   * nsresult's value will.
   *
   * @see Outdated: {@link https://udn.realityripple.com/docs/Mozilla/Tech/XPCOM/Language_Bindings/Components.Exception}
   * @see Cleanup bug: {@link https://bugzilla.mozilla.org/show_bug.cgi?id=1435483}
   */
  declare function Exception(
    message?: string,
    result?: nsresult,
    stack?: unknown,
    data?: unknown,
  ): nsIExceptionType

  declare function Constructor<
    ContractId extends keyof typeof Cc,
    InterfaceName extends (typeof Cc)[ContractId]['interfaceName'],
    Interface extends CiMap[InterfaceName],
    Initializer extends keyof Interface,
  >(
    contractId: ContractId,
    interfaceName: InterfaceName,
    initializer: Initializer,
  ): {
    new (...params: Parameters<Interface[Initializer]>): Interface
  }
}
