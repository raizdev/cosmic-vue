import api from "../../../Common/Helpers/Api";

export default {

    namespaced: true,

    state: {
        photos: null
    },

    getters: {
        photos(state) {
            return state.photos
        },
    },

    mutations: {
        APPEND_PHOTOS: (state, photos) => {
            state.photos = photos
        }
    },

    actions: {
        async getPhotos ({ commit, dispatch }) {
            await api.get('photos/list/1/10')
                .then((response) => {
                    commit('APPEND_PHOTOS', response.data)
                });
        }
    }
}
