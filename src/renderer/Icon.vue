<script lang="ts">
import { VIcon } from '@pathscale/vue3-ui'

import { iconList } from '/@/data/icon.data'

export default {
  name: 'Icon',
  components: { VIcon },
  props: {
    size: String,
    width: String,
    height: String,
    bundle: String,
    name: String,
    customClass: String,
    customSize: String,
    fill: {
      type: String,
    },
    cacheVersion: {
      type: String,
      default: '1.0.0',
    },
  },
  setup(props) {
    const svg = iconList[props.name](props.width, props.height, props.fill)
    return { svg }
  },
}
</script>

<template>
  <span class="inline-block" v-html="svg"/>
</template>
