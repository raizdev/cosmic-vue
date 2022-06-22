<template>
    <b-form-group id="example-input-group-1" :label="label" label-for="example-input-1">
        <b-form-input
            :name="name"
            :id="name"
            :type="type"
            :value="inputValue"
            :placeholder="placeholder"
            :autocomplete="autocomplete"
            @input="handleChange"
            @blur="handleBlur"
            :class="{ 'is-invalid': !!errorMessage, 'is-valid': meta.valid }"
            :aria-describedby="`errorHandler-${name}`"
        ></b-form-input>
        <b-form-invalid-feedback
            :id="`errorHandler-${name}`" v-show="errorMessage || meta.valid"
        >{{ errorMessage || successMessage }}
        </b-form-invalid-feedback>
    </b-form-group>
</template>

<script>
import { toRef } from "vue";
import { useField } from "vee-validate";
import { BFormInvalidFeedback, BFormInput, BFormGroup } from "bootstrap-vue-3";

export default {
    props: {
        type: {
            type: String,
            default: "text",
        },
        value: {
            type: String,
            default: "",
        },
        name: {
            type: String,
            required: true,
        },
        label: {
            type: String,
            required: false,
        },
        successMessage: {
            type: String,
            default: "",
        },
        placeholder: {
            type: String,
            default: "",
        },
        autocomplete: {
            type: String,
            default: "off"
        }
    },

    components: {
        BFormGroup,
        BFormInput,
        BFormInvalidFeedback
    },

    setup(props) {
        const name = toRef(props, "name");

        const {
            value: inputValue,
            errorMessage,
            handleBlur,
            handleChange,
            meta,
        } = useField(name, undefined, {
            initialValue: props.value,
        });

        return {
            handleChange,
            handleBlur,
            errorMessage,
            inputValue,
            meta,
        };
    },
};
</script>
