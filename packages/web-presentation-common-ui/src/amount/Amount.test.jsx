import React from 'react';

import TestHelper from '@efr/react-test'
import Amount from './index';

const value = 12345.50;
const changedValue = "12 345.50";
const currency = "RUR";

describe('Amount', () => {
    describe('Test render', () => {
        test('Control have value => Control will render', () => {
            let amount = TestHelper.render(<Amount value={value}/>);

            expect(amount).toBePresent();
            expect(amount.text()).toEqual(changedValue);
            expect(amount.find('.amount-currency')).not.toBePresent();
        });
        test('Control have 1 symbol in digit part of value  => Control will render 2 symbols in digit part of value', () => {
            const value = 12345.5;
            const changedValue = "12 345.50";
            let amount = TestHelper.render(<Amount value={value}/>);

            expect(amount.text()).toEqual(changedValue);
        });
        test('Control have 3 symbols in digit part of value  => Control will render 2 symbols rounded up ', () => {
            const value = 12345.343;
            const changedValue = "12 345.35";
            let amount = TestHelper.render(<Amount value={value}/>);

            expect(amount.text()).toEqual(changedValue);
        });
        test('Control have 3 symbols in digit part of value => Control will render 2 symbols rounded up ', () => {
            const value = 12345.345;
            const changedValue = "12 345.35";
            let amount = TestHelper.render(<Amount value={value}/>);

            expect(amount.text()).toEqual(changedValue);
        });
        test('Control haven`t digit part of value => Control will render digit part with digit part ', () => {
            const value = 12345;
            const changedValue = "12 345.00";
            let amount = TestHelper.render(<Amount value={value}/>);

            expect(amount.text()).toEqual(changedValue);
        });
        test('Control have negative value with digit part of value => Control will render negative value and 2 symbols in digit part of value ', () => {
            const value = -12345.5;
            const changedValue = "-12 345.50";
            let amount = TestHelper.render(<Amount value={value}/>);

            expect(amount.text()).toEqual(changedValue);
        });
        test('Control have negative value with 3 symbols in digit part of value => Control will render negative value and 2 symbols rounded up ', () => {
            const value = -12345.345;
            const changedValue = "-12 345.35";
            let amount = TestHelper.render(<Amount value={value}/>);

            expect(amount.text()).toEqual(changedValue);
        });
        test('Control have negative value with 3 symbols in digit part of value  => Control will render negative value and 2 symbols rounded up ', () => {
            const value = -12345.343;
            const changedValue = "-12 345.35";
            let amount = TestHelper.render(<Amount value={value}/>);

            expect(amount.text()).toEqual(changedValue);
        });
        test('Control have negative value without digit part of value  => Control will render negative value and digit part ', () => {
            const value = -12345;
            const changedValue = "-12 345.00";
            let amount = TestHelper.render(<Amount value={value}/>);

            expect(amount.text()).toEqual(changedValue);
        });
        test('Control have 2 symbols in integer part  => Control won`t have backspace between symbols in integer part', () => {
            const value = 10;
            const changedValue = "10.00";
            let amount = TestHelper.render(<Amount value={value}/>);

            expect(amount.text()).toEqual(changedValue);
        });

        test('Control have currency => Control will render with currency', () => {
            let amount = TestHelper.render(<Amount value={value} currency={currency}/>);

            expect(amount.find('.amount-currency')).toBePresent();
            expect(amount.find('.amount-currency').text()).toEqual(currency);
        });
        test('Control have className => Control will render with className', () => {
            const className = "className";
            let amount = TestHelper.render(<Amount value={value} className={className}/>);

            expect(amount.find('.amount').hasClass(className)).toEqual(true);
        });
        test('Control have valueClass => Control will render with valueClass', () => {
            const valueClass = "size14";
            let amount = TestHelper.render(<Amount value={value} valueClass={valueClass}/>);

            expect(amount.find('.amount-value').hasClass(valueClass)).toEqual(true);
        });
        test('Control have currencyClass => Control will render with currencyClass', () => {
            const currencyClass = "size14";
            let amount = TestHelper.render(<Amount value={value} currency={currency} currencyClass={currencyClass}/>);

            expect(amount.find('.amount-currency').hasClass(currencyClass)).toEqual(true);
        });
    });
});