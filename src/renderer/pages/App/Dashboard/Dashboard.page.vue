<script lang="ts">
import { Balances, ActionList } from './components'
import { useAccountStatus } from './hooks'
import useWalletBalances from '../Wallet/hooks/useWalletBalances'

export default {
  name: 'Dashboard',
  components: { ActionList, Balances },

  setup() {
    const { status } = useAccountStatus()
    const { items: accountBalances, loading, total } = useWalletBalances()

    return {
      loading,
      status,
      accountBalances,
      total,
    }
  },
}
</script>

<template>
  <action-list :actions="status" class="mb-5" />
  <balances
    :key="accountBalances"
    :loading="loading"
    :items="accountBalances"
    :total-value="total"/>
</template>

