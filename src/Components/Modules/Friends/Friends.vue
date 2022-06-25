<template>
    <b-col md="6" >
        <div class="friends">
            <Avatar :figure="friend.look" class="mannequin" :class="{offline: friend.online === '0'}" size="m" :direction="2" :head-direction="2" :head-only="0"/>
            <div class="d-inline-flex flex-column">
                <span class="username mb-0">{{ friend.username }}</span>
                <span class="motto">{{ friend.motto }}</span>
            </div>
        </div>
    </b-col>
</template>
<script>
import { BCol } from 'bootstrap-vue-3';
import Avatar from "../../Avatar/Avatar.vue";


export default {
    props: ['friend'],

    components: {
        BCol,
        Avatar
    },

    created() {
        console.log(this.friend)
    }
}
</script>
<style>
.friends {
    background-color: rgb(229 229 229);
    border: unset;
    height: 4.5rem;
    border-radius: 4px;
    transition: 0.25s opacity;
}

.mannequin {
    object-fit: cover;
    width: 4rem;
    position: relative;
    -webkit-clip-path: inset(0 0 20% 0);
    clip-path: inset(0 0 20% 0);
    transition: 0.35s all;
    height: 5.6rem;
}

.friends .offline {
    opacity: 0.5;
}

.friends .offline:hover,
.friends .online:hover
{
    opacity: 1;
}

.username {
    font-size: 0.8rem;
    font-weight: 600;
    width: 5rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    color: #282828 !important;
}

.motto {
    width: 5rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-size: 0.71rem;
    font-weight: 300;
}
</style>
