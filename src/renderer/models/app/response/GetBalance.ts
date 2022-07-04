export interface GetBalance {
  seq: number
  method: number
  params: Params
}

export interface Params {
  available: number
  locked: number
  asset: number
}
