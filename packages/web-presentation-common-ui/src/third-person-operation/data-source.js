const NOP = () => {
};
export default class DataSource {
    constructor() {
        this.initData = NOP;
        this.listener = NOP;
        this.validation = NOP;
    }

    listen = (listener = NOP) => {
        this.listener = listener;
        return () => {
            this.listener = NOP
        }
    };

    changeValidation = validation => {
        this.validation = validation
    };

    setInitData = initData => {
        this.initData = initData
    };

    getInitData = () => this.initData;

    startValidation = (res, err) => () => {
        this.listener(res, err);
        return this.validation
    };
}
