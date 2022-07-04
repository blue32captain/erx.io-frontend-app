export interface GetWithdrawalDestinations {
  seq: number
  method: number
  params: Params
}

export interface Params {
  headers: string[]
  data: Array<Array<number | null | string>>
}
