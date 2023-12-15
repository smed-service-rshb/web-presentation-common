import React from 'react';

import TestHelper from '@efr/react-test'
import DocumentStatus from './DocumentStatus';

describe('DocumentStatus', () => {
    describe('Test render', () => {
        test('Render component ', () => {
            const status = {
                description: 'НА ПОДТВЕРЖДЕНИИ',
                icon: 'repeat',
                color: 'blue'
            };
            const claim = {
                number: 1,
                creationDate: new Date(),
                lastUpdateDate: new Date(),
            };
            const employee = {
                secondName: 'Касперски',
                firstName: 'Крис',
                middleName: 'Владимирович',
                position: 'ОПР',
            };
            const branchName = 'Отделение Банка №1 в городе';

            const documentStatus = TestHelper.render(<DocumentStatus status={status} claim={claim} employee={employee} branchName={branchName}/>);
            expect(documentStatus).toBePresent();
        });
    });
});