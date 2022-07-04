import { makeState } from '../../makeState'
import { WalletBalance, Coin } from '/@/models/Wallet.model'

import { normalize } from '/@/store/utils'

import { api } from '/@/api'

import { State, Mutations, Actions, Balance, Transaction } from './types/wallet.types'
import { GetBalancesDone, GetCoinsDone, GetTransactionHistoryDone } from '/@/models/app/response'
import { GetTransactionHistory } from '/@/models/app/request'

const defaultCoin: Coin = {
  id: 0,
  name: '',
  status: '',
  precision: 0,
  price: 0,
  last24hPriceThb: 0,
}

const slices = makeState<State, Mutations, Actions>({
  initialState: {
    balances: {},
    historyDeposits: {},
    historyWithdraws: {},
    transactions: {},
    loading: {},
    error: {},
    coins: null,
  },
  mutations: {
    async getCoins(state: State) {
      const { params } = await api.app.GetCoins<GetCoinsDone>()
      const coins = normalize<Coin>(params, 'id')
      state.coins = coins
    },
    async getWalletBalances(state: State) {
      const { params } = await api.app.GetBalances<GetBalancesDone>()

      const balances = normalize<WalletBalance>(params, 'assetId')

      Object.entries(balances).forEach(([assetId, balance]) => {
        const coin = state.coins?.[assetId] || defaultCoin
        const computedValue = {
          ...coin,
          change24h: (coin.price * 100) / coin.last24hPriceThb - 100,
          value: coin.price * balance.available,
        }
        Object.assign(balance, computedValue)
      })

      state.balances = balances as Record<string, Balance>
    },
    async getWalletHistoryDeposits(state: State) {
      const { params } = await api.app.GetTransactionHistory<GetTransactionHistoryDone>({
        deposit: true,
      })
      const deposits = normalize<Transaction>(params, 'transactionId')
      state.historyDeposits = deposits
    },
    async getWalletHistoryWithdraws(state: State) {
      const { params } = await api.app.GetTransactionHistory<
        GetTransactionHistoryDone,
        GetTransactionHistory
      >({
        deposit: false,
      })

      const transactions = normalize<Transaction>(params, 'transactionId')
      state.historyWithdraws = transactions
    },
    async getWalletTransactions(state: State) {
      const { params } = await api.app.GetTransactionHistory<
        GetTransactionHistoryDone,
        GetTransactionHistory
      >({
        deposit: undefined,
      })

      const transactions = normalize<Transaction>(params, 'transactionId')

      Object.entries(transactions).forEach(([, transaction]) => {
        const coin = state.coins?.[transaction.assetId] || defaultCoin
        Object.assign(transaction, coin)
      })
      state.transactions = transactions
    },
  },
})

export default slices.state

export const {
  getWalletBalances,
  getWalletHistoryDeposits,
  getWalletHistoryWithdraws,
  getWalletTransactions,
  getCoins,
} = slices.actions
