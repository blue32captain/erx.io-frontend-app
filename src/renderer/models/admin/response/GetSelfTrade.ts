export interface GetSelfTrade {
  seq: number
  method: number
  params: Params
}

export interface Params {
  headers: string[]
  data: Array<Array<DatumClass | number | string>>
}

export interface DatumClass {
  side: string
  state?: string
  orderId: number
  accountId: number
  ipAddress?: string
  orderType?: string
  timestamp: number
  limitPrice?: number
  instrumentId: number
  displayQuantity?: number
  executedQuantity?: number
  originalQuantity?: number
  remainingQuantity?: number
  stateChangedReason?: string
  price?: number
  tradeId?: number
  quantity?: number
}
