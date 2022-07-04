export interface GetSymbols {
  seq: number
  method: number
  params: Params
}

export interface Params {
  headers: string[]
  data: Array<Array<boolean | number | string>>
}
