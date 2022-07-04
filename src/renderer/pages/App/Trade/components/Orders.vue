<script>
import { ref } from 'vue'
import { ORDER_TABS } from '../constants/orders.constant'

export default {
  name: 'Chart',
  setup() {
    const activeTab = ref(0)
    return { activeTab, ORDER_TABS }
  },
}
</script>

<template>
  <v-tabs v-model="activeTab" expanded class="mb-0">
    <v-tab v-for="tab in ORDER_TABS" :key="tab.value" :label="tab.label">
      <basic-table bordered :items="[]" :columns="ORDER_TABS[activeTab].columns" />
    </v-tab>
  </v-tabs>
</template>

<style>
.mb-0 > .tabs:not(:last-child) {
  margin-bottom: 0;
}
</style>
