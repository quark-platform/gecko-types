declare module "resource://gre/modules/PasswordGenerator.sys.mjs" {
    export var PasswordGenerator: {
        generatePassword(param0?);
        _addRequiredClassesAndCharacters(rules?, requiredClasses?);
        _randomUInt8Index(range?);
        _shuffleString(str?);
        _checkConsecutiveCharacters(generatedPassword?, value?);
        _getUpperCaseCharacters();
        _getLowerCaseCharacters();
        _getDigits();
        _getSpecialCharacters();
    };
}