<script lang="ts">
// import { useI18n } from 'vue-i18n'
import { ref, watch, watchEffect } from 'vue'
import { useRoutedTabs } from '/@/hooks'
import { exportToCsv } from '/@/utils/csv'
import { clone } from '/@/store/utils'
import { Actions } from '/@/components'

import { TABS, COLUMNS_LIST } from './constants/tickets.contants'
import { TabContentLayout } from '/@/layouts'
import TicketsTable from './components/TicketsTable.vue'
import useTickets from './hooks/useTickets'

export default {
  name: 'Tickets',
  components: {
    Actions,
    TabContentLayout,
    TicketsTable,
  },
  setup() {
    // const { t } = useI18n()
    const activeTab = ref('table')
    const { currentTab, current } = useRoutedTabs(TABS)
    const { items, filterItemByTable, loading } = useTickets()

    watchEffect(() => {
      if (current.value) {
        filterItemByTable(current.value.path)
        activeTab.value = current.value.path
      }
    })

    watch([items], ([items]) => {
      activeTab.value = `${items.length}-${current.value?.path?.length}`
    })

    const onClickCSV = () => {
      exportToCsv('tickets_csv', clone(items.value))
    }

    return {
      TABS,
      currentTab,
      current,
      COLUMNS_LIST,
      items,
      onClickCSV,
      activeTab,
      loading,
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
      <tickets-table
        :loading="loading"
        :columns="COLUMNS_LIST[currentTab]"
        :items="items"
        :key="activeTab"/>
    </template>
  </tab-content-layout>
</template>

