declare module ChromeUtils {
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
  function generateQI(interfaces: (keyof CiType)[]): MozQueryInterface

  /**
   * Defines propertys on the given target which lazily imports a ES module
   * when accessed.
   *
   * @param target The target object on which to define the property.
   * @param modules An object with a property for each module property to be
   * imported, where the property name is the name of the
   * imported symbol and the value is the module URI.
   */
  function defineESModuleGetters<Modules extends Partial<MozESMExportFile>>(
    target: { [Key in keyof Modules]: MozESMExportType[Key] },
    modules: Modules,
  ): void
}
