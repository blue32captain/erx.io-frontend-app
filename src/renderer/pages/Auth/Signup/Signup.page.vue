<script lang="ts">
import SignupForm from './components/Signup.form.vue'
import { useI18n } from 'vue-i18n'

export default {
  name: 'SignupPage',
  components: { SignupForm },
  setup() {
    const { t } = useI18n()

    return { t }
  },
}
</script>

<template>
  <signup-form />
  <span class="mr-2">
    {{ t('login.haveYouSignedUp') }}
  </span>
  <router-link :to="{ name: 'login' }">{{ t('login.signIn') }}</router-link>
</template>
