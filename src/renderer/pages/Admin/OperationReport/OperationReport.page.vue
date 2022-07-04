<script lang="ts">
// import { useI18n } from 'vue-i18n'
import { useRoutedTabs } from '/@/hooks'
import { TabContentLayout } from '/@/layouts'
import { FilterByDate } from '/@/components/'

import { TABS, COLUMNS_LIST } from './constants/operation-report.contants'
import OperationReportTable from './components/OperationReportTable.vue'
import useOperationReport from './hooks/useOperationReport'

export default {
  name: 'OperationReport',
  components: {
    TabContentLayout,
    OperationReportTable,
    FilterByDate,
  },
  setup() {
    const { currentTab, current } = useRoutedTabs(TABS)
    const { items, loading, total } = useOperationReport()

    const onFilterByDate = (value: Record<string, string>): void => {
      console.log('value', value)
    }

    return {
      TABS,
      currentTab,
      current,
      COLUMNS_LIST,
      items,
      loading,
      onFilterByDate,
      total,
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
      <operation-report-table
        :loading="loading"
        :columns="COLUMNS_LIST[currentTab]"
        :items="Object.values(items)"
        :total="total"/>
    </template>
  </tab-content-layout>
</template>

