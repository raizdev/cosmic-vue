<template>
    <div class="registerComponent">
        <b-row class="justify-content-center">
            <b-col md="10">
                <b-card no-body>
                    <template #header>
                        <CardHeader
                            :title="$t('auth.registration.header.text')"
                            :subTitle="$t('auth.registration.header.subtext')"
                        >
                        </CardHeader>
                    </template>
                </b-card>
            </b-col>
        </b-row>

        <b-row class="justify-content-md-center mt-4">
            <b-col md="5">
                <Form
                    @submit="onSubmit"
                >
                    <b-row>
                        <b-col md="12">
                            <b-card no-body>
                                <template #header>
                                    <CardHeader
                                        :title="$t('auth.registration.header.text-first')"
                                        :subTitle="$t('auth.registration.header.sub-first')"
                                        icon="icon-box-one"
                                    >
                                    </CardHeader>
                                </template>
                                <b-card-body>
                                    <TextInput
                                        placeholder="Username"
                                        name="username"
                                        rules="required|min:4|max:12|usernameTaken"
                                    />
                                    <TextInput
                                        name="mail"
                                        type="email"
                                        placeholder="E-mailadres"
                                        rules="required|email"
                                    />
                                </b-card-body>
                            </b-card>
                        </b-col>
                    </b-row>
                    <b-row class="mt-4">
                        <b-col md="12">
                            <b-card no-body>
                                <template #header>
                                    <CardHeader
                                        :title="$t('auth.registration.header.text-second')"
                                        :subTitle="$t('auth.registration.header.sub-second')"
                                        icon="icon-box-two"
                                    >
                                    </CardHeader>
                                </template>
                                <b-card-body>
                                    <TextInput
                                        name="password"
                                        type="password"
                                        placeholder="Password"
                                        autocomplete="on"
                                        rules="required|min:6"
                                    />
                                    <TextInput
                                        name="password_confirmation"
                                        type="password"
                                        placeholder="Password confirmation"
                                        autocomplete="on"
                                        rules="required|confirmed:@password"
                                    />
                                </b-card-body>
                            </b-card>
                        </b-col>
                    </b-row>
                    <b-row class="mt-4">
                        <b-col md="12">
                            <b-card no-body>
                                <template #header>
                                    <CardHeader
                                        :title="$t('auth.registration.header.text-third')"
                                        :subTitle="$t('auth.registration.header.sub-third')"
                                        icon="icon-box-three"
                                    >
                                    </CardHeader>
                                </template>
                                <b-card-body>
                                    <div class="d-flex justify-content-center">
                                        <div class="d-flex  gender-selector">
                                            <b-row>
                                                <b-link href="#" v-bind="user.gender" @click="changeGender('M')" class="male">
                                                    <div class="male-icon" :class="{active:user.sex === 'M'}"></div>
                                                </b-link>
                                                <b-link href="#" v-bind="user.gender" @click="changeGender('F')" class="female">
                                                    <div class="female-icon" :class="{active:user.sex === 'F'}"></div>
                                                </b-link>
                                            </b-row>
                                        </div>
                                        <b-row>
                                            <div class="d-flex avatar-selector">
                                                <div class="pl-5 gender-head" v-for="(item, index) in looks" :key="index" @click="changeAvatar(item)">
                                                    <Avatar class="looks" :class="{active:item === user.look}" :figure="item" :head-only="1" :head-direction="2" />
                                                </div>
                                            </div>
                                        </b-row>
                                    </div>
                                    <Field v-model="user.look" type="text" name="look" v-slot="{ field }">
                                        <input v-bind="field" type="hidden">
                                    </Field>

                                    <Field v-model="user.sex" type="text" name="gender" v-slot="{ field }">
                                        <input v-bind="field" type="hidden">
                                    </Field>
                                </b-card-body>
                                <b-card-footer class="p-0 m-0">
                                    <b-button variant="success" class="w-100" type="submit">{{ $t('auth.registration.submit') }}</b-button>
                                </b-card-footer>
                            </b-card>
                        </b-col>
                    </b-row>
                </Form>
            </b-col>

            <b-col md="5">
                <b-row>
                    <b-col md="12">
                        <b-card no-body>
                            <template #header>
                                <CardHeader
                                    :title="$t('auth.registration.info.title')"
                                    :subTitle="$t('auth.registration.info.subtitle')"
                                >
                                </CardHeader>
                            </template>
                            <b-card-body>
                                <div style="float: left">
                                    <img src="https://images.habbo.com/c_images/HabboWay/habboway_2a.png">
                                </div>
                                <p v-html="$t('auth.registration.info.content')"></p>
                            </b-card-body>
                        </b-card>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import { BCol, BRow, BCard, BCardBody, BForm, BFormInput, BFormInvalidFeedback,
    BFormValidFeedback, BFormGroup, BLink, BButton, BCardFooter } from 'bootstrap-vue-3';

import { Form, Field, defineRule } from 'vee-validate';
import { required, email, min, confirmed } from '@vee-validate/rules';
import { usernameTaken } from "../../../Common/Helpers/Validator/Rules";

import { mapActions } from "vuex";

import TextInput from "../../../Components/Input/TextInput.vue";
import SelectInput from "../../../Components/Input/SelectInput.vue";
import CardHeader from '../../../Components/Card/CardHeader.vue'
import Avatar from "../../../Components/Avatar/Avatar.vue";

defineRule('required', required);
defineRule('email', email);
defineRule('min', min);
defineRule('confirmed', confirmed);
usernameTaken()

export default {
    name: "App",

    components: {
        Avatar,
        SelectInput,
        BRow,
        BCol,
        BCard,
        CardHeader,
        BCardBody,
        BForm,
        BFormInput,
        BFormInvalidFeedback,
        BFormValidFeedback,
        BFormGroup,
        BCardFooter,
        Field,
        Form,
        TextInput,
        BLink,
        BButton
    },

    data: () => ({
        looks: [],
        genders: [
            { value: 'M', text: 'Boys', 'gender': 'boys' },
            { value: 'F', text: 'Girls', 'gender': 'girls' }
        ],
        user: {
            sex: '',
            look: ''
        }
    }),

    methods: {
        ...mapActions({
            register: 'auth/register',
            look: 'looks/getLooks',
            userAvailability: 'auth/userAvailability'
        }),

        changeAvatar(item) {
            if(this.user.look === item) {
                return
            }

            this.user.look = item
        },

        changeGender: function(value) {
            const gender = this.genders.filter((s => s.value === value))[0]

            this.look(gender).then(response => {
                this.user.sex = value
                this.looks = response
            })
        },

        onSubmit: function (values) {
            this.register(values).then(() => {
                this.$router.replace({
                    name: 'home'
                })
            })
        },

        usernameTaken
    },

    mounted() {
        this.changeGender('M');
    },
    computed: {

    }
};
</script>
<style>
.female-icon {
    background: url('@/assets/images/web/pages/registration/sex-female-off.png');
    height: 28px;
    width: 18px;
}

.female > .active {
    background: url('@/assets/images/web/pages/registration/sex-female.png') !important;
}

.male-icon {
    background: url('@/assets/images/web/pages/registration/sex-male-off.png');
    height: 21px;
    width: 21px;
}

.male > .active {
    background: url('@/assets/images/web/pages/registration/sex-male.png') !important;
}

.avatar-selector .gender-head {
    background: url('@/assets/images/web/pages/registration/background-figure-default.png') no-repeat;
}

.avatar-selector .gender-head > .active {
    background: url('@/assets/images/web/pages/registration/background-figure-selected.png') no-repeat !important;
}
</style>
