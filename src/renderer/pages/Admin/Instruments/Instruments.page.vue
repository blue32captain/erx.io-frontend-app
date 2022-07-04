<script lang="ts">
// import { useI18n } from 'vue-i18n'
import { ref } from 'vue'
import { TabContentLayout } from '/@/layouts'
import InstrumentsTable from './components/InstrumentsTable.vue'
import useInstruments from './hooks/useInstruments'

import { INSTRUMENTS_COLUMNS } from './constants/instruments.contants'

export default {
  name: 'Instruments',
  components: {
    TabContentLayout,
    InstrumentsTable,
  },
  setup() {
    // const { t } = useI18n()
    const defaultTab = ref(0)
    const { items, loading } = useInstruments()

    return {
      items,
      defaultTab,
      INSTRUMENTS_COLUMNS,
      loading,
    }
  },
}
</script>

<template>
  <v-tabs v-model="defaultTab" type="is-boxed" class="account-tabs">
    <v-tab label="Instruments" />
  </v-tabs>
  <tab-content-layout label="Instruments">
    <template #table>
      <instruments-table
        :loading="loading"
        :columns="INSTRUMENTS_COLUMNS"
        :items="items"
        :key="items"/>
    </template>
  </tab-content-layout>
</template>
