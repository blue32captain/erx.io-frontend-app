export interface GetRecoveryQuestions {
  seq: number
  method: number
  params: Params
}

export interface Params {
  headers: string[]
  data: Array<string[]>
}
