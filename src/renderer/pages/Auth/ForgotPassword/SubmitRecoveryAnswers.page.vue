<script lang="ts">
import { reactive, computed, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import useForgotPassword from './hooks/useForgotPassword'
import { SubmitRecoveryAnswers } from '/@/models/auth/request'
import { clone } from '/@/store/utils'

export default {
  name: 'SubmitRecoveryPassword',
  setup() {
    const router = useRouter()

    const state = reactive<SubmitRecoveryAnswers>({
      questionId: [],
      answer: [],
    })

    const { loading, error, recoveryQuestions, hasRecoveryQuestions, submitAnswers, resetToken } =
      useForgotPassword()

    function onSubmit() {
      const data = {
        questionId: recoveryQuestions.value.map(e => e.questionId),
        answer: state.answer,
      }
      submitAnswers(clone<SubmitRecoveryAnswers>(data))
    }
    watchEffect(() => {
      if (!hasRecoveryQuestions.value) {
        router.push({ name: 'forgotPassword' })
      } else if (resetToken.value) {
        router.push({ name: 'resetPassword', query: { token: resetToken.value } })
      }
    })

    const errorMessage = (index: number) => {
      if (state.answer[index] && state.answer[index].length < 3) {
        return 'Please enter an answer with at least 3 characters'
      }
      return ''
    }

    const isValid = computed(() => {
      return state.answer.every(e => e && e.length >= 3)
    })

    return {
      onSubmit,
      state,
      isValid,
      loading,
      error,
      recoveryQuestions,
      hasRecoveryQuestions,
      errorMessage,
    }
  },
}
</script>

<template>
  <form action="" v-if="hasRecoveryQuestions">
    <v-field
      type="is-danger"
      v-for="(question, index) in recoveryQuestions"
      :key="question.questionid"
      :label="question.question"
      :message="errorMessage(index)">
      <v-input v-model="state.answer[index]" />
    </v-field>
    <v-button
      size="is-medium"
      expanded
      class="my-5 is-capitalized"
      :loading="loading"
      @click="onSubmit"
      :disabled="!isValid">
      Submit
    </v-button>
    <v-field type="is-danger" :message="error" />
  </form>
</template>
