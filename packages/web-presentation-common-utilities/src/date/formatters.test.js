import {formatDate, formatDateDayMonth, formatDateMonthYear, formatDateTime} from "./formatters";

describe('formatters', () => {
    test('Форматирование даты', () => {
        expect(formatDate(new Date(2017, 11, 18, 0, 0, 0, 0))).toBe("18.12.2017");
        expect(formatDateTime(new Date(2017, 11, 18, 19, 4, 6, 8))).toBe("18.12.2017 19:04");
        expect(formatDateMonthYear(new Date(2017, 11, 18, 0, 0, 0, 0))).toBe("12.2017");
        expect(formatDateDayMonth(new Date(2017, 11, 18, 0, 0, 0, 0))).toBe("18.12");
    });
});