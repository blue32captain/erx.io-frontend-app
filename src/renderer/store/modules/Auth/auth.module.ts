import { makeState } from '../../makeState'
import { api, service } from '/@/api'
import { State, Mutations, Actions, Init, RecoveryQuestions, ResetToken } from './auth.types'

import {
  FinalizePasswordReset,
  Login,
  Signup,
  StartPasswordReset,
  SubmitRecoveryAnswers,
} from '/@/models/auth/request'

import { useLocalStorage } from 'vue-composable'

import $toast from '/@/main'
import { t } from '/@/i18n'
import { SubmitRecoveryAnswersDone } from '/@/models/auth/response'

const slices = makeState<State, Mutations, Actions>({
  initialState: {
    userPublicId: 0,
    logged: false, // process.env.NODE_ENV !== 'production',
    role: '',
    passwordResetToken: '',
    recoveryQuestions: [],
    loading: {},
    error: {},
  },
  mutations: {
    async login(state: State, payload: Login) {
      const { userPublicId, serviceTokens, serviceUrls } = await service.auth.connect<{
        userPublicId: number
        serviceTokens: {
          user: string
        }
        serviceUrls: {
          user: string
        }
      }>([
        '0login',
        '1' + payload.username,
        '2' + payload.password,
        '3' + payload.serviceCode,
        '4' + payload.deviceId,
        '5' + payload.deviceOS,
      ])

      const content = [userPublicId, serviceTokens.user, payload.deviceId, payload.deviceOS]

      const { role } = await service.app.connect(content, serviceUrls.user)

      useLocalStorage('username', payload.username)
      useLocalStorage('userPublicId', userPublicId)
      useLocalStorage('token', serviceTokens.user)
      useLocalStorage('remote', serviceUrls.user)

      state.userPublicId = userPublicId
      state.role = role
      state.logged = true
    },
    async init(state: State, payload: Init) {
      const content = [payload.userPublicId, payload.token, payload.deviceId, payload.deviceOS]
      const { role } = await service.app.connect(content, payload.remote)
      state.userPublicId = payload.userPublicId
      state.role = role
      state.logged = true
    },

    async signup(state: State, payload: Signup) {
      await service.auth.connect([
        '0signup',
        '1' + payload.username,
        '2' + payload.password,
        '3' + payload.preferredLanguage,
        '4' + payload.agreedPrivacy,
        '5' + payload.agreedTOS,
      ])
      $toast.success(t('modal.success'))
      return true
    },

    async startPasswordReset(state: State, payload: StartPasswordReset) {
      const response: RecoveryQuestions = await service.auth.connect([
        '0start_password_reset',
        '1' + payload.username,
        '2' + payload.deviceId,
        '3' + payload.deviceOS,
      ])

      state.recoveryQuestions = response.questions
    },
    async submitRecoveryAnswers(state: State, payload: SubmitRecoveryAnswers) {
      const { params }: { params: ResetToken } = await api.auth.SubmitRecoveryAnswers<
        SubmitRecoveryAnswersDone,
        SubmitRecoveryAnswers
      >(payload)
      state.passwordResetToken = params.passwordResetToken
    },

    async finalizePasswordReset(state: State, payload: FinalizePasswordReset) {
      const response = await api.auth.FinalizePasswordReset(payload)
      console.log('-------------------', response)
    },

    logout() {
      localStorage.clear()
      window.location.replace('/')
    },
  },
})

export default slices.state

export const {
  login,
  signup,
  logout,
  init,
  startPasswordReset,
  submitRecoveryAnswers,
  finalizePasswordReset,
} = slices.actions
