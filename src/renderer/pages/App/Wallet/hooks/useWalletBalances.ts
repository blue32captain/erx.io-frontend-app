import walletStore, { getCoins, getWalletBalances } from '/@/store/modules/App/wallet.module'
import { onMounted, toRef, computed } from 'vue'

const useAccountBalances = () => {
  onMounted(async () => {
    if (!walletStore.coins) {
      await getCoins()
    }
    getWalletBalances()
  })

  const total = computed(() => {
    return Object.values(walletStore.balances).reduce((p, c) => c.value + p, 0)
  })

  return {
    total,
    items: toRef(walletStore, 'balances'),
    loading: toRef(walletStore.loading, 'getWalletBalances'),
    error: toRef(walletStore.error, 'getWalletBalances'),
  }
}

export default useAccountBalances
