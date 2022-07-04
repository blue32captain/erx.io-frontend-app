export interface GetLedger {
  seq: number
  method: number
  params: Params
}

export interface Params {
  headers: string[]
  data: Array<any[]>
}
