/* eslint-disable indent */
import walletStore, { getWalletTransactions, getCoins } from '/@/store/modules/App/wallet.module'
import { onMounted, toRef, computed, Ref } from 'vue'

const useTransactionsHistory = (
  currentCurrency: Ref<string>,
  checkboxs: Record<string, { label: string; value: boolean }>,
) => {
  onMounted(async () => {
    if (!walletStore.coins) {
      await getCoins()
    }
    getWalletTransactions()
  })

  const currencies = computed(() => {
    const allCurrencies: Record<string, boolean> = {}
    Object.values(walletStore.transactions).forEach(transaction => {
      allCurrencies[transaction.name] = true
    })
    return Object.keys(allCurrencies)
  })

  const items = computed(() => {
    const transactions = Object.values(walletStore.transactions)

    const filteredByCurrency =
      currentCurrency.value === 'all'
        ? transactions
        : transactions.filter(transaction => transaction.name === currentCurrency.value)

    const activeCheckboxs = Object.keys(checkboxs).filter(key => checkboxs[key].value)
    const filteredByCheckboxs = checkboxs.all.value
      ? filteredByCurrency
      : filteredByCurrency.filter(transaction =>
          activeCheckboxs.includes(transaction.type.toLowerCase()),
        )

    return filteredByCheckboxs
  })

  return {
    items,
    currencies,
    loading: toRef(walletStore.loading, 'getWalletTransactions'),
    error: toRef(walletStore.error, 'getWalletTransactions'),
  }
}

export default useTransactionsHistory
