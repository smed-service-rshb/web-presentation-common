import React from 'react';
import Messages from './Messages.jsx';
import {PropTypes, compose, withActions, withFormData, withPageRouter} from '@efr/medservice-web-presentation-core';
import {KeyField, ValueField, DescriptionField} from './fields';
import {Form, Panel, Button} from '@efr/medservice-web-presentation-ui';
import generatePageKey from './page-keys';
import {SETTINGS_EDIT, SETTINGS_CREATE, SETTINGS_LIST} from './page-keys';
import {generateCreateSettingsActionName, generateGetSettingActionName, generateUpdateSettingsActionName} from "../actions/index";
import {Rights} from "@efr/medservice-web-presentation-authentication";

const createSettingEditComponent = (moduleName) => {
    class SettingsEditComponent extends React.Component {

        componentDidMount = () => {
            let settingKey = this.props.settingKey;
            if (settingKey) {
                let {getSetting} = this.props.actions;
                getSetting(settingKey)
                    .then(response => {
                        this.props.formData.init({
                            [KeyField().name]: response.key,
                            [ValueField.name]: response.value,
                            [DescriptionField.name]: response.description
                        })
                    })
            }
        };

        back = () => {
            this.props.pageRouter.open(generatePageKey(moduleName, SETTINGS_LIST));
        };

        save = (data) => {
            if (this.props.settingKey) {
                let {updateSettings} = this.props.actions;
                updateSettings(data)
                    .then(response => {
                        this.props.pageRouter.open(generatePageKey(moduleName, SETTINGS_LIST));
                    })
            } else {
                let {createSettings} = this.props.actions;
                createSettings(data)
                    .then(response => {
                        this.props.pageRouter.open(generatePageKey(moduleName, SETTINGS_LIST));
                    })
            }
        };

        render = () => {
            const {renderField, validate, errors} = this.props.formData;
            const Buttons = [
                <Button key="back"
                        name={Messages.Settings.button.back}
                        dataId="button-back"
                        onClick={this.back}
                />,
                <Button key="save"
                        name={Messages.Settings.button.save}
                        dataId="button-save"
                        onClick={validate(validationForm(), this.save, () => {})}
                />
            ];

            return (
                <div>
                    <Panel label={this.props.id ? Messages.Settings.edit : Messages.Settings.new}
                           dataId="viewComponent">
                        <Form errors={errors.list()} buttons={Buttons} dataId="formId">
                            {renderField(KeyField(!!this.props.settingKey))}
                            {renderField(ValueField)}
                            {renderField(DescriptionField)}
                        </Form>
                    </Panel>
                </div>
            )
        };

        static propTypes = {
            settingKey: PropTypes.string,
        };
    }

    const validationForm = () => {
        const fields = [
            KeyField(),
            ValueField,
            DescriptionField
        ];

        const formValidators = [];

        return withFormData.createValidationForm(
            fields,
            formValidators
        );
    };

    return compose(
        withPageRouter,
        withFormData,
        withActions({
            getSetting: generateGetSettingActionName(moduleName),
            createSettings: generateCreateSettingsActionName(moduleName),
            updateSettings: generateUpdateSettingsActionName(moduleName)
        })
    )(SettingsEditComponent)
};

export default [(moduleName) => ({
        key: `${moduleName}-${SETTINGS_CREATE}`,
        path: `/${moduleName}/create-settings`,
        component: createSettingEditComponent(moduleName),
        availability: Rights.EDIT_SYSTEM_DICTIONARIES
    }),
    (moduleName) => ({
        key: `${moduleName}-${SETTINGS_EDIT}`,
        path: `/${moduleName}/edit-settings/:settingKey`,
        component: createSettingEditComponent(moduleName),
        availability: Rights.EDIT_SYSTEM_DICTIONARIES
    })
];