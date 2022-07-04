<script lang="ts">
import { useRoutedTabs } from '/@/hooks'
import useOMSOrders from './hooks/useOMSOrders'

import { TABS } from './constants/omsOrders.contants'

export default {
  name: 'OMSOrder',
  setup() {
    const { current: currentTrade } = useOMSOrders()
    const { currentTab } = useRoutedTabs(TABS, 'adminOMSOrders')

    return {
      TABS,
      currentTrade,
      currentTab,
    }
  },
}
</script>

<template>
  <v-tabs v-model="currentTab" type="is-boxed" class="account-tabs">
    <v-tab :label="tab.label" v-for="tab in TABS" :key="tab.key" />
  </v-tabs>

  <div class="box">
    <v-columns>
      <v-column>
        <div class="subtitle">OMS Order {{ currentTab.orderId }}</div>
      </v-column>
    </v-columns>

    <content-detail :current="currentTrade" />
  </div>
</template>

