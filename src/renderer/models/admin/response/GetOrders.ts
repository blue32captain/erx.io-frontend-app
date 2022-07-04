export interface GetOrders {
  seq: number
  method: number
  params: Params
}

export interface Params {
  headers: string[]
  data: Array<Array<number | string>>
}
