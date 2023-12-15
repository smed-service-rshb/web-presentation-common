/**
 * Разделение номера счета на разряды вида ХХХ ХХ ХХХ ХХХХХХХХХХХХ
 * @param value вводимые данные
 * @returns {string} результат маскировки строки
 */
const maskAccountNumber = (value) => {
	return value == null ? value : value.replace(/\s/g, '').replace(/(\d{3})(\d{2})(\d{3})(\d{12})/g, '$1 $2 $3 $4');
};

/**
 * Разделение на разряды маскированного карточного счета
 * @param value вводимые данные
 * @returns {string} результат маскировки строки
 */
const maskCardNumber = (value) => {
		return value == null ? value : value.replace(/\s/g, "").replace(/(\d{4})(\d{2}\*{2})(\*{4})(\d{4})/g, '$1 $2 $3 $4');
};

export {
	maskAccountNumber,
	maskCardNumber,
}
