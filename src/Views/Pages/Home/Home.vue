<template>
  <div id="homeComponent">
    <b-row>
      <b-col md="8">
        <b-row class="row">
          <Articles
              v-for="(stories, index) in articles"
              :key="index"
              :articles="stories"
              :index="index"
          >
          </Articles>
        </b-row>
        <b-row>
          <photos
              v-for="(photos, index) in photos"
              :key="index"
              :photo="photos"
          >
          </photos>
        </b-row>
          <b-row class="mt-4">
              <b-col class="col col-lg-6" :class="{ 'col-lg-12': !authenticated }">
                  <b-card no-body>
                      <template #header>
                          <CardHeader
                              :title="$t('home.badges.title')"
                              :subTitle="$t('home.badges.description')"
                              icon="badges">
                          </CardHeader>
                      </template>
                      <b-card-body>
                          <div class="d-flex justify-content-center flex-wrap">
                              <badges
                                  v-for="(name, badge) in badges"
                                  :badge="badge"
                                  :name="name"
                              >
                              </badges>
                          </div>
                      </b-card-body>
                  </b-card>
              </b-col>
              <b-col class="col col-lg-6" v-if="authenticated">
                  <b-card no-body>
                      <template #header>
                          <CardHeader
                              :title="$t('home.friends.title')"
                              :subTitle="$t('home.friends.description')"
                              icon="login">
                          </CardHeader>
                      </template>
                      <b-card-body>
                          <b-row>
                          <Friends
                                v-for="(friend, index) in friends"
                                :friend="friend"
                            >
                          </Friends>
                          </b-row>
                      </b-card-body>
                  </b-card>
              </b-col>
          </b-row>
      </b-col>
      <b-col md="4">
        <b-col class="mb-4">
            <b-card no-body>
                <template #header>
                    <CardHeader
                        :title="$t('home.rooms.title')"
                        :subTitle="$t('home.rooms.description')"
                        icon="rooms">
                    </CardHeader>
                </template>
                <b-card-body>
                    <rooms
                        v-for="(rooms, index) in rooms"
                        :rooms="rooms"
                        :index="index"
                    >
                    </rooms>
                </b-card-body>
            </b-card>
        </b-col>
        <b-col class="mb-4">
            <b-card no-body>
                <template #header>
                    <CardHeader
                        :title="$t('home.guilds.title')"
                        :subTitle="$t('home.guilds.description')"
                        icon="groups">
                    </CardHeader>
                </template>
                <b-card-body>
                    <Guilds
                        v-for="(guilds, index) in guilds"
                        :guilds="guilds"
                        :index="index"
                    >
                    </Guilds>
                </b-card-body>
            </b-card>
        </b-col>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import { BCol, BRow, BCardBody, BCard } from 'bootstrap-vue-3';
import {mapGetters} from 'vuex'

import Articles from '@/Components/Modules/Article/Articles.vue';
import Badges from '@/Components/Modules/Badge/Badges.vue';
import Photos from '@/Components/Modules/Photo/Photos.vue';
import Rooms from '@/Components/Modules/Room/Rooms.vue';
import Guilds from '@/Components/Modules/Guilds/Guilds.vue';
import Friends from '@/Components/Modules/Friends/Friends.vue';
import CardHeader from "@/Components/Card/CardHeader.vue";

export default {
    name: 'Home',

    components: {
        CardHeader,
        Articles,
        Badges,
        Photos,
        Rooms,
        Guilds,
        Friends,
        BCol,
        BRow,
        BCard,
        BCardBody
    },

    computed: {
        ...mapGetters({
            authenticated: 'auth/authenticated',
            articles: 'articles/articles',
            badges: 'badges/badges',
            photos: 'photos/photos',
            rooms: 'rooms/rooms',
            guilds: 'guilds/guilds',
            friends: 'friends/list'
        })
    },

    mounted() {
        this.$store.dispatch('articles/getArticles')
        this.$store.dispatch('photos/getPhotos')
        this.$store.dispatch('badges/getBadges')
        this.$store.dispatch('rooms/getRooms')
        this.$store.dispatch('guilds/getGuilds')
    },

    created() {
        if(this.authenticated) this.$store.dispatch('friends/getFriends')
    }
}
</script>
