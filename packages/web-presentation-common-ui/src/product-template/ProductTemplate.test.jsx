import React from 'react';

import TestHelper from '@efr/react-test'
import ProductTemplate from './index';

import { Hint } from '@efr/medservice-web-presentation-ui'

const dataId = 'dataId';
const outline = 'green';
const iconType = 'accountCumulative';
const mark = 'package';


describe('ProductTemplate', () => {
    describe('Test render', () => {
        test('Render product template', () => {
            let productTemplate = TestHelper.render(<ProductTemplate dataId={dataId}/>);

            expect(productTemplate.find('.product-template')).toBePresent();
            expect(productTemplate.find('.product-template-image')).not.toBePresent();
            expect(productTemplate.find('.product-template').prop('data-id')).toEqual(dataId);
        });
        test('Control have outline attribute and have not iconType attribute => Icon block won`t render', () => {
            let productTemplate = TestHelper.render(<ProductTemplate outline={outline} dataId={dataId}/>);

            expect(productTemplate.find('.product-template-image')).not.toBePresent();
        });
        test('Control have iconType attribute and have not outline attribute => Icon block won`t render', () => {
            let productTemplate = TestHelper.render(<ProductTemplate iconType={iconType} dataId={dataId}/>);

            expect(productTemplate.find('.product-template-image')).not.toBePresent();
        });
        test('Control have mark attribute and have not outline, iconType attributes => Icon block won`t render', () => {
            let productTemplate = TestHelper.render(<ProductTemplate mark={mark} dataId={dataId}/>);

            expect(productTemplate.find('.product-template-image')).not.toBePresent();
        });
        test('Control have label attribute and have not outline or iconType attributes => Icon block won`t render', () => {
            const label = 'label';
            let productTemplate = TestHelper.render(<ProductTemplate label={label} dataId={dataId}/>);

            expect(productTemplate.find('.product-template-image')).not.toBePresent();
        });
        test('Control have outline and iconType attributes => Icon block will render', () => {
            let productTemplate = TestHelper.render(<ProductTemplate outline={outline} iconType={iconType} dataId={dataId}/>);

            expect(productTemplate.find('.product-template-image')).toBePresent();
            expect(productTemplate.find('.product-template-image').hasClass('product-template-icon-size-normal')).toEqual(true);
            expect(productTemplate.find(`.product-template-image-container-outline-${outline}`)).toBePresent();
            expect(productTemplate.find(`.product-template-image-container-icon-type-${iconType}`)).toBePresent();
            expect(productTemplate.find('.product-template-image-container-mark')).not.toBePresent();
            expect(productTemplate.find('.product-template-image-container-label')).not.toBePresent();
        });
        test('Control have outline and iconType and mark attributes => Icon block will render with mark', () => {
            let productTemplate = TestHelper.render(<ProductTemplate outline={outline} iconType={iconType} mark={mark} dataId={dataId}/>);

            expect(productTemplate.find(`.product-template-image-container-mark-${mark}`)).toBePresent();
        });
        test('Control have outline and iconType and label attributes => Icon block will render with label', () => {
            const label = 'Закрыта';
            let productTemplate = TestHelper.render(<ProductTemplate outline={outline} iconType={iconType} label={label} dataId={dataId}/>);

            expect(productTemplate.find('.product-template-image-container-label')).toBePresent();
            expect(productTemplate.find('.product-template-image-container-label').text()).toEqual(label);
        });
        test('Control have outline (one of green, gray, red) and iconType and label attributes => Icon block will render with label', () => {
            const label = 'label';
            let productTemplate = TestHelper.render(<ProductTemplate outline={outline} iconType={iconType} label={label} dataId={dataId}/>);

            expect(productTemplate.find('.product-template-image-container-label')).toBePresent();
            expect(productTemplate.find('.product-template-image-container-label').text()).toEqual(label);
            expect(productTemplate.find(`.product-template-image-container-${outline}`)).toBePresent();
            expect(productTemplate.find(Hint)).toBePresent();
        });
        test('Control have outline (different from green, gray, red) and iconType and label attributes => Icon block will render without label', () => {
            const label = 'label';
            const outline = 'blue';
            let productTemplate = TestHelper.render(<ProductTemplate outline={outline} iconType={iconType} label={label} dataId={dataId}/>);

            expect(productTemplate.find('.product-template-image-container-label')).not.toBePresent();
            expect(productTemplate.find(`.product-template-image-container-outline-${outline}`)).toBePresent();
        });
        test('Control have iconSize attribute => Icon block will render with iconSize', () => {
            const label = 'label';
            const outline = 'blue';
            const iconSize = 'small';
            let productTemplate = TestHelper.render(<ProductTemplate outline={outline} iconType={iconType} label={label} dataId={dataId} iconSize={iconSize}/>);

            expect(productTemplate.find(`.product-template-icon-size-${iconSize}`)).toBePresent();
        });
        test('Check control identifier', () => {
            let productTemplate = TestHelper.render(<ProductTemplate dataId={dataId}/>);

            expect(productTemplate.find('.product-template').prop('data-id')).toEqual(dataId);
        });
        test('Control have additional className => Control will render with className', () => {
            const className = "className";
            let productTemplate = TestHelper.render(<ProductTemplate className={className} dataId={dataId}/>);

            expect(productTemplate.hasClass(className)).toBePresent();
        });
    });

});