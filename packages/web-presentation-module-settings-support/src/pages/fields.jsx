import React from 'react';
import Messages from './Messages.jsx';
import {Input, Field, Textarea} from '@efr/medservice-web-presentation-ui';
import {withFormData} from '@efr/medservice-web-presentation-core';


const KeyField = (disabled) => withFormData.createField(
    'key',
    ({value, onChange, errorMessage}) => (
        <Field title='Имя' error={errorMessage}>
            <Input type='text' value={value} onChange={onChange} dataId="field-key" maxLength={30} disabled={disabled} error={!!errorMessage}/>
        </Field>
    ),
    ({validator}) => ([
        validator.required(Messages.Settings.Validator.key)
    ])
);

const ValueField = withFormData.createField(
    'value',
    ({value, onChange, errorMessage}) => (
        <Field title='Значение' error={errorMessage}>
            <Input type='text' value={value} onChange={onChange} dataId="field-value" maxLength={255} error={!!errorMessage}/>
        </Field>
    ),
    ({validator}) => ([
        validator.required(Messages.Settings.Validator.value)
    ])
);

const DescriptionField = withFormData.createField(
    'description',
    ({value, onChange, errorMessage}) => (
        <Field title='Описание' error={errorMessage}>
            <Textarea type='text' value={value} onChange={onChange} dataId="field-description" maxLength={255} error={!!errorMessage}/>
        </Field>
    ),
    ({validator}) => ([
        validator.required(Messages.Settings.Validator.description)
    ])
);

export {KeyField, ValueField, DescriptionField}