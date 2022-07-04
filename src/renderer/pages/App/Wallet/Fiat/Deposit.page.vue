<script lang="ts">
import FiatLayout from './layout/Fiat.layout.vue'
import DepositContent from './components/DepositContent.vue'

import DepositInstructions from './components/DepositInstructions.vue'
import HistoryTable from './components/HistoryTable.vue'
import useWalletHistoryTransactions from './hooks/useWalletHistoryTransactions'
import { useI18n } from 'vue-i18n'

import { ref } from 'vue'

export default {
  name: 'Withdraw',
  components: {
    FiatLayout,
    DepositContent,
    DepositInstructions,
    HistoryTable,
  },
  setup() {
    const { items } = useWalletHistoryTransactions('deposits')
    const { t } = useI18n()
    const paymentMethods = [
      {
        label: t('desposit.radio.qrPayment'),
        key: 'qr',
      },
      {
        label: t('desposit.radio.bankTransfer'),
        key: 'bankTranfer',
      },
    ]

    const paymentMethod = ref<'qr' | 'bankTranfer'>('qr')

    return {
      items,
      t,
      paymentMethod,
      paymentMethods,
    }
  },
}
</script>

<template>
  <fiat-layout>
    <template #content>
      <deposit-content :payment-methods="paymentMethods" v-model:payment-method="paymentMethod"/></template>
    <template #instructions><deposit-instructions :payment-method="paymentMethod" /></template>
    <template #history>
      <p class="has-text-info is-size-5 pb-2">{{ t('title.depositHistory') }}</p>
      <history-table :key="items" :items="items" type="deposit" />
    </template>
  </fiat-layout>
</template>

