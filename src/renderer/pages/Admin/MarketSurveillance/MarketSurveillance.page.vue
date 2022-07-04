<script lang="ts">
// import { useI18n } from 'vue-i18n'
import { useRoutedTabs } from '/@/hooks'
import { FilterByDate } from '/@/components'

import { TABS, COLUMNS_LIST } from './constants/market-surveillance.contants'
import { TabContentLayout } from '/@/layouts'
import MarketSurveillanceTable from './components/MarketSurveillanceTable.vue'
import useMarketSurveillance from './hooks/useMarketSurveillance'

export default {
  name: 'MarketSurveillance',
  components: {
    TabContentLayout,
    MarketSurveillanceTable,
    FilterByDate,
  },
  setup() {
    const { currentTab, current } = useRoutedTabs(TABS)
    const { items, loading, total } = useMarketSurveillance()

    const onFilterByDate = (value: Record<string, string>): void => {
      console.log('value', value)
    }

    return {
      onFilterByDate,
      currentTab,
      current,
      TABS,
      COLUMNS_LIST,
      items,
      loading,
      total
    }
  },
}
</script>

<template>
  <filter-by-date @on-change="onFilterByDate" />
  <v-tabs v-model="currentTab" type="is-boxed" class="account-tabs">
    <v-tab :label="tab.label" v-for="tab in TABS" :key="tab.key" />
  </v-tabs>
  <tab-content-layout :label="current.label">
    <template #table>
      <market-surveillance-table
        :loading="loading"
        :columns="COLUMNS_LIST[currentTab]"
        :items="Object.values(items)"
        :total="total"/>
    </template>
  </tab-content-layout>
</template>



