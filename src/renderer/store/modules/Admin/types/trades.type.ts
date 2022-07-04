import { GetTrades } from '/@/models/admin/request'

export interface Trades {
  tradeId?: number
  executionPublicId?: null | number
  orderId?: number
  symbolId?: number
  userPublicId?: number
  accountPublicId?: number
  price?: number
  amount?: number
  fee?: number
  createdAt?: number
  market?: string
}

export interface State {
  loading: Record<string, unknown>
  error: Record<string, unknown>
  items: Record<string | number, Trades>
  total: number
}

export interface Mutations {
  getItems: (state: State, payload: GetTrades) => Promise<void>
}

export interface Actions {
  getItems: (payload: GetTrades) => Promise<void>
}
