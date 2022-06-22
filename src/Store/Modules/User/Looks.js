import api from "../../../Common/Helpers/Api";

export default {

    namespaced: true,

    state: {
        looks: null
    },

    actions: {
        async getLooks ({}, value ) {
            return await api.get('auth/looks', {})
                .then((response) => {
                    return response.looks[value.gender];
                });
        }
    }
}
