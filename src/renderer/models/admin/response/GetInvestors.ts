export interface GetInvestors {
  seq: number
  method: number
  params: Params
}

export interface Params {
  headers: string[]
  data: Array<Array<boolean | number | null | string>>
}
