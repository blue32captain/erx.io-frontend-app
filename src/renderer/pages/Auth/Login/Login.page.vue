<script lang="ts">
import LoginForm from './components/Login.form.vue'
import { useI18n } from 'vue-i18n'

export default {
  name: 'LoginPage',
  components: { LoginForm },
  setup() {
    const { t } = useI18n()

    return { t }
  },
}
</script>

<template>
  <login-form />
  <div class="has-text-right">
    <router-link :to="{ name: 'forgotPassword' }">Forgot your password?</router-link>
  </div>
  <hr />
  <span class="mr-2"> Don't have an account? </span>
  <router-link :to="{ name: 'signup' }">{{ t('login.signUp') }}</router-link>
</template>



