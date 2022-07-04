export interface SubmitRecoveryAnswersDone {
  method: number
  seq: number
  params: Params
}

export interface Params {
  passwordResetToken: string
  tokenValid: number
}
