import api from "../../../Common/Helpers/Api";

export default {

    namespaced: true,

    state: {
        list: null
    },

    getters: {
        list(state) {
            return state.list
        }
    },

    mutations: {
        APPEND_LIST: (state, list) => {
            state.list = list
        }
    },


    actions: {
        getStafflist: async function ({commit, dispatch}) {
            await api.get('/permissions/list')
                .then((response) => {
                    console.log(response)
                    commit('APPEND_LIST', response)
                });
        }
    }
}
