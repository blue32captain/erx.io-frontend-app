<script lang="ts">
// import { useI18n } from 'vue-i18n'
import { toRaw } from 'vue'
import { useRoutedTabs } from '/@/hooks'
import { Actions } from '/@/components'

// import { exportToCsv } from '/@/utils/csv'
import { TABS, COLUMNS_LIST } from './constants/trades.contants'
import { TabContentLayout } from '/@/layouts'
import TradeTable from './components/TradeTable.vue'
import useTrades from './hooks/useTrades'
import { exportToCsv } from '/@/utils/csv'

export default {
  name: 'Trades',
  components: {
    TabContentLayout,
    TradeTable,
    Actions,
  },
  setup() {
    // const { t } = useI18n()
    const { currentTab, current } = useRoutedTabs(TABS)
    const { items, loading, total } = useTrades()

    const onClickCSV = () => {
      exportToCsv(`trades_${current.value.path}`, toRaw(items.value))
    }

    return {
      TABS,
      currentTab,
      current,
      COLUMNS_LIST,
      items,
      onClickCSV,
      loading,
      total,
    }
  },
}
</script>

<template>
  <v-tabs v-model="currentTab" type="is-boxed" class="account-tabs">
    <v-tab :label="tab.label" v-for="tab in TABS" :key="tab.key" />
  </v-tabs>
  <tab-content-layout :label="current.label">
    <template #actions>
      <actions @csv="onClickCSV" :items="current.actions" />
    </template>
    <template #table>
      <trade-table :loading="loading" :columns="COLUMNS_LIST[currentTab]" :items="items"  :total="total"/>
    </template>
  </tab-content-layout>
</template>

