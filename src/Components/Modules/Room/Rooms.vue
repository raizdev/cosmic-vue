<template>
    <div class="d-flex mb-4">
        <div class="room-image"></div>
        <div class="d-flex" style="flex-direction: column">
            <div class="room-title"><a href="#">{{ this.rooms.name }}</a></div>
            <div class="room-description">{{ this.rooms.description }}</div>

            <div class="room-owner d-flex">
                <span class="head-figure">
                    <Avatar :figure="this.rooms.user.look" size="s" :direction="2" :head-direction="2" :head-only="1"/>
                </span>
                <p class="room-owner-username">{{ this.rooms.user.username }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import {environment} from "../../../../environment"
import Avatar from "../../Avatar/Avatar.vue";

export default {
    props: ['rooms'],

    components: {
        Avatar
    },

    data() {
        return {
            nitro: environment.nitro,
            imaging: environment.imaging
        }
    },
}
</script>
<style>
.room-image {
    background: url(/src/assets/images/web/collider/default-room-image.png) center;
    border-radius: 5px;
    margin: 0 20px 0 0;
    height: 50px;
    width: 50px;
}

.head-figure {
    background-position: center;
    background-repeat: no-repeat;
    background-color: #f0f0f0;
    border-radius: 100px;
    height: 42px;
    width: 42px;
    padding: 6px;
}

.room-owner-username {
    background-color: #f0f0f0;
    color: #2C3039;
    font-size: 12px;
    font-weight: 500;
    margin: 6px 0 0 -8px;
    padding: 6px 10px 5px 6px;
    border-radius: 3px;
    height: 28px;
}

.room-title {
    font-size: 13px;
    font-weight: 500;
}
</style>
