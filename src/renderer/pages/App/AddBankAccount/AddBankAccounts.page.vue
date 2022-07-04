<script lang="ts">
import { useI18n } from 'vue-i18n'
import AddBankAccountForm from './components/AddBankAccount.form.vue'

export default {
  name: 'AddBankAccount',
  components: {
    AddBankAccountForm,
  },
  setup() {
    const { t } = useI18n()
    return { t }
  },
}
</script>

<template>
  <div class="box p-6">
    <p class="has-text-info is-size-3">{{ t('header.bankAccManagement') }}</p>
    <p class="mt-2 mb-5">
      {{t('desc.addABankAcc')}}
    </p>
    <p class="is-size-5 mb-3 has-text-weight-medium">Bank Account Details</p>
    <add-bank-account-form />
  </div>
</template>

<style scoped>
.table-container {
  max-width: 1100px;
}
</style>
