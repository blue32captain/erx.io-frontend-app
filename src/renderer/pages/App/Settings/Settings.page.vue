<script lang="ts">
import { useI18n } from 'vue-i18n'
import RecoveryQuestionsForm from './components/RecoveryQuestions.form.vue'
import useAccount from './hooks/useAccount'
import { SetRecoveryQuestions, UpdateUserSettings } from '/@/models/app/request'
import UserDetailsForm from './components/UserDetails.form.vue'

export default {
  name: 'Support',
  components: { RecoveryQuestionsForm, UserDetailsForm },
  setup() {
    const { t } = useI18n()
    const {
      recoveryQuestions,
      setRecoveryQuestions,
      setRecoveryQuestionsLoading,
      userDetails,
      loading,
      setUserDetails,
    } = useAccount()

    function onSubmitQuestions(payload: SetRecoveryQuestions) {
      setRecoveryQuestions(payload)
    }

    function onSubmitUserDetails(payload: UpdateUserSettings) {
      setUserDetails(payload)
    }

    return {
      setRecoveryQuestionsLoading,
      recoveryQuestions,
      t,
      onSubmitQuestions,
      onSubmitUserDetails,
      userDetails,
      loading,
    }
  },
}
</script>

<template>
  <p class="has-text-info is-size-5 pb-2">{{ t('header.settings') }}</p>

  <v-columns>
    <v-column>
      <user-details-form
        :loading="loading"
        class="box has-border-gray"
        @submit="onSubmitUserDetails"
        :user="userDetails"/>
    </v-column>
    <v-column size="is-6">
      <recovery-questions-form
        class="box has-border-gray"
        v-if="recoveryQuestions"
        @submit="onSubmitQuestions"
        :recovery-questions="recoveryQuestions"
        :loading="setRecoveryQuestionsLoading"/>
    </v-column>
  </v-columns>
</template>


