<template>

    <b-col md="6">
        <router-link :to="'/articles/' + this.articles.id + '/' + this.articles.slug" class="opacity-1">
    <b-card
        no-body
        :img-src="this.articles.image"
        img-alt="Image"
    >
        <b-card-body class="position-absolute text-white">
            <h5>{{ this.articles.title }}</h5>
            <span>{{ this.articles.description }}</span>
        </b-card-body>

        <template #header>
            <div class="float-lg-start">
                <img src="/src/assets/images/time.gif" />
                <span>23/09/2020 - 09:09</span>
            </div>
            <div class="float-lg-end" style="font-weight: 500" >
                <b-link href="#">{{ this.articles.user.username }}</b-link>
            </div>
        </template>
    </b-card>
        </router-link>
    </b-col>
</template>

<script>
import { BCardGroup, BCard, BCol, BRow, BCardText, BLink } from 'bootstrap-vue-3';

export default {
    props: ['articles'],

    components: {
        BCol,
        BCard,
        BRow,
        BCardGroup,
        BCardText,
        BLink
    }
}
</script>
<style>
.card-img{
    object-fit: none;
    height: 120px
}

.card-subtitle {
    color: #fff !important;
    font-weight: normal;
    font-size: 13px;
}

.card-header {
    color: #000;
}

.card-title {
    font-size: 16px;
}

</style>
