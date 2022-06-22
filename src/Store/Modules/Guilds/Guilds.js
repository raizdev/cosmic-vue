import api from "../../../Common/Helpers/Api";

export default {

    namespaced: true,

    state: {
        guilds: null
    },

    getters: {
        guilds(state) {
            return state.guilds
        },
    },

    mutations: {
        APPEND_GUILDS: (state, guilds) => {
            state.guilds = guilds
        }
    },

    actions: {
        async getGuilds ({ commit, dispatch }) {
            await api.get('guilds/list/1/4')
                .then((response) => {
                    commit('APPEND_GUILDS', response.data)
                });
        }
    }
}
