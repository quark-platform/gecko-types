declare module "resource://gre/modules/psm/DER.sys.mjs" {
    export var DER: {
        UNIVERSAL;
        CONSTRUCTED;
        CONTEXT_SPECIFIC;
        INTEGER;
        BIT_STRING;
        NULL;
        OBJECT_IDENTIFIER;
        PrintableString;
        TeletexString;
        IA5String;
        UTCTime;
        GeneralizedTime;
        UTF8String;
        SEQUENCE;
        SET;
        DERDecoder;
    };
}