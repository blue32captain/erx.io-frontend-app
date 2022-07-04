<script lang="ts">
import { watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { usePassword, useRequired, useErrorMessage } from '/@/utils/validators'
import { useValidation } from 'vue-composable'
import { useI18n } from 'vue-i18n'
import useForgotPassword from './hooks/useForgotPassword'
import { FinalizePasswordReset } from '/@/models/auth/request'

export default {
  name: 'ResetPassword',
  setup() {
    const route = useRoute()
    const router = useRouter()
    const { t } = useI18n()

    const { loading, error, resetPassword } = useForgotPassword()

    const form = useValidation({
      password: usePassword(''),
      confirmPassword: {
        ...useRequired(''),
        match: {
          $validator(v) {
            return v === form.password.$value
          },
          $message: 'Password don\'t match',
        },
      },
    })

    const errorMessage = useErrorMessage(form)

    function onSubmit() {
      const value: FinalizePasswordReset = {
        newPassword: form.password.$value,
        passwordResetToken: route.query.token as string,
      }
      resetPassword(value)
    }

    watchEffect(() => {
      if (!route.query.token) {
        router.push({
          name: 'forgotPassword',
        })
      }
    })
    return {
      onSubmit,
      t,
      errorMessage,
      form,
      loading,
      error,
    }
  },
}
</script>

<template>
  <!-- eslint-disable @pathscale/vue3/v-directive -->
  <form @submit.prevent="onSubmit">
    <v-field class="is-hidden">
      <v-input name="username" autocomplete="username" placeholder="Username" />
    </v-field>
    <v-field :message="errorMessage('password')" type="is-danger" :label="t('profile.password')">
      <v-input
        :placeholder="t('desc.securityChangeNewpw')"
        type="password"
        v-model="form.password.$value"
        autocomplete="password"
        password-reveal/>
    </v-field>
    <v-field
      :message="errorMessage('confirmPassword')"
      type="is-danger"
      :label="`${t('btn.confirm')} ${t('profile.password')}`">
      <v-input
        name="confirmPassword"
        type="password"
        :placeholder="`${t('btn.confirm')} ${t('profile.password')}`"
        v-model="form.confirmPassword.$value"
        autocomplete="confirm-password"
        password-reveal/>
    </v-field>

    <v-button
      size="is-medium"
      expanded
      class="disabled my-5 is-capitalized"
      :loading="loading"
      type="is-primary"
      native-type="submit"
      :disabled="form.$anyInvalid">
      {{ t('desc.securityChangeSave') }}
    </v-button>
    <v-field type="is-danger" :message="error" />
  </form>
</template>
