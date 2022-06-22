<template>
  <header class="header-container">
    <div class="container h-100">
      <div class="row h-100 align-items-center">
        <div class="header-card">
          <div class="header-inner-card">
            <div class="information">
              <img class="inline-block" src="https://habbofont.net/font/windows_jungle/habbo.gif" alt="Logo">
              <div class="online-user">
                <span class="count">{{ online }}</span>&nbsp; {{ $t('header.online') }}
              </div>
            </div>
            <div class="habbo-button">
              <div class="enter-hotel">
                <div class="inner">
                    <span v-if="authenticated" @click="toggleClientLoader" v-t="'header.button.loggedIn'"></span>
                    <router-link :to="{ name: 'signup' }"  v-else v-t="'header.button.notLoggedIn'"></router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import {mapActions, mapGetters} from 'vuex';

export default {

    computed: {
        ...mapGetters({
            authenticated: 'auth/authenticated',
            user: 'auth/user',
            online: 'client/online'
        })
    },

    methods: {
        ...mapActions({
            setClient: 'client/setClient'
        }),

        toggleClientLoader() {
            this.setClient(!this.client)
            this.emitter.emit('loadClient');
        }
    },

    mounted() {
        this.$store.dispatch('client/getOnline')
    }
}
</script>

<style scoped>

</style>
