import api from '@/Common/Helpers/Api';
import store from '@/Store'
import {environment} from "../../../environment";

export default function setup() {

    const locale = localStorage.getItem("locale") || environment.locale.default
    let responseCodes = import(`../../Locales/backend/${locale}.json`).then(module => module.default);

    api.interceptors.request.use(function(config) {
        return config;
    }, function(err) {
        return Promise.reject(err);
    });

    api.interceptors.response.use(function (response) {
        return response.data.data;
    },  async function (error) {

        if(responseCodes[error.response.data.code]) {
            store.commit('notifications/ADD_NOTIFICATION', {text: responseCodes[error.response.data.code], type: error.response.data.status});
        } else {
            error.response.data.errors.map(function (value, key) {
                if(value !== '' && key === 0) store.commit('notifications/ADD_NOTIFICATION', {text: value.field + ': ' + value.message, type: error.response.data.status});
            });
        }

        return Promise.reject(error.response);
    });
}
