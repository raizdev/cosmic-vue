<template>
    <div class="card-header-title-container d-flex">
        <div class="background-gray card-header-icon-container" v-if="icon">
            <div class="icon" :class="icon"></div>
        </div>
        <div class="card-header-titles">
            <div class="card-header-title">{{ title }}</div>
            <span class="card-header-subtitle">{{ subTitle }}</span>
        </div>
        <button type="button" class="btn-close float-lg-end" style="margin-left: auto" @click="openClose" v-if="closeButton"></button>
    </div>
</template>
<script>
export default {
    props: {
        title: String,
        subTitle: String,
        icon: String,
        closeButton: Function
    },

    methods: {
      openClose() {
          this.closeButton()
      }
    }
}
</script>
