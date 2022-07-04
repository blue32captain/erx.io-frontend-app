import { IService } from '@pathscale/wss-adapter/types'

import config from '/@/config'

const service: IService = {
  remote: config.authServer,
  methods: {
    10010: {
      name: 'Signup',
      parameters: ['username', 'password', 'preferredLanguage', 'agreedPrivacy', 'agreedTOS']
    },
    10020: {
      name: 'Login',
      parameters: ['username', 'password', 'serviceCode', 'deviceId', 'deviceOS']
    },
    10030: {
      name: 'StartPasswordReset',
      parameters: ['username', 'deviceId', 'deviceOS']
    },
    10040: {
      name: 'SubmitRecoveryAnswers',
      parameters: ['questionId', 'answer']
    },
    10050: {
      name: 'FinalizePasswordReset',
      parameters: ['passwordResetToken', 'newPassword']
    }
  }
}

export default service
