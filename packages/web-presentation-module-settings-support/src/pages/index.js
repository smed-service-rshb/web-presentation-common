import createSettingsListComponent from './SettingsList.jsx'
import createSettingEditComponent from './SettingsEdit.jsx'
import generatePageKey from './page-keys';
import {SETTINGS_EDIT, SETTINGS_CREATE, SETTINGS_LIST} from './page-keys';

export const buildPages = (moduleName) => {
    let result = {};
    result[generatePageKey(moduleName, SETTINGS_LIST)] = createSettingsListComponent(moduleName);
    result[generatePageKey(moduleName, SETTINGS_CREATE)] = createSettingEditComponent[0](moduleName);
    result[generatePageKey(moduleName, SETTINGS_EDIT)] = createSettingEditComponent[1](moduleName);

    return result;
};
