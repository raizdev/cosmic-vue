<template>
    <div class="row">
        <div class="col-md-4 mb-4" v-for="(topUsers, title) in list">
            <div class="card">
                <div class="card-header">
                    <div class="card-header-title-container">
                        <div class="card-header-title" v-t="'community.highscores.most_' + title"></div>
                    </div>
                </div>

                <div class="card-content no-spacing">
                    <div class="highscore-row">
                        <div class="justify-between top-users-item no-spacing ng-star-inserted highscore" v-for="(user, index) in topUsers">
                            <span class="ranking-item-nth">1</span>
                            <div class="self-baseline">
                                <Avatar :figure="user.user.look" :direction="3" :head-direction="3"/>
                            </div>
                            <a href="#">{{ user.user.username }}</a>
                            <span class="amount">
                                <i class="icon-diamonds"></i> {{ user.amount }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import {environment} from '../../../../environment';
import Avatar from '../../../Components/Avatar/Avatar.vue'

export default {
    name: 'Highscores',

    components: {
        Avatar
    },

    data() {
        return {
            imaging: environment.imaging
        }
    },


    computed: {
        ...mapGetters({
            list: 'hallOfFame/list'
        })
    },

    created() {
        this.$store.dispatch('hallOfFame/getTopUsers');
    }
}
</script>
