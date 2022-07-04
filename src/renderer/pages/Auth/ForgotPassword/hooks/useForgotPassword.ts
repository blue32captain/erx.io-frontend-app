import { computed, toRef } from 'vue'
import {
  FinalizePasswordReset,
  StartPasswordReset,
  SubmitRecoveryAnswers,
} from '/@/models/auth/request'
import authStore, {
  startPasswordReset,
  submitRecoveryAnswers,
  finalizePasswordReset,
} from '/@/store/modules/Auth/auth.module'

const useForgotPassword = () => {
  const startReset = async (payload: StartPasswordReset) => {
    await startPasswordReset(payload)
  }

  const submitAnswers = async (payload: SubmitRecoveryAnswers) => {
    await submitRecoveryAnswers(payload)
  }

  const resetPassword = async (payload: FinalizePasswordReset) => {
    await finalizePasswordReset(payload)
  }

  const hasRecoveryQuestions = computed(() => authStore.recoveryQuestions.length > 0)

  const loading = computed(
    () => authStore.loading.startPasswordReset || authStore.loading.submitRecoveryAnswers,
  )
  const error = computed(
    () => authStore.error.startPasswordReset || authStore.error.submitRecoveryAnswers,
  )

  return {
    hasRecoveryQuestions,
    recoveryQuestions: toRef(authStore, 'recoveryQuestions'),
    resetToken: toRef(authStore, 'passwordResetToken'),
    submitAnswers,
    startReset,
    resetPassword,
    loading,
    error,
  }
}

export default useForgotPassword
