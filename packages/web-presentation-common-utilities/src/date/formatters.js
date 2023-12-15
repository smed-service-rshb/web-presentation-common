import moment from 'moment';

moment.locale("ru");

const formatDate = date => date == null ? date : moment(date).format("DD.MM.YYYY");

const formatDateTime = date => date == null ? date : moment(date).format("DD.MM.YYYY HH:mm");

const formatCurrentDateTime = () =>moment(new Date()).format("DD.MM.YYYY HH:mm");

const formatDateMonthYear = date => date == null ? date : moment(date).format("MM.YYYY");

const formatDateDayMonth = date => date == null ? date : moment(date).format("DD.MM");

export {formatDate, formatDateTime, formatCurrentDateTime, formatDateMonthYear, formatDateDayMonth};