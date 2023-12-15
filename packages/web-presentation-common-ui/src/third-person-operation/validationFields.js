import React from 'react';
import {withFormData} from '@efr/medservice-web-presentation-core';
import {Field, Select, Toggle, Input, InputDatepicker, Button, Link, FileUpload} from '@efr/medservice-web-presentation-ui';
import {FieldsNames, FieldsKeys, DocumentTypeKey} from './constants'

const createField = (fieldKey, fieldName) => withFormData.createField(
    fieldKey,
    ({errorMessage}, {value}) => (
        <Field title={fieldName}>
            {value}
        </Field>
    )
);

const createLinkField = (fieldKey, fieldName) => withFormData.createField(
    fieldKey,
    ({errorMessage}, {value, onClick}) => (
        <Field title={fieldName}>
            <Link disabled={false} type={"external"} dataId={fieldKey + "-field"} onClick={onClick}>
                {value}
            </Link>
        </Field>
    )
);

const createListField = (fieldKey, fieldName) => withFormData.createField(
    fieldKey,
    ({value, setValue, errorMessage}, {options = []}) => {
        if (options.length !== 0) {
            return (
                <Field title={fieldName} required={true} error={errorMessage}>
                    <Select options={options}
                            value={value}
                            onChange={setValue}
                            placeholder=""
                            dataId="documentListSelect"
                            width="450px"
                    />
                </Field>
            )
        } else {
            return (
                <Field title={fieldName}>
                    Нет доступных документов
                </Field>
            )
        }
    },
    ({validator}) => ([
        validator.required(`Выберите значение в поле "${fieldName}".`)
    ])
);

export const TreePartyClientField = withFormData.createField(
    FieldsKeys.TREE_PARTY_CLIENT,
    ({value, onChange}, {disabled}) => (
        <Field title={FieldsNames.TREE_PARTY_CLIENT}>
            <Toggle disabled={disabled}
                    checked={value}
                    onChange={onChange}
                    dataId={FieldsKeys.TREE_PARTY_CLIENT + "-field"}
            />
        </Field>
    )
);

export const DocumentTypeField = withFormData.createField(
    FieldsKeys.DOCUMENT_TYPE,
    ({value, setValue, errorMessage, setFieldValue}, {options = []}) => (
        <Field title={FieldsNames.DOCUMENT_TYPE} required={true} error={errorMessage}>
            <Select
                options={options}
                value={value}
                onChange={(value) => {
                    setValue(value);
                    setFieldValue(FieldsKeys.POA_LIST, undefined);
                    setFieldValue(FieldsKeys.TESTAMENT_LIST, undefined);
                }}
                placeholder=""
                dataId="documentType"
                width="450px"
            />
        </Field>
    ),
    ({validator}) => ([
        validator.required(`Выберите значение в поле "${FieldsNames.DOCUMENT_TYPE}".`)
    ])
);

// Поля для доверенностей

export const PoAListField = createListField(FieldsKeys.POA_LIST, FieldsNames.POA_LIST);

export const PoADateLinkField = createLinkField(FieldsKeys.POA_DATE, FieldsNames.POA_DATE);

export const AgentLinkField = createLinkField(FieldsKeys.AGENT, FieldsNames.AGENT);

export const DocumentLinkField = createLinkField(FieldsKeys.DOCUMENT_LINK, FieldsNames.DOCUMENT_LINK);

// Поля для завещаний

export const TestamentListField = createListField(FieldsKeys.TESTAMENT_LIST, FieldsNames.TESTAMENT_LIST);

export const TestamentNumberLinkField = createLinkField(FieldsKeys.TESTAMENT_NUMBER, FieldsNames.TESTAMENT_NUMBER);

export const TestamentDateLinkField = createField(FieldsKeys.TESTAMENT_DATE, FieldsNames.TESTAMENT_DATE);

// Поля для других типов документов

export const OtherDocumentNumberField = withFormData.createField(
    FieldsKeys.OTHER_DOCUMENT_NUMBER,
    ({value, setValue, errorMessage}) => (
        <Field title={FieldsNames.OTHER_DOCUMENT_NUMBER} required={true} error={errorMessage}>
            <Input dataId={FieldsKeys.OTHER_DOCUMENT_NUMBER + "-field"}
                   value={value}
                   onChange={setValue}
                   width="250px"
            />
        </Field>
    ),
    ({validator}) => ([
        validator.required(`Введите значение в поле "${FieldsNames.OTHER_DOCUMENT_NUMBER}".`)
    ])
);

export const OtherDocumentDateField = withFormData.createField(
    FieldsKeys.OTHER_DOCUMENT_DATE,
    ({value, setValue, errorMessage}) => (
        <Field title={FieldsNames.OTHER_DOCUMENT_DATE} required={true} error={errorMessage}>
            <InputDatepicker dataId={FieldsKeys.OTHER_DOCUMENT_DATE + "-field"}
                             value={value}
                             onChange={setValue}
                             error={!!errorMessage}
            />
        </Field>
    ),
    ({validator}) => ([
        validator.required(`Введите значение в поле "${FieldsNames.OTHER_DOCUMENT_DATE}".`)
    ])
);

export const OtherDocumentAgentField = withFormData.createField(
    FieldsKeys.OTHER_DOCUMENT_AGENT,
    ({value, setFieldValue, errorMessage}, {getAgent}) => {

        if (value && !value.error) return (
            <Field title={FieldsNames.OTHER_DOCUMENT_AGENT} required={true} error={errorMessage}>
                <div>
                    <Link
                        onClick={value.link}
                        type="external"
                        disabled={false}
                        dataId="link-agent-button"
                    >
                        {value.fullName}
                    </Link>
                    <Button
                        onClick={() => {
                            setFieldValue(FieldsKeys.OTHER_DOCUMENT_AGENT, undefined)
                        }}
                        name="Удалить"
                        type="secondary"
                        disabled={false}
                        dataId="delete-agent-button"
                    />
                </div>
            </Field>
        );

        return (
            <Field title={FieldsNames.OTHER_DOCUMENT_AGENT} required={true} error={value && value.error ? value.error: errorMessage}>
                <Button
                    onClick={getAgent}
                    name="Найти"
                    type="secondary"
                    disabled={false}
                    dataId="find-agent-button"
                />
            </Field>
        )
    },
    ({validator}) => ([
        validator.required(`Выберете значение в поле "${FieldsNames.OTHER_DOCUMENT_AGENT}".`)
    ])
);

export const OtherDocumentScanField = withFormData.createField(
    FieldsKeys.OTHER_DOCUMENT_SCAN,
    ({value, setValue, errorMessage}) => (
        <Field title={FieldsNames.OTHER_DOCUMENT_SCAN} required={true} error={errorMessage}>
            <FileUpload
                name="Прикрепить"
                onFileChange={setValue}
                dataId="document-scan-file-upload"
            />
        </Field>
    ),
    ({validator}) => ([
        validator.required(`Введите значение в поле "${FieldsNames.OTHER_DOCUMENT_SCAN}".`)
    ])
);

export const validationForm = ({treeParty, documentType}) => {
    const fields = [
        TreePartyClientField,
    ];

    if (treeParty) {
        fields.push(DocumentTypeField);

        if (documentType === DocumentTypeKey.BANK_NOTARIAL) {
            fields.push(PoAListField)
        }

        if (documentType === DocumentTypeKey.TESTAMENT) {
            fields.push(TestamentListField)
        }

        if (documentType === DocumentTypeKey.OTHER) {
            fields.push(OtherDocumentNumberField);
            fields.push(OtherDocumentDateField);
            fields.push(OtherDocumentAgentField);
            fields.push(OtherDocumentScanField);
        }
    }

    const formValidators = [];
    return withFormData.createValidationForm(fields, formValidators);
};

