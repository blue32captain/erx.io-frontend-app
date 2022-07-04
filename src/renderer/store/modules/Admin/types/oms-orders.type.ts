import { GetOrders } from '/@/models/admin/request'

export interface Order {
  orderId: number
  accountPublicId: number
  userPublicId: number
  username: string
  symbolId: number
  price: number
  quantity: number
  side: string
  status: string
  type: string
  submitTs: number
  updateTs: number
}

export interface State {
  totalSell: number
  totalBuy: number
  loading: Record<string, unknown>
  error: Record<string, unknown>
  items: Record<string | number, Order>
}

export interface Mutations {
  getItems: (state: State, payload: GetOrders) => Promise<void>
}

export interface Actions {
  getItems: (payload: GetOrders) => Promise<void>
}
