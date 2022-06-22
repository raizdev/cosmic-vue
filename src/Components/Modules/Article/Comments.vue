<template>
    <b-col class="mb-4">
        <b-card no-body>
            <template #header>
                <CardHeader :title="$t('article.comments.title')"></CardHeader>
            </template>
            <b-card-body class="oddeven m-0 p-0" v-for="comment in this.comments">
                <div class="author">
                    <div class="avatar">
                        <Avatar class="mt-4" :figure="comment.user.look" size="m" :direction="2" :head-direction="2" :head-only="0"/>
                    </div>
                    <div class="info">
                        <span class="username">
                            <a :href="`/user/${comment.user.username}`">{{ comment.user.username }}</a>
                        </span>
                        <span v-html="comment.content"></span>
                    </div>
                </div>
            </b-card-body>
        </b-card>
    </b-col>
</template>

<script>
import {environment} from "../../../../environment";
import { BCol, BRow, BCard, BCardBody } from "bootstrap-vue-3";
import CardHeader from "../../Card/CardHeader.vue";
import Avatar from "../../Avatar/Avatar.vue";

export default {
    props: ['comments'],

    components: {
        Avatar,
        BCol,
        BRow,
        BCard,
        BCardBody,
        CardHeader
    },

    data() {
      return {
          imaging: environment.imaging
      }
    }
}
</script>
