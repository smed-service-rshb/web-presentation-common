import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Hint } from '@efr/medservice-web-presentation-ui';
import './styles.css'

class ProductTemplate extends React.Component {

    static outline = {
        blue: 'blue',
        lightBlue: 'lightBlue',
        green: 'green',
        orange: 'orange',
        pink: 'pink',
        red: 'red',
        violet: 'violet',
        gray: 'gray',
        card: 'card',
        deposit: 'deposit',
        savingsAccount: 'savings-account',
        account: 'account',
        loan: 'loan',
    };

    static iconSize = {
        normal: 'normal',
        small: 'small'
    };

    static iconTypes = {
        accountCumulative: 'accountCumulative',
        accountCard: 'accountCard',
        accountCurrent: 'accountCurrent',
        cardMC: 'cardMC',
        cardVC: 'cardVC',
        cardMIR: 'cardMIR',
        cardUP: 'cardUP',
        cardUNIVERSAL: 'cardUNIVERSAL',
        deposit: 'deposit',
        insurance: 'insurance',
        loan: 'loan',
        service: 'service'
    };

    static markTypes = {
        package: 'package'
    };

    render() {
        return (
            <div className={classNames('product-template-type', this.props.className)}>
                <div className="product-template" data-id={this.props.dataId}>
                    <div className="product-template-wrapper">
                        {this.props.outline && this.props.iconType &&
                        <div className={classNames('product-template-image', `product-template-icon-size-${this.props.iconSize}`)}>
                            <div className="product-template-image-container">
                                <div className={`product-template-image-container-outline product-template-image-container-outline-${this.props.outline}`}>
                                    <div className={`product-template-image-container-icon-type product-template-image-container-icon-type-${this.props.iconType}`}></div>
                                </div>
                                {this.props.mark &&
                                <div className={`product-template-image-container-mark product-template-image-container-mark-${this.props.mark}`}></div>
                                }
                                {this.props.label && (this.props.outline === 'green' || this.props.outline === 'red' || this.props.outline === 'gray') &&
                                <div className={`product-template-image-container-label product-template-image-container-${this.props.outline}`}>
                                    <div className="product-template-image-container-label-text">
                                        <Hint name={this.props.label}><div className="size12">{this.props.label}</div></Hint>
                                    </div>
                                </div>
                                }
                            </div>
                        </div>
                        }
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }

    static propTypes = {
        /**
         * Тип обводки иконки продукта
         */
        outline: PropTypes.oneOf([
            ProductTemplate.outline.blue,
            ProductTemplate.outline.lightBlue,
            ProductTemplate.outline.green,
            ProductTemplate.outline.orange,
            ProductTemplate.outline.pink,
            ProductTemplate.outline.red,
            ProductTemplate.outline.violet,
            ProductTemplate.outline.gray,
            ProductTemplate.outline.card,
            ProductTemplate.outline.deposit,
            ProductTemplate.outline.savingsAccount,
            ProductTemplate.outline.account,
            ProductTemplate.outline.loan,
        ]),
        /**
         * Размер иконки продукта
         */
        iconSize: PropTypes.oneOf([
            ProductTemplate.iconSize.normal,
            ProductTemplate.iconSize.small
        ]),
        /**
         *  Тип иконки продукта
         */
        iconType: PropTypes.oneOf([
            ProductTemplate.iconTypes.accountCumulative,
            ProductTemplate.iconTypes.accountCard,
            ProductTemplate.iconTypes.accountCurrent,
            ProductTemplate.iconTypes.cardMC,
            ProductTemplate.iconTypes.cardVC,
            ProductTemplate.iconTypes.cardMIR,
            ProductTemplate.iconTypes.cardUP,
            ProductTemplate.iconTypes.cardUNIVERSAL,
            ProductTemplate.iconTypes.deposit,
            ProductTemplate.iconTypes.insurance,
            ProductTemplate.iconTypes.loan,
            ProductTemplate.iconTypes.service
        ]),
        /**
         * Признак является ли продукт частью пакета продуктов.
         */
        mark: PropTypes.PropTypes.oneOf([
            ProductTemplate.markTypes.package
        ]),
        /**
         * Статус продукта.
         */
        label: PropTypes.string,
        /**
         * Уникальный идентификатор элемента
         */
        dataId: PropTypes.string.isRequired,
        /**
         * Дополнительные класс элемента
         */
        className: PropTypes.string
    };

    static defaultProps = {
        iconSize: ProductTemplate.iconSize.normal
    };
}

export default ProductTemplate