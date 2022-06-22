<template>
    <b-card
        no-body
        :img-src="this.article.image"
        img-alt="Image"
    >
        <b-card-body class="position-absolute text-white">
            <h5>{{ this.article.title }}</h5>
            <span>{{ this.article.description }}</span>
        </b-card-body>

        <template #header>
            <div class="float-lg-start">
                <img src="/src/assets/images/time.gif" />
                <span>23/09/2020 - 09:09</span>
            </div>
            <div class="float-lg-end" style="font-weight: 500" >
                <b-link href="#">{{ this.article.user.username }}</b-link>
            </div>
        </template>

        <b-card-body>
            <b-card-text v-html="this.article.content"></b-card-text>
        </b-card-body>
    </b-card>
</template>
<script>
import { BCard, BCardBody, BCardText } from 'bootstrap-vue-3';
import {environment} from "../../../../environment";

export default {
    props: ['article'],

    components: {
        BCard,
        BCardBody,
        BCardText
    },

    mounted() {
        document.title = `${environment.hotelName} - ${this.article.title}`
    }
}
</script>
<style>
.card-img-top {
    object-fit: cover !important;
    image-rendering: pixelated !important;
}

.card-header {
    border-radius: unset !important;
}

.card-footer {
    border-top: 0;
}
</style>

