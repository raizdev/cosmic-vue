import api from '@/Common/Helpers/Api';
import store from '@/Store'
import {environment} from "../../../environment";

export default function setup() {

    let responseCodes = import(`../../Locales/backend/${environment.locale.default}.json`).then(module => module.default);

    api.interceptors.request.use(function(config) {
        return config;
    }, function(err) {
        return Promise.reject(err);
    });

    api.interceptors.response.use(function (response) {
        return response.data.data;
    },  async function (error) {
        console.log(1234)
        if(responseCodes[error.response.data.code]) {
            store.commit('notifications/ADD_NOTIFICATION', {text: responseCodes[error.response.data.code], type: error.response.data.status});
        } else {
            error.response.data.errors.map(function (value, key) {
                if(value !== '' && key === 0) store.commit('notifications/ADD_NOTIFICATION', {text: value.message, type: error.response.data.status});
            });

        }

        return Promise.reject(error.response);
    });
}
