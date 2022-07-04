<script lang="ts">
import { formatCamelCase } from '/@/utils/formatters'

export default {
  name: 'Account',
  props: {
    current: {
      type: Object,
      equired: false,
      default() {
        return { }
      }
    }
  },
  setup() {
    return {
      // current,
      formatCamelCase
    }
  },
}
</script>

<template>
   <v-columns v-for="key in Object.keys(current)" :key="key">
    <v-column size="is-3">
      <span class="has-text-weight-bold">{{ formatCamelCase(key) }}</span>
    </v-column>
    <v-column size="is-3">
      <span>{{ current[key] }}</span>
    </v-column>
  </v-columns>
</template>

