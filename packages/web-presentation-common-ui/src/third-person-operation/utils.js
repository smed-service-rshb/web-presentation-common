import {DocumentTypeData, DocumentTypeKey} from './constants'

export const getRecord = (list, number) => {
    if (list) {

        for (let i = 0; i < list.length; i++) {
            if (list[i].value === number) {
                return list[i];
            }
        }
    }
    return undefined
};

const fillPoAMap = (map, typePoA) => e => {
    const result = {
        label: `Доверенность от ${e.clientFullName}/ ${e.agentFullName} (${e.regDate} - ${e.expireDate})`,
        value: e.id.toString(),
        branchCode: e.branchCode,
        dateData: {
            value: e.regDate,
            onClick: e.dateLink
        },
        agentData: {
            value: e.agentFullName,
            onClick: e.agentLink
        },
        type: typePoA
    };

    if (typePoA === DocumentTypeKey.NOTARIAL) {
        result["documentData"] = {
            value: "Документ",
            onClick: e.documentLink
        }
    }
    map.push(result)
};

export const getDocumentMap = data => {
    const result = {
        [DocumentTypeKey.BANK_NOTARIAL]: [],
        [DocumentTypeKey.TESTAMENT]: [],
    };
    if (data.bank) data.bank.forEach(fillPoAMap(result[DocumentTypeKey.BANK_NOTARIAL], DocumentTypeKey.BANK));

    if (data.notarial) data.notarial.forEach(fillPoAMap(result[DocumentTypeKey.BANK_NOTARIAL], DocumentTypeKey.NOTARIAL));

    if (data.testament) result[DocumentTypeKey.TESTAMENT] = data.testament.map(e => (
        {
            label: `Завещание от ${e.clientFullName}/ ${e.agentFullName}`,
            value: e.id.toString(),
            branchCode: e.branchCode,
            regDate: e.regDate,
            numberData: {
                value: e.number,
                onClick: e.numberLink
            },
        }
    ));
    return result
};

export const getDocumentTypes = data => {
    const result = [];
    if (data.bank || data.notarial) result.push(DocumentTypeData[DocumentTypeKey.BANK_NOTARIAL].fieldData);
    if (data.testament) result.push(DocumentTypeData[DocumentTypeKey.TESTAMENT].fieldData);
    if (data.other) result.push(DocumentTypeData[DocumentTypeKey.OTHER].fieldData);
    return result
};