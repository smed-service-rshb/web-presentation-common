import {buildActions} from './actions'
import {buildPages} from './pages';
import withSettingsSupport from './withSettingsSupport'
import generatePageKey from './pages/page-keys';
import {SETTINGS_EDIT, SETTINGS_CREATE, SETTINGS_LIST} from './pages/page-keys';

export {withSettingsSupport}
export {generatePageKey}
export {SETTINGS_EDIT, SETTINGS_CREATE, SETTINGS_LIST}

export default (urlPrefix, moduleName) => args => {
    const {action, page} = args;

    const pages = buildPages(moduleName);

    Object.keys(pages).forEach(pageDescription => {
        page(pages[pageDescription]);
    });

    const actions = buildActions(moduleName, urlPrefix);

    Object.keys(actions).forEach(actionDescription => {
        action(actions[actionDescription]);
    });

    return args;
};