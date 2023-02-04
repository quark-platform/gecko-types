type XULElements = keyof XULElementTypes

export declare global {
  interface Document {
    createXULElement<K extends XULElements>(type: K): XULElementTypes[K]
  }
}
