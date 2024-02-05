declare module PathUtils {
  /**
   * Join the given components into a full path.
   *
   * @param components The path components. The first component must be an
   * absolute path. There must be at least one component.
   */
  function join(...components: string[]): string
}
