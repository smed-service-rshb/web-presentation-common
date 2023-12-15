import React from 'react';

import TestHelper from '@efr/react-test'
import { ProductActions } from './index';

describe('ProductActions', () => {
    describe('Test render', () => {
        test('Render control', () => {
            const SomeComponent = () =><div></div>;
            let productActions = TestHelper.render(<div><div><ProductActions><SomeComponent/></ProductActions></div></div>);

            expect(productActions).toBePresent();
            expect(productActions.find(SomeComponent)).toBePresent();
        });

    });

});