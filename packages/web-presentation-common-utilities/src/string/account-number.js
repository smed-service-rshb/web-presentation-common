/**
 * Получение информации по номеру счета
 * @param accountNumber номер счета в виде ХХХХХХХХХХХХХХХХХХХХ. Если содержит пробелы - они удаляются, поэтому допускается передача номера счета в форматированном виде
 * @returns accountData {RF: 2 цифры филиала, DO: 2 цифры доп. отделения}
 */
const parseAccountNumber = (accountNumber) => {
    let number = removeSpaces(accountNumber);
    if (!number || number.length !== 20) {
        return null;
    }

    const savingsTypePrefix = "423";
    return {
        accountNumber: number,
        currencyNumericCode: number.substr(5, 3),
        accountType: number.substr(0, 3) === savingsTypePrefix ? savingsTypePrefix : number.substr(0, 5),
        savingsTerm: number.substr(0, 3) === savingsTypePrefix && number.substr(3, 2),
        branchCode: number.substr(9, 4),
        checkSum: number.substr(8, 1),
        serialNumber: number.substr(13, 7),
    };
};

function removeSpaces(str) {
    return str && str.replace(/\s+/g, '');
}

export {
    parseAccountNumber
}