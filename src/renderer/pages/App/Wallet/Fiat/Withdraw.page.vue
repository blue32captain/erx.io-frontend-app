<script lang="ts">
import FiatLayout from './layout/Fiat.layout.vue'
import WithdrawContent from './components/WithdrawContent.vue'

import WithdrawInstructions from './components/WithdrawInstructions.vue'
import HistoryTable from './components/HistoryTable.vue'
import useWalletHistoryTransactions from './hooks/useWalletHistoryTransactions'
import { useI18n } from 'vue-i18n'

export default {
  name: 'Withdraw',
  components: {
    FiatLayout,
    WithdrawContent,
    WithdrawInstructions,
    HistoryTable,
  },
  setup() {
    const { items } = useWalletHistoryTransactions('withdraws')
    const { t } = useI18n()

    return {
      items,
      t,
    }
  },
}
</script>

<template>
  <fiat-layout>
    <template #content><withdraw-content /></template>
    <template #instructions><withdraw-instructions /></template>
    <template #history>
      <p class="has-text-info is-size-5 pb-2">{{ t('title.withdrawHistory') }}</p>
      <history-table :key="items" :items="items" type="withdraw" />
    </template>
  </fiat-layout>
</template>

