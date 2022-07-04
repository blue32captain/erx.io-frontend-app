<script>
import { ref } from 'vue'

export default {
  name: 'Chart',
  setup() {
    const activeTab = ref(0)
    return { activeTab }
  },
}
</script>

<template>
  <v-tabs v-model="activeTab" expanded>
    <v-tab label="Price Chart"><div class="py-2 px-2">Price Chart</div> </v-tab>
    <v-tab label="Depth Chart"><div class="py-2 px-2">Depth Chart</div> </v-tab>
  </v-tabs>
</template>
