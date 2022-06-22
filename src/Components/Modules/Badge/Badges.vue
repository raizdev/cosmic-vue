<template>
  <div class="badge">
    <img :src="this.nitro.url + this.nitro.badges + this.badge" :alt="this.badge">
  </div>
</template>

<script>
import { environment } from "../../../../environment"

export default {
  props: ['badge'],

  data() {
    return {
      nitro: environment.nitro
    }
  },
}
</script>
