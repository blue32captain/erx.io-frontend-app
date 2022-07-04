export interface SubmitOrder {
  seq: number
  method: number
  params: Params
}

export interface Params {
  order_id: number
  symbol: string
  amount: number
  price: number
  side: string
  status: string
}
