import React from 'react';
import PropTypes from 'prop-types';
import classNames  from 'classnames'
import './styles.css'

class Amount extends React.Component {

    render() {
        if (!this.props.value) {
            return null;
        }
        const integerPart = Math.trunc(this.props.value);
        const digitPart = Math.ceil(Math.abs((this.props.value - integerPart)) * 100);

        let value = integerPart.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + "." + ((digitPart === 0) ? "00" : digitPart);

        return (
            <span className={classNames('amount nowrap', this.props.className)}>
                <span className={classNames('amount-value', this.props.valueClass)}>{value}</span>
                {this.props.currency &&
                    <span className={classNames('amount-currency', this.props.currencyClass)}>{this.props.currency}</span>
                }
            </span>
        )
    }

    static propTypes = {
        /**
         * Вывод суммы
         */
        value: PropTypes.number.isRequired,
        /**
         * Вывод валюты
         */
        currency: PropTypes.string,
        /**
         * Дополнительное стилевое оформление компонента
         */
        className: PropTypes.string,
        /**
         * Дополнительное стилевое оформление значения
         * Например, size14
         */
        valueClass: PropTypes.string,
        /**
         * Дополнительное стилевое оформление валюты
         * Например, size13
         */
        currencyClass: PropTypes.string
    };
}
export default Amount