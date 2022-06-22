import api from "@/Common/Helpers/Api";
import { environment } from "../../../../environment";

export default {
    namespaced: true,

    state: {
        token: localStorage.getItem('token') || '',
        user: {}
    },

    getters: {
        authenticated(state) {
            return state.token && state.user;
        },

        user(state) {
            return state.user;
        }
    },

    mutations: {
        SET_TOKEN(state, token) {
            state.token = token;
        },
        SET_USER(state, user) {
            state.user = user;
        },
        ADD_USER_DATA: (state, data) => {
            Object.keys(data).forEach(key => {
                Vue.set(state.user, key, data[key])
            })
        }
    },

    actions: {
        async signIn({dispatch}, credentials) {
            let response = await api.post('auth/login', credentials);
            return dispatch('attempt', response.token)
        },

        async register({dispatch}, form) {
            let response = await api.post('auth/register', form);
            return dispatch('attempt', response.token)
        },

        async attempt({commit, state, dispatch}, token) {

            if (token) {
                commit('SET_TOKEN', token)
            }

            if (!state.token) {
                return
            }

            try {
                let response = await api.get('user');

                response.currencies.forEach((item) => {
                    item.name = Object.keys(environment.currencies).filter(k => environment.currencies[k] === item.type).toString()
                })

                dispatch('votes/total', null, {root:true})
                commit('SET_USER', response)
            } catch (e) {
                console.log(e)
            }
        },

        signOut({commit}) {
            return api.post('auth/logout').then(() => {
                commit('SET_TOKEN', null)
                commit('SET_USER', null)
            })
        },

        userAvailability({commit}, form) {
            return api.post('user/availability', form).then((response) => {
                return response
            })
        }
    }
}
