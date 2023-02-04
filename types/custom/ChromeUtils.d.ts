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
}
