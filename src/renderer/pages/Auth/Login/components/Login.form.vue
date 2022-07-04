<script lang="ts">
import { useValidation } from 'vue-composable'
import { useUsername, usePassword, useErrorMessage } from '/@/utils/validators'
import useLogin from '../hooks/useLogin'
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'
import config from '/@/config'

export default {
  name: 'Login',
  setup() {
    const { login, loading, error } = useLogin()
    const { t } = useI18n()

    const form = useValidation({
      username: useUsername(config.username),
      password: usePassword(config.password),
      remember: {
        $value: ref(true),
      },
    })

    const errorMessage = useErrorMessage(form)

    function onSubmit() {
      login({
        username: form.username.$value,
        password: form.password.$value,
      })
    }

    return { onSubmit, errorMessage, form, loading, error, t }
  },
}
</script>

<template>
  <form @submit.prevent="onSubmit">
    <v-field :message="errorMessage('username')" type="is-danger" label="Username">
      <v-input
        name="username"
        autocomplete="username"
        placeholder="Username"
        v-model="form.username.$value"
        autofocus/>
    </v-field>

    <v-field :message="errorMessage('password')" type="is-danger" :label="t('profile.password')">
      <v-input
        :placeholder="t('profile.password')"
        type="password"
        v-model="form.password.$value"
        password-reveal/>
    </v-field>

    <v-field>
      <v-checkbox v-model="form.remember.$value"> Remember me </v-checkbox>
    </v-field>

    <v-button
      size="is-medium"
      expanded
      class="my-5 is-capitalized"
      :loading="loading"
      type="is-primary"
      native-type="submit"
      :disabled="form.$anyInvalid">
      {{ t('login.login') }}
    </v-button>

    <v-field v-show="error" :message="error" type="is-danger" />
  </form>
</template>



