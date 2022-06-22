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
        getTopUsers: async function ({commit, dispatch}) {
            await api.get('/hall-of-fame/top-users')
                .then((response) => {
                    console.log(response)
                    commit('APPEND_LIST', response)
                });
        }
    }
}
