import walletStore, {
  getWalletHistoryDeposits,
  getWalletHistoryWithdraws,
} from '/@/store/modules/App/wallet.module'
import { onMounted, toRef } from 'vue'

const useWalletHistoryDeposits = (type: 'deposits' | 'withdraws') => {
  onMounted(() => {
    if (type === 'deposits') {
      getWalletHistoryDeposits()
    } else {
      getWalletHistoryWithdraws()
    }
  })

  return {
    items: toRef(walletStore, type === 'deposits' ? 'historyDeposits' : 'historyWithdraws'),
    loading: toRef(walletStore.loading, 'getWalletHistoryDeposits'),
    error: toRef(walletStore.error, 'getWalletHistoryDeposits'),
  }
}

export default useWalletHistoryDeposits
