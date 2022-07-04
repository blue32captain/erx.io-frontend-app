<script lang="ts">
// import { useI18n } from 'vue-i18n'
import { useRoutedTabs } from '/@/hooks'
import { toRaw } from 'vue'
import { Actions } from '/@/components'

import FilterByProduct from './components/FilterByProduct.vue'
import { TABS } from './constants/omsOrders.contants'
import { TabContentLayout } from '/@/layouts'
import OmsOrdersTable from './components/OMSOrdersTable.vue'
import useOMSOrders from './hooks/useOMSOrders'
import { exportToCsv } from '/@/utils/csv'

export default {
  name: 'OMSOrders',
  components: {
    TabContentLayout,
    Actions,
    OmsOrdersTable,
    FilterByProduct,
  },
  setup() {
    // const { t } = useI18n()
    const { currentTab, current } = useRoutedTabs(TABS)
    const { items, sellBook, buyBook, loading, totalBuy, totalSell, getTotal } = useOMSOrders()

    const onClickCSV = () => {
      exportToCsv(`oms_orders_${current.value.path}`, toRaw(items.value))
    }

    return {
      // t
      TABS,
      currentTab,
      current,
      items,
      loading,
      onClickCSV,
      sellBook,
      buyBook,
      totalSell,
      totalBuy,
      getTotal,
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
      <filter-by-product />
      <actions @csv="onClickCSV" :items="current.actions" />
    </template>
    <template #table>
      <v-columns>
        <v-column class="pr-5" v-if="TABS[currentTab].uniq">
          <oms-orders-table
            :loading="loading"
            :columns="TABS[currentTab].uniq"
            :items="items"
            :total="getTotal"/>
        </v-column>
        <v-column size="is-6" class="pr-5" v-if="TABS[currentTab].leftTable">
          <span v-if="TABS[currentTab].leftTableTitle" class="is-size-6">
            {{ TABS[currentTab].leftTableTitle }}
          </span>
          <oms-orders-table
            :loading="loading"
            :columns="TABS[currentTab].leftTable"
            :items="buyBook"
            :total="totalBuy"/>
        </v-column>
        <v-column size="is-6" class="pl-5" v-if="TABS[currentTab].rightTable">
          <span v-if="TABS[currentTab].rightTableTitle" class="is-size-6">
            {{ TABS[currentTab].rightTableTitle }}
          </span>
          <oms-orders-table
            :loading="loading"
            :columns="TABS[currentTab].rightTable"
            :items="sellBook"
            :total="totalSell"/>
        </v-column>
      </v-columns>
    </template>
  </tab-content-layout>
</template>

