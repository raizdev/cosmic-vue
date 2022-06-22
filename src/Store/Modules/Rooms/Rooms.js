import api from "../../../Common/Helpers/Api";

export default {

    namespaced: true,

    state: {
        rooms: null
    },

    getters: {
        rooms(state) {
            return state.rooms
        }
    },

    mutations: {
        APPEND_ROOMS: (state, photos) => {
            state.rooms = photos
        }
    },

    actions: {
        async getRooms ({ commit, dispatch }) {
            await api.get('rooms/list/1/4')
                .then((response) => {
                    commit('APPEND_ROOMS', response.data)
                });
        }
    }
}
