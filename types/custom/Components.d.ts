declare module Components {
  declare function ID(id: string): unknown

  /**
   * Determins wether a given XPCOM return code indicates the success or failure of an operation
   * returning `true` or `fase` respectivly
   *
   * @see {@url https://udn.realityripple.com/docs/Mozilla/Tech/XPCOM/Language_Bindings/Components.isSuccessCode}
   */
  declare function isSuccessCode(returnCode: nsresult): boolean

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
