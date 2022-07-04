<script lang="ts">
import { useRoutedTabs } from '/@/hooks'
import useTrades from './hooks/useTrades'

import { TABS } from './constants/trades.contants'

export default {
  name: 'Trade',
  setup() {
    const { current: currentTrade } = useTrades()

    const { currentTab } = useRoutedTabs(TABS, 'adminTrades')

    return {
      currentTrade,
      currentTab,
      TABS,
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
        <div class="subtitle">Trade {{ currentTrade.tradeId }}</div>
      </v-column>
    </v-columns>

    <content-detail :current="currentTrade" />
  </div>
</template>

