<script lang="ts">
import { VIcon } from '@pathscale/vue3-ui'

export default {
  name: 'Icon',
  components: { VIcon },
  inheritAttrs: false,
  setup(props) {
    const version = '1.0.10'
    const bundle = 'icons'
    return { version, bundle }
  },
}
</script>

<template>
  <v-icon :cache-version="version" :bundle="bundle" v-bind="$attrs" />
</template>
