import api from "../../../Common/Helpers/Api";

export default {

    namespaced: true,

    state: {
        badges: null
    },

    getters: {
        badges(state) {
            return state.badges
        }
    },

    mutations: {
        APPEND_NEW_BADGES: (state, badges) => {
            state.badges = badges
        },

    },


    actions: {
        getBadges: async function ({commit, dispatch}) {
            await api.get('badges/list/11')
                .then((response) => {
                    dispatch('loader/change', 'getHotelBadges', {root:true})
                    commit('APPEND_NEW_BADGES', response)
                });
        },
    }
}
