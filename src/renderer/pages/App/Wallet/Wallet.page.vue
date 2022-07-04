<script lang="ts">
import BalancesTable from './components/BalancesTable.vue'
import useWalletBalances from './hooks/useWalletBalances'
import { useI18n } from 'vue-i18n'

export default {
  name: 'Wallet',
  components: { BalancesTable },

  setup() {
    const { t } = useI18n()

    const { items: accountBalances } = useWalletBalances()

    return {
      accountBalances,
      t,
    }
  },
}
</script>

<template>
  <p class="has-text-info is-size-5 pb-2">{{ t('title.account') }}</p>
  <balances-table class="my-2" :key="accountBalances" :items="accountBalances" />
</template>

