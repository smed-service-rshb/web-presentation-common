import React from 'react';

import {compose, withActions, withPageRouter} from '@efr/medservice-web-presentation-core';

import {
    generateGetSettingActionName,
    generateGetStringSettingValueActionName,
    generateGetLongSettingValueActionName
} from './actions'

const withSettingsSupport = mapping => Component => {
    const buildSettingsSupport = (actions) => {
        if (!mapping) {
            return {}
        }

        const result = {};
        Object.keys(mapping).forEach(key => {
            result[key] = {
                getSetting: actions[generateGetSettingActionName(mapping[key])],
                getStringSettingValue: actions[generateGetStringSettingValueActionName(mapping[key])],
                getLongSettingValue: actions[generateGetLongSettingValueActionName(mapping[key])]

            }
        });

        return result;
    };

    return class C extends React.Component {
        constructor(props, context) {
            super(props);
            this.settingsSupport = buildSettingsSupport(props.actions, props.pageRouter, context);
        }

        render = () => <Component {...this.props} {...this.settingsSupport}/>;

        static displayName = `withSettingsSupport(${Component.displayName || Component.name})`;
        static WrappedComponent = Component;

        static propTypes = Component.propTypes;
        static defaultProps = Component.defaultProps;
    }
};

export default
mapping => {
    const actions = {};

    Object.keys(mapping).forEach(key => {
        const getSettingAction = generateGetSettingActionName(mapping[key]);
        actions[getSettingAction] = getSettingAction;
        const getStringSettingValueAction = generateGetStringSettingValueActionName(mapping[key]);
        actions[getStringSettingValueAction] = getStringSettingValueAction;
        const getLongSettingValueAction = generateGetLongSettingValueActionName(mapping[key]);
        actions[getLongSettingValueAction] = getLongSettingValueAction;
    });

    return compose(
        withPageRouter,
        withActions(actions),
        withSettingsSupport(mapping)
    )
}