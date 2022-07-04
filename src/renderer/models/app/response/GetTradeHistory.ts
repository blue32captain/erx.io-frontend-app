export interface GetTradeHistory {
  seq: number
  method: number
  params: Params
}

export interface Params {
  headers: string[]
  data: Array<number[]>
}
