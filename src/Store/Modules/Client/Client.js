import router from '../../../Router'
import api from "../../../Common/Helpers/Api";

export default {

    namespaced: true,

    state: {
        clientLoaded: false,
        lastUrl: null,
        pageActive: false,
        online: null
    },

    getters: {
        loaded(state) {
            return state.clientLoaded;
        },
        active(state) {
            return state.pageActive;
        },
        online(state) {
            return state.online
        }
    },

    mutations: {
        APPEND_CHANGE_LOADED: (state, loaded) => state.clientLoaded = loaded,
        APPEND_CHANGE_URL: (state, url) => state.lastUrl = url,
        APPEND_PAGE_ACTIVE: (state, url) => state.pageActive = url,
        APPEND_ONLINE_USERS: (state, users) => state.online = users,
    },

    actions: {
        setClient ({ commit, state }, action) {

            commit('APPEND_CHANGE_LOADED', action)
            commit('APPEND_CHANGE_URL', router.currentRoute.name)

            if(state.clientLoaded) {
                router.replace({name: "hotel"})
            } else {
                if(state.lastUrl === undefined) state.lastUrl = "home"
                router.replace({name: state.lastUrl})
            }
        },

        setActive ({ commit  }, action) {
            commit('APPEND_PAGE_ACTIVE', action)
        },

        async setTicket ({} ) {
            return await api.put('auth/ticket')
                .then((response) => {
                    return response;
                });
        },

        async getOnline ({ commit }) {
            return await api.get('user/online')
                .then((response) => {
                    commit('APPEND_ONLINE_USERS', response.count)
                })
        }
    }
}
