const GetSettingsList = urlPrefix => ({RestClient},  filter = {}, offset, size) => {
    return RestClient
        .get(`${urlPrefix}/settings`)
        .query({offset, size})
        .then(response => response.body)
};

const GetSetting = urlPrefix => ({RestClient}, key) => {
    return RestClient
        .get(`${urlPrefix}/settings/${key}`)
        .then(response => response.body)
};

const GetSettingValue = (RestClient, urlPrefix, key, parse) => {
    return RestClient
        .get(`${urlPrefix}/settings/${key}/value`)
        .then(response => parse(response.body.value))
};

const GetLongSettingValue = urlPrefix => ({RestClient}, key) => {
    return GetSettingValue(RestClient, urlPrefix, key, (value) => parseInt(value, 10))
};

const GetStringSettingValue = urlPrefix => ({RestClient}, key) => {
    return GetSettingValue(RestClient, urlPrefix, key, (value) => value)
};

const CreateSettings = urlPrefix => ({RestClient}, data) => {
    return RestClient
        .post(`${urlPrefix}/settings`, data)
        .then(response => response.body)
};

const UpdateSettings = urlPrefix => ({RestClient}, data) => {
    return RestClient
        .put(`${urlPrefix}/settings/${data.key}`, data)
        .then(response => response.body)
};

const DeleteSettings = urlPrefix => ({RestClient}, key) => {
    return RestClient
        .delete(`${urlPrefix}/settings/${key}`)
        .then(response => response.body)
};


export const createGetSettingsListAction = (moduleName, urlPrefix) => ({
    name: generateGetSettingsListActionName(moduleName),
    action: GetSettingsList(urlPrefix)
});

export const createGetSettingAction = (moduleName, urlPrefix) => ({
    name: generateGetSettingActionName(moduleName),
    action: GetSetting(urlPrefix)
});

export const createGetStringSettingValueAction = (moduleName, urlPrefix) => ({
    name: generateGetStringSettingValueActionName(moduleName),
    action: GetStringSettingValue(urlPrefix)
});

export const createGetLongSettingValueAction = (moduleName, urlPrefix) => ({
    name: generateGetLongSettingValueActionName(moduleName),
    action: GetLongSettingValue(urlPrefix)
});

export const createCreateSettingsAction = (moduleName, urlPrefix) => ({
    name: generateCreateSettingsActionName(moduleName),
    action: CreateSettings(urlPrefix)
});

export const createUpdateSettingsAction = (moduleName, urlPrefix) => ({
    name: generateUpdateSettingsActionName(moduleName),
    action: UpdateSettings(urlPrefix)
});

export const createDeleteSettingsAction = (moduleName, urlPrefix) => ({
    name: generateDeleteSettingsActionName(moduleName),
    action: DeleteSettings(urlPrefix)
});

export const generateGetSettingsListActionName = moduleName => `settingsSupport.${moduleName}.getSettingsListAction`;
export const generateGetSettingActionName = moduleName => `settingsSupport.${moduleName}.getSettingAction`;
export const generateGetStringSettingValueActionName = moduleName => `settingsSupport.${moduleName}.getStringSettingValueAction`;
export const generateGetLongSettingValueActionName = moduleName => `settingsSupport.${moduleName}.getLongSettingValueAction`;
export const generateCreateSettingsActionName = moduleName => `settingsSupport.${moduleName}.createSettingsAction`;
export const generateUpdateSettingsActionName = moduleName => `settingsSupport.${moduleName}.updateSettingsAction`;
export const generateDeleteSettingsActionName = moduleName => `settingsSupport.${moduleName}.deleteSettingsAction`;

export const buildActions = (moduleName, urlPrefix) => ({
    GET_SETTINGS_LIST: createGetSettingsListAction(moduleName, urlPrefix),
    GET_SETTING_DATA: createGetSettingAction(moduleName, urlPrefix),
    GET_STRING_SETTING_VALUE: createGetStringSettingValueAction(moduleName, urlPrefix),
    GET_LONG_SETTING_VALUE: createGetLongSettingValueAction(moduleName, urlPrefix),
    CREATE_SETTINGS_DATA: createCreateSettingsAction(moduleName, urlPrefix),
    UPDATE_SETTINGS_DATA: createUpdateSettingsAction(moduleName, urlPrefix),
    DELETE_SETTINGS_DATA: createDeleteSettingsAction(moduleName, urlPrefix)
});