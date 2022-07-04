<script lang="ts">
import { useValidation } from 'vue-composable'

import { useUsername, useErrorMessage } from '/@/utils/validators'
import { useI18n } from 'vue-i18n'

import { watchEffect } from 'vue'

import { useRouter } from 'vue-router'

import useForgotPassword from './hooks/useForgotPassword'

export default {
  name: 'ForgotPassword',
  setup() {
    const router = useRouter()

    const { t } = useI18n()

    const form = useValidation({
      username: useUsername(),
    })

    const errorMessage = useErrorMessage(form)

    const { loading, error, startReset, hasRecoveryQuestions } = useForgotPassword()

    function onSubmit() {
      const data = {
        username: form.username.$value,
        deviceId: '1234567890',
        deviceOS: 'android',
      }
      startReset(data)
    }

    watchEffect(() => {
      if (hasRecoveryQuestions.value) {
        router.push({ name: 'submitRecoveryAnswers' })
      }
    })

    return { form, errorMessage, onSubmit, t, loading, error }
  },
}
</script>

<template>
  <form @submit.prevent="onSubmit">
    <v-field class="pb-2" :message="errorMessage('username')" type="is-danger">
      <v-input
        name="username"
        autocomplete="username"
        placeholder="Username"
        v-model="form.username.$value"/>
    </v-field>
    <v-button
      size="is-medium"
      expanded
      class="my-5 is-capitalized"
      :loading="loading"
      type="is-primary"
      native-type="submit"
      :disabled="form.$anyInvalid">
      Start Password Reset
    </v-button>
    <v-field type="is-danger" :message="error" />
  </form>

  <div class="has-text-right">
    <router-link :to="{ name: 'login' }"> Return to login </router-link>
  </div>

  <hr />
  <span class="mr-2"> Don't have an account? </span>
  <router-link :to="{ name: 'signup' }">{{ t('login.signUp') }}</router-link>
</template>
