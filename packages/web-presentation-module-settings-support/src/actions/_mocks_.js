import {CRUDService, mockRoute} from '@efr/medservice-web-presentation-utils-mock';

const identify = key => record => record.key === key;


const createModuleMock = (urlPrefix, settingsList) => {

    const settingsService = new CRUDService(settingsList, identify);

    const GET_SETTINGS_LIST = ({success}) => {
        success(
            {
                "content": settingsService.getRecords(),
            })
    };

    const GET_SETTINGS_DATA = ({success, request, error}) => {
        let item = settingsService.getRecord(request.params.key);
        item && success(item);
        !item && error(404);
    };

    const GET_SETTINGS_VALUE = ({success, request, error}) => {
        let item = settingsService.getRecord(request.params.key);
        item && success({value: item.value});
        !item && error(404);
    };

    const CREATE_SETTINGS_DATA = ({success, request, error}) => {
        let record = settingsService.createRecord(request.body);
        record && success();
        !record && error(404);
    };

    const UPDATE_SETTINGS_DATA = ({success, request, error}) => {
        let record = settingsService.updateRecord(request.body.key, request.body);
        record && success();
        !record && error(404);
    };

    const DELETE_SETTINGS_DATA = ({success, request, error}) => {
        let record = settingsService.deleteRecord(request.params.key);
        record && success();
        !record && error(404);
    };

    return [
        mockRoute.get(`${urlPrefix}/settings`, GET_SETTINGS_LIST),
        mockRoute.get(`${urlPrefix}/settings/:key`, GET_SETTINGS_DATA),
        mockRoute.get(`${urlPrefix}/settings/:key/value`, GET_SETTINGS_VALUE),
        mockRoute.post(`${urlPrefix}/settings`, CREATE_SETTINGS_DATA),
        mockRoute.put(`${urlPrefix}/settings/:key`, UPDATE_SETTINGS_DATA),
        mockRoute.delete(`${urlPrefix}/settings/:key`, DELETE_SETTINGS_DATA)
    ]

}
export default createModuleMock