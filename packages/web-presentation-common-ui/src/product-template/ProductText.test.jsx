import React from 'react';

import TestHelper from '@efr/react-test'
import { ProductText } from './index';

import { Divider } from '@efr/medservice-web-presentation-ui'

const SomeComponent = () =><div></div>;

describe('ProductText', () => {
    describe('Test render', () => {
        test('Render control', () => {
            let productText = TestHelper.render(<ProductText/>);

            expect(productText).toBePresent();
            expect(productText.find('.product-text')).toBePresent();
            expect(productText.find(Divider)).not.toBePresent();
        });
        test('Control have title => Control will render with title', () => {
            const title = 'title';
            let productText = TestHelper.render(<ProductText title={title}><SomeComponent/></ProductText>);

            expect(productText.find('.product-template-data-item-name-table-description')).toBePresent();
        });
        test('Control have title and children => Control will render title with `:`', () => {
            const title = 'title';
            let productText = TestHelper.render(<ProductText title={title}><SomeComponent/></ProductText>);

            expect(productText.find('.product-template-data-item-name-table-description').text()).toEqual(title +':');
        });
        test('Control have title and haven`t children => Control will render title without `:`', () => {
            const title = 'title';
            let productText = TestHelper.render(<ProductText title={title}/>);

            expect(productText.find('.product-template-data-item-name-table-description')).toBePresent();
            expect(productText.find('.product-template-data-item-name-table-description').text()).toEqual(title);
        });

        test('Control`s title attribute is html => Control will render with html title', () => {
            let productText = TestHelper.render(<ProductText title={<SomeComponent/>}/>);

            expect(productText.find('.product-template-data-item-name-table-description').find(SomeComponent)).toBePresent();
        });
        test('Control`s have break attribute => Control will render Divider', () => {
            let productText = TestHelper.render(<ProductText break><SomeComponent/></ProductText>);

            expect(productText.find(Divider)).toBePresent();
        });


    });

});