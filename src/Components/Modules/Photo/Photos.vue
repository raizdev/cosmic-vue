<template>
  <div class="col col-md-3">
    <div class="photo-content">
      <div class="inner-photo" v-bind:style="{ backgroundImage: 'url(' + this.photo.url + ')' }" style="background-position: center;">
        <div class="bottom-bar">
          <div class="d-flex p-2">
            <div class="ml-auto m-auto">
              <span class="mr-3 font-weight-bold" @click="votePhoto('likes')">
                  <BIconHandThumbsUp :style="{color: voted(1)}" class="mr-2"></BIconHandThumbsUp>
                  {{ this.photo.likes }}
              </span>
            </div>
            <div class="ml-auto m-auto">
              <span class="mr-3 font-weight-bold" @click="votePhoto('dislikes')">
                  <BIconHandThumbsDown :style="{color: voted(0)}" class="mr-2"></BIconHandThumbsDown>
                  {{ this.photo.dislikes }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import { BIconHandThumbsUp, BIconHandThumbsDown } from 'bootstrap-icons-vue';

export default {

    props: ['photo'],

    components: {
        BIconHandThumbsUp,
        BIconHandThumbsDown
    },

    computed: {
        ...mapGetters({
            authenticated: 'auth/authenticated',
            EntityType: 'votes/EntityType',
            VoteType: 'votes/VoteType',
            exists: 'votes/exists',
        }),
    },

    methods: {

        ...mapActions({
            setVote: 'votes/create'
        }),

        voted(type) {
            if(this.authenticated) {
                const voteColor = type === 1 ? 'green' : 'red'
            return this.exists(this.photo.id, type) ? voteColor : 'black'
            }
        },

        votePhoto (vote) {

            const form_data = {
                entity_id: this.photo.id,
                vote_entity: this.EntityType.photo_vote_entity,
                vote_type: this.VoteType[vote]
            }

            this.setVote(form_data).then(() => {
                this.photo[vote] = this.photo[vote] + 1
            })
        }
    }
}
</script>
