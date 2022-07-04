import {
  FinalizePasswordReset,
  Login,
  Signup,
  StartPasswordReset,
  SubmitRecoveryAnswers,
} from '/@/models/auth/request'

export interface Init {
  userPublicId: number
  token: string
  remote: string
  deviceId: string
  deviceOS: string
}

export interface Question {
  questionId: number
  question: string
}

export interface RecoveryQuestions {
  questions: Question[]
}

export interface ResetToken {
  passwordResetToken: string
  tokenValid: number
}

export interface State {
  userPublicId: number
  logged: boolean
  role: string
  recoveryQuestions: Question[]
  passwordResetToken: string

  loading: Record<string, unknown>
  error: Record<string, unknown>
}

export interface Mutations {
  login: (state: State, payload: Login) => Promise<void>
  init: (state: State, payload: Init) => Promise<void>
  signup: (state: State, payload: Signup) => Promise<boolean>
  startPasswordReset: (state: State, payload: StartPasswordReset) => Promise<void>
  submitRecoveryAnswers: (state: State, payload: SubmitRecoveryAnswers) => Promise<void>
  finalizePasswordReset: (state: State, payload: FinalizePasswordReset) => Promise<void>
  logout: () => void
}

export interface Actions {
  login: (payload: Login) => Promise<void>
  init: (payload: Init) => Promise<void>
  startPasswordReset: (payload: StartPasswordReset) => Promise<void>
  submitRecoveryAnswers: (payload: SubmitRecoveryAnswers) => Promise<void>
  signup: (payload: Signup) => Promise<true>
  logout: () => void
  finalizePasswordReset: (payload: FinalizePasswordReset) => Promise<void>
}
