import AxiosRest from 'axios';

class ConfigAxios {
    constructor(header = {}) {
        this.Axios = AxiosRest.create({
            baseURL: process.env.REACT_APP_API_MOCK,
            headers: {
                'Content-Type': (header.contentType) ? header.contentType : 'application/json'
            }
        })
    }
}

export default ConfigAxios;