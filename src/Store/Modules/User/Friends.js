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
        getFriends: async function ({commit, dispatch}) {
            await api.get('friends/list/1/10')
                .then((response) => {
                    commit('APPEND_LIST', response.data)
                });
        }
    }
}
