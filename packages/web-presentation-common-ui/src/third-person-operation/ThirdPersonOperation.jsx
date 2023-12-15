import React from 'react';
import {compose, PropTypes, withFormData} from '@efr/medservice-web-presentation-core';

import {Fieldset} from '@efr/medservice-web-presentation-ui';
import {DocumentTypeKey, DocumentTypeData} from './constants'
import {getDocumentMap, getDocumentTypes, getRecord} from './utils'
import {
    TreePartyClientField,
    AgentLinkField,
    DocumentLinkField,
    DocumentTypeField,
    PoADateLinkField,
    PoAListField,
    TestamentListField,
    TestamentNumberLinkField,
    TestamentDateLinkField,
    OtherDocumentNumberField,
    OtherDocumentDateField,
    OtherDocumentAgentField,
    OtherDocumentScanField,
    validationForm
} from './validationFields'

class ThirdPersonOperation extends React.Component {
    state = {};
    componentWillMount = () => {
        this.documentTypes = getDocumentTypes(this.props);
        this.documentMap = getDocumentMap(this.props);
    };

    componentDidMount = () => {
        this.unlisten = this.props.dataSource.listen(
            (res, err) => {
                this.props.dataSource.changeValidation(this.validationFields(res, err));
            }
        );
        this.props.dataSource.setInitData(this.initData);
    };

    initData = (dataForInit = {}) => {
        const data = dataForInit;

        const documentList = this.documentMap[data[DocumentTypeField.name]];

        data[DocumentTypeField.name] = DocumentTypeData[data[DocumentTypeField.name]].fieldData;
        data[PoAListField.name] = getRecord(documentList, data[PoAListField.name]);
        data[TestamentListField.name] = getRecord(documentList, data[TestamentListField.name]);

        this.props.formData.init(data)
    };

    componentWillUnmount = () => {
        this.unlisten()
    };

    validationFields = (res, err) => {
        this.props.formData.validate(validationForm({
                treeParty: this.treeParty,
                documentType: this.documentType
            }),
            res,
            err
        )()
    };

    render = () => {
        const {renderField, rawValues} = this.props.formData;
        const {documentTypes, documentMap} = this;

        this.treeParty = rawValues[TreePartyClientField.name];
        this.documentType = rawValues[DocumentTypeField.name] && rawValues[DocumentTypeField.name].value;
        const PoAData = rawValues[PoAListField.name];
        const TeatamentData = rawValues[TestamentListField.name];

        return (
            <div>
                {renderField(TreePartyClientField)}
                {
                    this.treeParty &&
                    <Fieldset title="Документ-основание">
                        {renderField(DocumentTypeField, {options: documentTypes})}
                        {
                            this.documentType &&
                            <div>
                                {
                                    (this.documentType === DocumentTypeKey.BANK_NOTARIAL) &&
                                    <div>
                                        {
                                            renderField(PoAListField, {options: documentMap[this.documentType]})
                                        }
                                        {
                                            PoAData &&
                                            <div>
                                                {renderField(PoADateLinkField, PoAData.dateData)}
                                                {renderField(AgentLinkField, PoAData.agentData)}
                                                {
                                                    PoAData.type === DocumentTypeKey.NOTARIAL &&
                                                    renderField(DocumentLinkField, PoAData.documentData)
                                                }
                                            </div>
                                        }
                                    </div>
                                }
                                {
                                    this.documentType === DocumentTypeKey.TESTAMENT &&
                                    <div>
                                        {
                                            renderField(TestamentListField, {options: documentMap[this.documentType]})
                                        }
                                        {
                                            TeatamentData &&
                                            <div>
                                                {renderField(TestamentNumberLinkField, TeatamentData.numberData)}
                                                {renderField(TestamentDateLinkField, {value: TeatamentData.regDate})}
                                            </div>
                                        }
                                    </div>
                                }
                                {
                                    this.documentType === DocumentTypeKey.OTHER &&
                                    <div>
                                        {renderField(OtherDocumentNumberField)}
                                        {renderField(OtherDocumentDateField)}
                                        {renderField(OtherDocumentAgentField, {
                                            getAgent: this.props.other.getAgent,
                                        })}
                                        {renderField(OtherDocumentScanField)}
                                    </div>
                                }
                            </div>
                        }
                    </Fieldset>
                }
            </div>
        )
    };
}


ThirdPersonOperation.propTypes = {
    /**
     * Список банковских доверенностей
     */
    bank: PropTypes.arrayOf(PropTypes.shape({
        /**
         * Идентификатор
         */
        id: PropTypes.number.isRequired,
        /**
         * Код филиала
         */
        branchCode: PropTypes.string.isRequired,
        /**
         * Полное имя клиента
         */
        clientFullName: PropTypes.string.isRequired,
        /**
         * Полное имя доверенного лица
         */
        agentFullName: PropTypes.string.isRequired,
        /**
         * Дата регистрации
         */
        regDate: PropTypes.string.isRequired,
        /**
         * Дата окончания действия
         */
        expireDate: PropTypes.string.isRequired,
        /**
         * Функция перехода на доверенность
         */
        dateLink: PropTypes.func.isRequired,
        /**
         * Функция перехода на доверенное лицо
         */
        agentLink: PropTypes.func.isRequired
    })),
    /**
     * Список нотариальных доверенностей
     */
    notarial: PropTypes.arrayOf(PropTypes.shape({
        /**
         * Идентификатор
         */
        id: PropTypes.number.isRequired,
        /**
         * Код филиала
         */
        branchCode: PropTypes.string.isRequired,
        /**
         * Полное имя клиента
         */
        clientFullName: PropTypes.string.isRequired,
        /**
         * Полное имя доверенного лица
         */
        agentFullName: PropTypes.string.isRequired,
        /**
         * Дата регистрации
         */
        regDate: PropTypes.string.isRequired,
        /**
         * Дата окончания действия
         */
        expireDate: PropTypes.string.isRequired,
        /**
         * Функция перехода на доверенность
         */
        dateLink: PropTypes.func.isRequired,
        /**
         * Функция перехода на доверенное лицо
         */
        agentLink: PropTypes.func.isRequired,
        /**
         * Функция перехода на документ
         */
        documentLink: PropTypes.func.isRequired
    })),
    /**
     * Список завещаний
     */
    testament: PropTypes.arrayOf(PropTypes.shape({
        /**
         * Идентификатор
         */
        id: PropTypes.number.isRequired,
        /**
         * Код филиала
         */
        branchCode: PropTypes.string.isRequired,
        /**
         * Полное имя клиента
         */
        clientFullName: PropTypes.string.isRequired,
        /**
         * Полное имя доверенного лица
         */
        agentFullName: PropTypes.string.isRequired,
        /**
         * Дата регистрации
         */
        regDate: PropTypes.string.isRequired,
        /**
         * Номер
         */
        number: PropTypes.string.isRequired,
        /**
         * Функция перехода на завещание при нажатии на номер
         */
        numberLink: PropTypes.func.isRequired
    })),
    /**
     * Признак отображения типа документа Другое
     */
    other: PropTypes.shape({
        /**
         * Функция по нажатию на которую должен запускаться подпроцесс поиска третьего лица
         */
        getAgent: PropTypes.func.isRequired
    }),
    /**
     * Источник данных для валидации
     */
    dataSource: PropTypes.shape({
        /**
         * Подписаться на события получения сигнала для выполнения валидации
         * Возвращаемое значение:
         *    функция отписки
         */
        listen: PropTypes.func.isRequired,
    }).isRequired,
};

export default compose(
    withFormData,
)(ThirdPersonOperation)