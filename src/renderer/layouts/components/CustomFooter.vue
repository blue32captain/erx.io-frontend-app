
<script lang="ts">
import config from '/@/config'

export default {
  name: 'CustomFooter',
  setup() {
    return { version: config.version }
  },
}
</script>

<template>
  <footer class="footer has-text-centered">
    <p>Build v{{ version }}</p>
  </footer>
</template>

<style scoped>
.footer {
  background-color: unset;
}
</style>
