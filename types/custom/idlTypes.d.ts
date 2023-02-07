declare type char = number
declare type double = number
declare type float = number
declare type long = number
declare type long_long = number
declare type octet = number
declare type short = number
declare type unsigned_long = number
declare type unsigned_long_long = number
declare type unsigned_short = number
declare type wchar = string
declare type MozExternalRefCountType = number

declare type PRTime = number
declare type nsresult = number
declare type size_t = number
declare type nsIDRef = object
declare type nsIIDRef = object
declare type nsCIDRef = object
declare type nsIDPtr = object
declare type nsIIDPtr = object
declare type nsQIResult = object
declare type AUTF8String = string
declare type ACString = string
declare type AString = string
declare type jsval = any

// Correct override for sometimes in js
declare interface nsISupportsType {
  /**
   * A run time mechanism for interface discovery.
   * @param aIID [in] A requested interface IID
   * @param aInstancePtr [out] A pointer to an interface pointer to
   * receive the result.
   * @return **NS_OK** if the interface is supported by the associated
   * instance, **NS_NOINTERFACE** if it is not.
   *
   * aInstancePtr must not be null.
   */
  QueryInterface(aIID: nsIIDRef, aInstancePtr?: nsQIResult): any
}
