import React from 'react';

import TestHelper from '@efr/react-test'
import { ProductName } from './index';

import { Link } from '@efr/medservice-web-presentation-ui'

const dataId = 'dataId';
const SomeComponent = () =><div></div>;
const action = jest.fn();

describe('ProductName', () => {
    describe('Test render', () => {
        test('Render control', () => {
            let productName = TestHelper.render(<ProductName/>);

            expect(productName).toBePresent();
            expect(productName.find('.product-text')).toBePresent();
        });

         test('Control have title => Control will render with title', () => {
            const title = 'title';
            let productName = TestHelper.render(<ProductName title={title}/>);

            expect(productName.find('.product-template-data-item-name-table-description')).toBePresent();
            expect(productName.find('.product-template-data-item-name-table-description').text()).toEqual(title + ':');
        });

        test('Control`s title attribute is html => Control will render with html title', () => {
            let productName = TestHelper.render(<ProductName title={<SomeComponent/>}/>);

            expect(productName.find('.product-template-data-item-name-table-description').find(SomeComponent)).toBePresent();
        });
        test('Control have action attribute => Control will render with Link control', () => {
            let productName = TestHelper.render(<ProductName action={action} dataId={dataId}><SomeComponent/></ProductName>);

            expect(productName.find('.product-text-table-cell-name').find(Link)).toBePresent();
            expect(productName.find('.product-text-table-cell-name').hasClass('green')).toBePresent();
            expect(productName.find('.link').prop('data-id')).toEqual(dataId);
        });
        test('Control haven`t action attribute => Control will render without Link control', () => {
            let productName = TestHelper.render(<ProductName name dataId={dataId}><SomeComponent/></ProductName>);

            expect(productName.find('.product-text-table-cell-name').find(Link)).not.toBePresent();
            expect(productName.find('.product-text-table-cell-name').hasClass('black')).toEqual(true);

            const tableCellBlock = productName.find('.table-cell-block');
            expect(tableCellBlock).toBePresent();
            expect(tableCellBlock.hasClass('bold')).toEqual(true);
            expect(tableCellBlock.hasClass('size16')).toEqual(true);
            expect(tableCellBlock.hasClass('black')).toEqual(true);
            expect(tableCellBlock.hasClass('flex-text')).toEqual(true);

            expect(productName.find(SomeComponent)).toBePresent();
        });
    });

});