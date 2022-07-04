import { GetAccounts } from '/@/models/admin/request'

export interface Account {
  price: number
  locked: number
  assetId: number
  assetCode: string
  available: number
  createdAt: string
  updatedAt: string
  accountPublicId: number
  last24HPriceThb: number
  assetFriendlyName: string
}

export interface State {
  loading: Record<string, unknown>
  error: Record<string, unknown>
  items: Record<string | number, Account>
  total: number
}

export interface Mutations {
  getItems: (state: State, payload: GetAccounts) => Promise<void>
}

export interface Actions {
  getItems: (payload: GetAccounts) => Promise<void>
}
