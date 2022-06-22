<template>
  <nav class="navbar navbar-header fixed-top navbar-expand-lg navbar-light bg-light">
    <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <div class="container navigation">
        <div class="d-flex flex-wrap align-items-center" style="height: 60px;">
          <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li><router-link :to="{ name: 'home' }" class="nav-link selected px-2 link-secondary">Home</router-link></li>
            <div class="dropdown">
              <span type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" >
                <router-link :to="{ name: 'home' }" class="nav-link px-2 link-secondary dropdown-toggle">Community</router-link>
              </span>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <router-link :to="{ name: 'staff' }" class="dropdown-item">Staff</router-link>
                  <router-link :to="{ name: 'highscores' }" class="dropdown-item">Highscores</router-link>
              </ul>
            </div>
          </ul>

          <div class="navbar-currencies d-flex" v-if="authenticated">
            <div class="user-bar" data-type="credits">
              <div class="icon credits"></div>
              <div class="item-column">
                <div class="item-text amount bold">{{ user.credits }}</div>
                <div class="item-text">{{ $t('navigation.credits') }}</div>
              </div>
            </div>
            <div class="user-bar" v-for="currency in user.currencies" :key="currency.name">
              <div class="icon" :class="currency.name"></div>
              <div class="item-column">
                <div class="item-text amount bold">{{ currency.amount }}</div>
                <div class="item-text">{{ currency.name }}</div>
              </div>
            </div>
          </div>

          <div class="login-button" v-if="!authenticated">
              <b-button variant="light" ref="loginButton" @click="loginModal">Login</b-button>
          </div>

          <div class="login-button" v-if="authenticated">
              <b-button variant="light" ref="loginButton" @click="signOutAction">Logout</b-button>
          </div>

          <LanguageSwitcher/>

          <Modal ref="login"
                 :title="$t('auth.login.title')"
                 :subTitle="$t('auth.login.description')"
                 :saveButton="true"
                 :buttonTitle="$t('auth.login.buttonTitle')"
                 icon="login"
          >
            <template v-slot:body>
              <div class="card-content">
                  <b-row class="my-3">
                      <b-input-group>
                          <b-input-group-text>
                              <BIconPerson/>
                          </b-input-group-text>
                          <b-form-input type="text" v-model="form.username" placeholder="Username"></b-form-input>
                      </b-input-group>
                      </b-row>
                      <b-row class="my-1">
                        <b-input-group>
                            <b-input-group-text>
                                <BIconShieldLock/>
                            </b-input-group-text>
                            <b-form-input type="password" v-model="form.password" placeholder="Password"></b-form-input>
                        </b-input-group>
                  </b-row>
                </div>
            </template>
          </Modal>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
import LanguageSwitcher from '@/Components/LanguageSwitcher/LanguageSwitcher.vue';
import Modal from '@/Components/Modal/Modal.vue';
import { mapActions, mapGetters } from "vuex";
import { BButton, BInputGroup, BFormInput, BInputGroupText } from "bootstrap-vue-3";
import { BIconPerson, BIconShieldLock } from 'bootstrap-icons-vue';

export default {

  data() {
      return {
          form: {
              username: '',
              password: ''
          }
      }
  },

  components: {
      LanguageSwitcher,
      Modal,
      BButton,
      BInputGroup,
      BFormInput,
      BInputGroupText,
      BIconPerson,
      BIconShieldLock
  },

  computed: {
    ...mapGetters({
      authenticated: 'auth/authenticated',
      user: 'auth/user'
    })
  },

  methods: {
    loginModal() {
      this.$refs.login.openClose()
    },

    signOut () {
      this.signOutAction().then(() => {
        this.$router.push('/')
      })
    },

    ...mapActions({
      signIn: 'auth/signIn',
      signOutAction: 'auth/signOut'
    }),
  },

  created() {
    this.emitter.on('saveModal', () => {
      this.signIn(this.form).then(() => {
        this.$refs.login.openClose()
        this.$router.replace({
          name: 'home'
        })
      })
    })
  }
}
</script>
