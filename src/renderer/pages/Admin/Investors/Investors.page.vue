<script lang="ts">
// import { useI18n } from 'vue-i18n'
import { useRoutedTabs } from '/@/hooks'
import { TabContentLayout } from '/@/layouts'
import { Actions } from '/@/components'
import { clone } from '/@/store/utils'
import { exportToCsv } from '/@/utils/csv'

import { TABS, COLUMNS_LIST } from './constants/investors.contants'
import InvestorsTable from './components/InvestorsTable.vue'
import useInvestors from './hooks/useInvestors'

export default {
  name: 'Investors',
  components: {
    TabContentLayout,
    Actions,
    InvestorsTable,
  },
  setup() {
    // const { t } = useI18n()
    const { currentTab, current } = useRoutedTabs(TABS)
    const { items, loading, total } = useInvestors()

    const onClickCSV = () => {
      exportToCsv('investors_csv', clone(items.value))
    }

    return {
      TABS,
      currentTab,
      current,
      onClickCSV,
      COLUMNS_LIST,
      items,
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
      <investors-table
        :loading="loading"
        :columns="COLUMNS_LIST[currentTab]"
        :items="Object.values(items)"
        :total="total"/>
    </template>
  </tab-content-layout>
</template>

