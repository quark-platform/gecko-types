declare module Components {
  declare function ID(id: string): unknown

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
