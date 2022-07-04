export interface StartPasswordResetDone {
  method: number
  seq: number
  params: Params
}

export interface Params {
  questionId: number[]
  question: string[]
}
