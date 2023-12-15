import React from 'react';
import Messages from './Messages.jsx';
import {compose, withActions, withPageRouter} from '@efr/medservice-web-presentation-core';
import {Grid, Form, Panel, Notification, Button} from '@efr/medservice-web-presentation-ui';
import {generateGetSettingsListActionName, generateDeleteSettingsActionName} from "../actions/index";
import generatePageKey from './page-keys';
import {SETTINGS_EDIT, SETTINGS_CREATE, SETTINGS_LIST} from './page-keys';
import {Rights} from "@efr/medservice-web-presentation-authentication";

const columns = [
    {key: 'key', name: 'Название настройки'}
];

const createSettingsListComponent = (moduleName) => {
    class SettingsListComponent extends React.Component {
        state = {
            completeDelete: false,
            errorDelete: false,
            textError: ''
        };
        constructor (props) {
            super(props);
            this.dataSource = Grid.createDataSource(this.getData);
        }

        getData = (...params) => {
            return this.props.actions.getSettingsList(...params)
                .then(data => ({
                        rows: data.content,
                        hasMore: false,
                        totalElements: data.totalElements,
                        totalPages: data.totalPages,
                        last: data.last,
                        size: data.size,
                        page: data.number,
                        sort: data.sort,
                        first: data.first,
                        numberOfElements: data.numberOfElements
                    }
                ))
        };

        editView = rowData => {
            this.props.pageRouter.open(generatePageKey(moduleName, SETTINGS_EDIT), {settingKey:rowData.key})
        };

        createView = rowData => {
            this.props.pageRouter.open(generatePageKey(moduleName, SETTINGS_CREATE))
        };

        removeView = selectedRows => {
            const {deleteSettings} = this.props.actions;
            const promises = [];
            selectedRows.forEach(row => {
                promises.push(deleteSettings(row.key));
            });

            this.setState({
                completeDelete: false,
                errorDelete: false
            });

            return Promise.all(promises)
                .then(() => {
                    this.setState({completeDelete: true});
                    this.dataSource.load();
                }).catch(error => {
                    let message;
                    switch (error.status) {
                        case 400: message = Messages.Settings.Errors.incorrectKey; break
                        case 404: message = Messages.Settings.Errors.operationNotFound; break
                        case 500: message = Messages.Settings.Errors.systemError; break
                        default: message =  Messages.Settings.Errors.systemError;
                    }
                    this.setState({errorDelete: true, textError: message});
                    this.dataSource.load();
                    throw error;
                })
        };


        render = () => {
            return(
                <div>
                    {this.state.completeDelete && <Notification type={Notification.notificationTypes.notice}>{(Messages.Settings.completeDelete)}</Notification>}
                    {this.state.errorDelete && <Notification>{this.state.textError}</Notification>}
                    <Panel label={Messages.Settings.list} dataId="viewComponent">
                        <Form dataId="formId">
                            <Grid
                                columns = {columns}
                                dataSource = {this.dataSource}
                                emptyMessage = {Messages.Settings.Message.empty}
                                onCellClick = {this.editView}
                                dataId="gridId"
                            >
                                <Button onClick={this.createView}
                                        name={'Создать'}
                                        dataId="ButtonSettingsCreate"
                                        type={Button.buttonTypes.primary}/>
                                <Button onClick={this.removeView}
                                        name={'Удалить'}
                                        dataId="ButtonSettingsRemove"
                                        type={Button.buttonTypes.primary}/>
                            </Grid>
                        </Form>
                    </Panel>
                </div>
            )
        }
    }

    return compose(
        withPageRouter,
        withActions({
            getSettingsList: generateGetSettingsListActionName(moduleName),
            deleteSettings: generateDeleteSettingsActionName(moduleName),
        })
    )(SettingsListComponent)

};

export default (moduleName) => ({
    key: `${moduleName}-${SETTINGS_LIST}`,
    path: `/${moduleName}/settings`,
    component: createSettingsListComponent(moduleName),
    availability: Rights.EDIT_SYSTEM_DICTIONARIES
});