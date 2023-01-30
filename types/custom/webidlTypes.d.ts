/**
 * These are (some) of the types defined within the webidl standard
 */

/**
 * Int between [−128, 127]
 */
declare type byte = number

/**
 * The octet type is an unsigned integer type that has values in the range [0, 255].
 */
declare type octet = number

/**
 * The short type is a signed integer type that has values in the range [−32768, 32767].
 */
declare type short = number

/**
 * The unsigned short type is an unsigned integer type that has values in the range [0, 65535].
 */
declare type unsigned_short = number

/**
 * The long type is a signed integer type that has values in the range [−2147483648, 2147483647].
 */
declare type long = number

/**
 * The unsigned long type is an unsigned integer type that has values in the range [0, 4294967295].
 */
declare type unsigned_long = number

/**
 * The long long type is a signed integer type that has values in the range [−9223372036854775808, 9223372036854775807].
 */
declare type long_long = number

/**
 * The unsigned long long type is an unsigned integer type that has values in the range [0, 18446744073709551615].
 */
declare type unsigned_long_long = number

/**
 * The float type is a floating point numeric type that corresponds to the set of finite single-precision 32 bit IEEE 754 floating point numbers. [IEEE-754]
 */
declare type float = number

/**
 * The unrestricted float type is a floating point numeric type that corresponds to the set of all possible single-precision 32 bit IEEE 754 floating point numbers, finite, non-finite, and special "not a number" values (NaNs). [IEEE-754]
 */
declare type unrestricted_float = number

/**
 * The double type is a floating point numeric type that corresponds to the set of finite double-precision 64 bit IEEE 754 floating point numbers. [IEEE-754]
 */
declare type double = number

/**
 * The unrestricted double type is a floating point numeric type that corresponds to the set of all possible double-precision 64 bit IEEE 754 floating point numbers, finite, non-finite, and special "not a number" values (NaNs). [IEEE-754]
 */
declare type unrestricted_double = number

/**
 * The bigint type is an arbitrary integer type, unrestricted in range.
 */
declare type bigint = BigInt

/**
 * The DOMString type corresponds to the set of all possible sequences of code units. Such sequences are commonly interpreted as UTF-16 encoded strings [RFC2781] although this is not required.
 */
declare type DOMString = string

/**
 * The ByteString type corresponds to the set of all possible sequences of bytes. Such sequences might be interpreted as UTF-8 encoded strings [RFC3629] or strings in some other 8-bit-per-code-unit encoding, although this is not required.
 */
declare type ByteString = string

/**
 * The USVString type corresponds to the set of all possible sequences of scalar values, which are all of the Unicode code points apart from the surrogate code points.
 */
declare type USVString = string

/**
 * A record type is a parameterized type whose values are ordered maps with keys that are instances of K and values that are instances of V. K must be one of DOMString, USVString, or ByteString.
 */
declare type record<K, V> = Record<K, V>

/**
 * Sequences are just arrays
 */
declare type sequence<T> = Array<T>

/**
 * A frozen array type is a parameterized type whose values are references to objects that hold a fixed length array of unmodifiable values. The values in the array are of type T.
 */
declare type FrozenArray<T> = readonly Array<T>
