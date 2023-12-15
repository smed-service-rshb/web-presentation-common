import {parseAccountNumber} from "./account-number";

describe('string-mask', () => {
    test('пустая строка, undefined', () => {
        expect(parseAccountNumber("")).toBe(null);
        expect(parseAccountNumber()).toBe(null);
    });
    test('некорректная длина более или менее 20 символов', () => {
        expect(parseAccountNumber("123")).toBe(null);
        expect(parseAccountNumber("12345678900987654321!")).toBe(null);
    });
	test('удаление пробелов', () => {
		expect(parseAccountNumber("  123 456 7 8 9 009 8 76 5 4321   ").accountNumber).toBe("12345678900987654321");
	});
    test('код валюты', () => {
        expect(parseAccountNumber("40702 810 4 4900 0101693").currencyNumericCode).toBe("810");
    });
    test('контрольная сумма', () => {
        expect(parseAccountNumber("40702 810 4 4900 0101693").checkSum).toBe("4");
    });
    test('код подразделения', () => {
        expect(parseAccountNumber("40702 810 4 4900 0101693").branchCode).toBe("4900");
    });
    test('порядковый номер лицевого счета', () => {
        expect(parseAccountNumber("40702 810 4 4900 0101693").serialNumber).toBe("0101693");
    });
    test('тип счета', () => {
        expect(parseAccountNumber("40702 810 4 4900 0101693").accountType).toBe("40702");
    });
    test('тип и срок накопительного счета', () => {
        expect(parseAccountNumber("42355 810 4 4900 0101693").accountType).toBe("423");
        expect(parseAccountNumber("42355 810 4 4900 0101693").savingsTerm).toBe("55");
    });
});
