<template>
    <img alt="User avatar" :class="forwardClass" class="avatar avatar-m" v-bind:src="`${imaging}?figure=${figure}&amp;head_direction=${headDirection}&amp;direction=${direction}&amp;gesture=${gesture}&amp;size=${size}&amp;headonly=${headOnly}`">
</template>

<script>
import {environment} from "../../../environment";

export default {
    props: {
        forwardClass: {
            type: String
        },
        figure: {
            type: String,
            required: true,
            default: ''
        },
        headDirection: {
            type: Number,
            required: false,
            default: 3
        },
        direction: {
            type: Number,
            required: false,
            default: 3
        },
        gesture: {
            type: String,
            required: false,
            default: 'sml'
        },
        size: {
            type: String,
            required: false,
            default: 'm'
        },
        headOnly: {
            type: Number,
            required: false,
            default: 0
        }
    },

    data() {
        return {
            imaging: environment.imaging
        }
    }
};
</script>
