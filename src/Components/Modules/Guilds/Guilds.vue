<template>
    <div class="d-flex">
        <img :src="`${nitro}/assets/c_images/Badgeparts/generated/${this.guilds.badge}.png`" />
        <div class="ms-3">
            <div style="font-weight: 500">{{ this.guilds.name }}</div>
            <span>{{ this.guilds.description }}</span>
        </div>
    </div>
</template>

<script>
import { environment } from "../../../../environment"

export default {
  props: ['guilds'],

  data() {
    return {
      nitro: environment.nitro.url
    }
  }
}
</script>
