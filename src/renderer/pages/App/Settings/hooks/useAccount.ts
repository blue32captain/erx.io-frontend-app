import { watchEffect, toRef, computed } from 'vue'
import { SetRecoveryQuestions, UpdateUserSettings } from '/@/models/app/request'
import accountStore, {
  getUserSettings,
  getRecoveryQuestions,
  setRecoveryQuestions as setRecoveryQuestionsStore,
  updateUserSettings,
} from '/@/store/modules/App/account.module'

const useAccountStatus = () => {
  watchEffect(() => {
    getRecoveryQuestions()
    getUserSettings()
  })

  const setRecoveryQuestions = (payload: SetRecoveryQuestions) => {
    setRecoveryQuestionsStore(payload)
  }

  const userDetails = computed(() => {
    return accountStore.settings
  })

  const setUserDetails = (payload: UpdateUserSettings) => {
    updateUserSettings(payload)
  }

  const loading = computed(() => {
    return accountStore.loading.getUserSettings || accountStore.loading.updateUserSettings
  })

  const error = computed(() => {
    return accountStore.error.getUserSettings || accountStore.error.updateUserSettings
  })

  return {
    setUserDetails,
    userDetails,
    setRecoveryQuestions,
    setRecoveryQuestionsLoading: toRef(accountStore.loading, 'setRecoveryQuestions'),
    recoveryQuestions: toRef(accountStore, 'recoveryQuestions'),
    loading,
    error,
  }
}

export default useAccountStatus
