<template>
    <div id="client-loader" v-bind:class="classObject">
        <div id="hotel-container">

            <iframe v-if="ticket !== null" id="game" :src="url + '/?sso=' + ticket" />

            <div class="client-buttons">
                <button class="client-close rounded-button blue plain" @click="hideClient">
                    <font-awesome-icon icon="backspace" class="client-icon f"></font-awesome-icon>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { environment } from "../../../../environment"

export default {
    name: "Client",

    props: ['route'],

    data() {
        return {
            ticket: null,
            isSessionActive: false,
            url: environment.nitro.url
        }
    },

    computed: {
        ...mapGetters({
            user: 'auth/user',
            client: 'client/loaded',
            active: 'client/active',
            photo: 'photos/photos'
        }),

        classObject: function () {
            return {
                'hotel-visible': this.client
                }
            }
        },

    methods: {
        ...mapActions({
            setClient: 'client/setClient',
            setActive: 'client/setActive',
            setTicket: 'client/setTicket',
            setPhotos: 'photos/getPhotos'
        }),

        hideClient: function () {
            this.setClient(!this.client);
        },

        getTicket: function () {
            return this.setTicket().then(response => {
                this.ticket = response.ticket
            })
        },

        initialize: function () {
            this.isSessionActive = this.user.online === 1;

            if (!this.isSessionActive) {
                this.loadClient()
            }
        },

        loadClient: function () {
            if (this.active) {
                return;
            }

            this.getTicket().then(() => {
                this.setActive(true)
            })
        }
    },

    watch:{
        $route (){
            if(this.$route.name === "hotel") {
                this.initialize();
            }
        }
    }
}
</script>
