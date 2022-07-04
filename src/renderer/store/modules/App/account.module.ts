/* eslint-disable indent */
import { makeState } from '../../makeState'
import accountStatus from '/@/data/accountStatus.data'

import { SetRecoveryQuestions, UpdateUserSettings } from '/@/models/app/request'

import { api } from '/@/api'

import { State, Mutations, Actions } from './types/account.types'
import { formatQuestions } from '/@/store/utils'
import {
  GetRecoveryQuestionsDone,
  GetUserSettingsDone,
  SetRecoveryQuestionsDone,
  UpdateUserSettingsDone,
} from '/@/models/app/response'

const slices = makeState<State, Mutations, Actions>({
  initialState: {
    loading: {},
    error: {},
    status: {},

    settings: {
      familyName: null,
      givenName: null,
      email: null,
      emailVerified: false,
      phoneNumber: null,
      phoneVerified: false,
      role: '',
    },
  },
  mutations: {
    getAccountStatus(state: State) {
      state.status = accountStatus
    },
    async getUserSettings(state: State) {
      const response = await api.app.GetUserSettings<GetUserSettingsDone>()
      state.settings = response.params
    },
    async updateUserSettings(state: State, payload: UpdateUserSettings) {
      await api.app.UpdateUserSettings<UpdateUserSettingsDone>(payload)
    },

    async setRecoveryQuestions(state: State, payload: SetRecoveryQuestions) {
      await api.app.SetRecoveryQuestions<SetRecoveryQuestionsDone, SetRecoveryQuestions>(payload)
    },

    async getRecoveryQuestions(state: State) {
      const response = await api.app.GetRecoveryQuestions<GetRecoveryQuestionsDone>()
      state.recoveryQuestions = formatQuestions(response)
    },
  },
})

export default slices.state

export const {
  getAccountStatus,
  getUserSettings,
  getRecoveryQuestions,
  setRecoveryQuestions,
  updateUserSettings,
} = slices.actions
