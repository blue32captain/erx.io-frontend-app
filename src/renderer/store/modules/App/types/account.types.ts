import { SetRecoveryQuestions, UpdateUserSettings } from '/@/models/app/request'

import { AccountStatus } from '/@/models/Account.model'

import { Params as UserSettings } from '/@/models/app/response/GetUserSettings'

export type Questions = Record<
  string,
  {
    content: string[]
    questionId: string[]
  }
>

export interface State {
  loading: Record<string, unknown>
  error: Record<string, unknown>
  status: AccountStatus
  recoveryQuestions: Questions
  settings: UserSettings
}

export interface Mutations {
  getAccountStatus: (state: State) => void
  getRecoveryQuestions: (state: State) => Promise<void>
  setRecoveryQuestions: (state: State, payload: SetRecoveryQuestions) => Promise<void>
  getUserSettings: (state: State) => Promise<void>
  updateUserSettings: (state: State, payload: UpdateUserSettings) => Promise<void>
}

export interface Actions {
  getAccountStatus: () => void
  getRecoveryQuestions: () => Promise<void>
  setRecoveryQuestions: (payload: SetRecoveryQuestions) => Promise<void>
  getUserSettings: () => Promise<void>
  updateUserSettings: (payload: UpdateUserSettings) => Promise<void>
}

export enum Category {
  Childhood = 'childhood',
  Family = 'family',
  First = 'first',
  Historical = 'historical',
  Personal = 'personal',
}
