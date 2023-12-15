import {maskAccountNumber, maskCardNumber} from "./mask-string";

describe('string-mask', () => {
	test('Накладывание маски на счет', () => {
		expect(maskAccountNumber("123 45678900987654321")).toBe("123 45 678 900987654321");
	});
	test('Если номер счтеа содержит неправильные значения - вернет вводимое значение номера счета', () => {
		expect(maskAccountNumber("123 423выфв678900987654321")).toBe("123423выфв678900987654321");
	});
	test('Если номер счета null вернет null', () => {
		expect(maskAccountNumber(null)).toBe(null);
	});

	test('Разделение на разряды маскированного номера карты', () => {
		expect(maskCardNumber("5422 44** **** 5555")).toBe("5422 44** **** 5555");
	});
	test('Если маскированный номер карты содержит неправильные значения - вернет вводимый номер карты', () => {
		expect(maskCardNumber("123 423выфв678900987654321")).toBe("123423выфв678900987654321");
	});
	test('Если ночер карты null вернет null', () => {
		expect(maskCardNumber(null)).toBe(null);
	});

});
