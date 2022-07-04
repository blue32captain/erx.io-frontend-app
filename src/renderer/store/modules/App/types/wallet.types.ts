import { WalletBalance, Coin } from '/@/models/Wallet.model'

export interface Balance extends WalletBalance, Coin {
  change24h: number
  value: number
  symbol: string
}

export interface Transaction {
  transactionId: number
  accountPublicId: number
  type: string
  amount: number
  accountId: number
  destinationType: string
  destination: string
  status: string
  createdAt: number
  updatedAt: number
  assetId: number
  name: string
}

export interface State {
  loading: Record<string, unknown>
  error: Record<string, unknown>
  balances: Record<string, Balance>
  historyDeposits: Record<string, Transaction>
  historyWithdraws: Record<string, Transaction>
  transactions: Record<string, Transaction>
  coins: Record<string, Coin> | null
}

export interface Mutations {
  getWalletBalances: (state: State) => Promise<void>
  getWalletHistoryDeposits: (state: State) => void
  getWalletHistoryWithdraws: (state: State) => void
  getWalletTransactions: (state: State) => Promise<void>
  getCoins: (state: State) => Promise<void>
}

export interface Actions {
  getWalletBalances: () => Promise<void>
  getWalletHistoryDeposits: () => Promise<void>
  getWalletHistoryWithdraws: () => Promise<void>
  getWalletTransactions: () => Promise<void>
  getCoins: () => Promise<void>
}
