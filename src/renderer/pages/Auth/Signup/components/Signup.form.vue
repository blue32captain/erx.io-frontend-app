<script lang="ts">
import { useValidation } from 'vue-composable'
import { useUsername, usePassword, useErrorMessage, useRequired } from '/@/utils/validators'
import useSignup from '../hooks/useSignup'
import { useI18n } from 'vue-i18n'
import config from '/@/config'

export default {
  name: 'SignupForm',
  setup() {
    const { signup, loading, error } = useSignup()
    const { t } = useI18n()

    const form = useValidation({
      username: useUsername(config.username),
      password: usePassword(config.password),
      confirmPassword: {
        ...useRequired(config.password),
        match: {
          $validator(v) {
            return v === form.password.$value
          },
          $message: 'Password don\'t match',
        },
      },
      agreedPrivacyAndTOS: useRequired(false),
    })

    const errorMessage = useErrorMessage(form)

    function onSubmit() {
      signup({
        username: form.username.$value,
        password: form.password.$value,
      })
    }

    return { onSubmit, errorMessage, form, loading, error, t }
  },
}
</script>

<template>
  <!-- eslint-disable @pathscale/vue3/v-directive -->
  <form @submit.prevent="onSubmit">
    <v-field :message="errorMessage('username')" type="is-danger" label="Username">
      <v-input
        name="username"
        autocomplete="username"
        placeholder="Username"
        v-model="form.username.$value"/>
    </v-field>

    <v-field :message="errorMessage('password')" type="is-danger" :label="t('profile.password')">
      <v-input
        :placeholder="t('profile.password')"
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

    <v-field>
      <v-checkbox required v-model="form.agreedPrivacyAndTOS.$value">
        <span class="ml-2">
          {{ t('term.iAgree') }}
        </span>
      </v-checkbox>
    </v-field>

    <v-button
      size="is-medium"
      expanded
      class="disabled my-5 is-capitalized"
      :loading="loading"
      type="is-primary"
      native-type="submit"
      :disabled="form.$anyInvalid">
      {{ t('login.signUp') }}
    </v-button>

    <v-field v-show="error" :message="error" type="is-danger" />
  </form>
</template>



