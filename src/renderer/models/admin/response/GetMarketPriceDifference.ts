export interface GetMarketPriceDifference {
  seq: number
  method: number
  params: Params
}

export interface Params {
  headers: string[]
  data: Array<Array<DatumClass | number>>
}

export interface DatumClass {
  side: string
  price: number
  orderId: number
  tradeId: number
  quantity: number
  accountId: number
  timestamp: number
  instrumentId: number
}
