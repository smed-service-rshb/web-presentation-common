export const DocumentTypeKey = {
    BANK_NOTARIAL: "BANK_NOTARIAL",
    BANK: "BANK",
    NOTARIAL: "NOTARIAL",
    TESTAMENT:"TESTAMENT",
    OTHER:"OTHER"
};

export const DocumentTypeText = {
    BANK_NOTARIAL: "Банковская/нотариальная доверенность",
    TESTAMENT:"Завещательное распоряжение",
    OTHER:"Другое"
};

export const DocumentTypeData = {
    [DocumentTypeKey.BANK_NOTARIAL]: {
        text: DocumentTypeText[DocumentTypeKey.BANK_NOTARIAL],
        fieldData: {
            label: DocumentTypeText[DocumentTypeKey.BANK_NOTARIAL],
            value: DocumentTypeKey.BANK_NOTARIAL
        }
    },
    [DocumentTypeKey.TESTAMENT]: {
        text: DocumentTypeText[DocumentTypeKey.TESTAMENT],
        fieldData: {
            label: DocumentTypeText[DocumentTypeKey.TESTAMENT],
            value: DocumentTypeKey.TESTAMENT
        }
    },
    [DocumentTypeKey.OTHER]: {
        text: DocumentTypeText[DocumentTypeKey.OTHER],
        fieldData: {
            label: DocumentTypeText[DocumentTypeKey.OTHER],
            value: DocumentTypeKey.OTHER
        }
    }
};

export const FieldsNames = {
    TREE_PARTY_CLIENT: "Операция 3-го лица",
    DOCUMENT_TYPE: "Документ",
    POA_LIST: "Доверенность",
    POA_DATE: "Дата",
    AGENT: "Доверенное лицо",
    DOCUMENT_LINK: "Скан-копия доверенности",
    TESTAMENT_LIST: "Завещание",
    TESTAMENT_NUMBER: "Номер",
    TESTAMENT_DATE: "Дата",
    OTHER_DOCUMENT_NUMBER: "Номер",
    OTHER_DOCUMENT_DATE: "Дата",
    OTHER_DOCUMENT_AGENT: "3-е лицо",
    OTHER_DOCUMENT_SCAN: "Скан-копия",
};

export const FieldsKeys = {
    TREE_PARTY_CLIENT: "tree-party-client",
    DOCUMENT_TYPE: "document-type",
    POA_LIST: "poa-list",
    POA_DATE: "poa-date",
    AGENT: "agent",
    DOCUMENT_LINK: "document-link",
    TESTAMENT_LIST: "testament-list",
    TESTAMENT_NUMBER: "testament-number",
    TESTAMENT_DATE: "testament-date",
    OTHER_DOCUMENT_NUMBER: "other-document-number",
    OTHER_DOCUMENT_DATE: "other-document-date",
    OTHER_DOCUMENT_AGENT: "other-document-agent",
    OTHER_DOCUMENT_SCAN: "other-document-scan",
};