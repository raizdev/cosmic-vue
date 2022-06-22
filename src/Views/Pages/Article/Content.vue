<template>
  <div class="articleComponent">
    <b-row>
      <b-col md="8">
        <b-row>
          <b-col md="12">
              <Content
                  v-if="article"
                  :article="article"
              ></Content>
          </b-col>
        </b-row>
      </b-col>
      <b-col md="4">
        <Comments
            v-if="comments"
            :comments="comments"
        ></Comments>
        <b-col>
            <b-card no-body>
                <b-card-body class="p-0 m-0 bottom-0">
                    <textarea class="p-2 w-100 border-0" style="height:100px" v-model="articleComment" :placeholder="$t('article.comments.textbox')"></textarea>
                </b-card-body>
                <b-card-footer class="p-0 m-0">
                    <b-button variant="success" class="w-100" @click="submitReaction">{{ $t('article.comments.react') }}</b-button>
                </b-card-footer>
            </b-card>
        </b-col>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { BCard, BCol, BRow, BCardBody, BCardFooter, BButton } from 'bootstrap-vue-3';
import Content from '@/Components/Modules/Article/Content.vue';
import Comments from '@/Components/Modules/Article/Comments.vue';

import { mapGetters, mapActions } from "vuex";

export default {
    data() {
        return {
            comment: {
                id: this.$route.params.id,
                page: 1,
                offset: 8
            },
            articleComment: ''
        }
    },

    components: {
        Content,
        Comments,
        BCard,
        BCol,
        BRow,
        BCardBody,
        BCardFooter,
        BButton
    },

    methods: {
        ...mapActions({
            storeComment: 'articles/storeComment'
        }),

        submitReaction() {
            const form_data = { content: this.articleComment, article_id: this.article.id }

            this.storeComment(form_data).then(() => {
                this.getComments()
            })
        },

        getComments() {
            this.$store.dispatch('articles/getComments', this.comment);
        }
    },

    computed: {
        ...mapGetters({
            authenticated: 'auth/authenticated',
            article: 'articles/article',
            comments: 'articles/comments'
        })
    },

    mounted() {
        this.getComments()
        this.$store.dispatch('articles/getArticle', this.$route.params.slug);
    }
}
</script>

