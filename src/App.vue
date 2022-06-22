<template>

  <Notifications/>
  <Navigation/>
  <Header/>

  <div class="content-bar"></div>

  <main class="container content-container">
      <router-view  v-slot="{ Component }">
        <transition name="fade" mode="out-in">
            <component :is="Component"></component>
        </transition>
      </router-view>
  </main>

  <Client/>
</template>

<script>
import Navigation from '@/Views/Layout/Navigation.vue'
import Header from '@/Views/Layout/Header.vue'
import Footer from '@/Views/Layout/Footer.vue'
import Notifications from '@/Components/Notification/notifications.vue'
import Client from '@/Components/Modules/Client/Iframe.vue';

import {mapGetters} from 'vuex';

export default {

  components: {
    Navigation,
    Header,
    Footer,
    Notifications,
    Client
  },

  computed: {
    ...mapGetters({
      notifications: 'notifications/list'
    })
  },
}
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.50s ease;
}

.fade-enter-from,
.fade-leave-active {
  opacity: 0;
}
</style>
