import React from 'react';

import TestHelper from '@efr/react-test'
import { ProductData } from './index';

describe('ProductData', () => {
    describe('Test render', () => {
        test('Render control', () => {
            const SomeComponent = () =><div></div>;
            let productData = TestHelper.render(<div><div><ProductData><SomeComponent/></ProductData></div></div>);

            expect(productData).toBePresent();
            expect(productData.find(SomeComponent)).toBePresent();
        });

    });

});