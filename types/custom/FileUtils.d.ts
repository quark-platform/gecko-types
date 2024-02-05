declare module 'resource://gre/modules/FileUtils.sys.mjs' {
  export namespace FileUtils {
    const File: new (path: string) => nsIFileType
  }
}
