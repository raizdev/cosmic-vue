<template>
    <div id="staffComponent">
        <div v-for="(rank) in list">
        <div class="row">
            <div class="rank col-md-12" v-if="rank.users">
                <div class="card">
                    <div class="card-header card-header-right-image moving">
                        <div class="card-header-title-container ng-star-inserted">
                            <div class="background-gray card-header-icon-container">
                                <img :src="`${nitro.url}${nitro.badges}${rank.badge}.gif`">
                            </div>
                            <div class="card-header-titles ng-star-inserted">
                                <div class="card-header-title mt-2">
                                    <h5>{{ rank.rank_name }}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-4 mt-4" v-for="(user) in rank.users">
                <div class="card">
                    <div class="card-content no-spacing">
                        <div class="staffUser d-flex justify-content-between align-content-center">
                            <div class="align-content-center d-flex">
                                <div class="avatar">
                                    <img alt="Photo avatar" class="avatar avatar-m" :src="`${imaging}?figure=${user.look}&amp;head_direction=3&amp;direction=2&amp;crr=3&amp;gesture=sml&amp;size=m&amp;headonly=0`">
                                </div>
                                <div class="information d-flex flex-column">
                                    <span class="username">{{ user.username }}</span>
                                    <span>{{ rank.rank_name }}</span>
                                </div>
                            </div>
                            <div class="d-flex">
                                <i class="icon-{% if user.online == 1 %}online{% else %}offline{% endif %}"></i>
                            </div>
                        </div>
                        <div class="staffMotto">
                            {{ user.motto }}
                        </div>
                        <div class="badges d-flex align-content-center">
                            <div class="badge" v-for="(badge, index) in user.badges" :key="index">
                                <img :src="`${nitro.url}${nitro.badges}${badge.badge_code}.gif`">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import {environment} from "../../../../environment";

export default {
    name: 'Staff',

    data() {
        return {
            imaging: environment.imaging,
            nitro: environment.nitro
        }
    },

    computed: {
        ...mapGetters({
            list: 'permissions/list'
        })
    },

    created() {
        this.$store.dispatch('permissions/getStafflist');
    }
}
</script>
