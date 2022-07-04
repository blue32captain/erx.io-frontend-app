<script lang="ts">
import { useI18n } from 'vue-i18n'
import BankAccountsList from './components/BankAccountsList.vue'

export default {
  name: 'BankAccount',
  components: {
    BankAccountsList,
  },
  setup() {
    const { t } = useI18n()

    const items = [
      {
        bank: 'THAILAND CLEARING HOUSE CO., LTD.',
        accountNumber: '2343324324235',
        status: 'verified',
        isPrimary: true,
      },
      {
        bank: 'CTBC BANK CO., LTD.',
        accountNumber: '555',
        status: 'pending',
        isPrimary: false,
      },
    ]

    return {
      t,
      items,
    }
  },
}
</script>

<template>
  <p class="has-text-info is-size-5 pb-2">{{ t('header.bankAccManagement') }}</p>
  <div class="is-flex is-justify-content-space-between is-align-items-center">
    <p class="my-5">
      {{ t('desc.bankAccManagement') }}
    </p>
    <v-button
      tag="router-link"
      :to="{ name: 'addBankAccounts' }"
      class="disabled my-5 is-capitalized"
      type="is-primary">
      {{ t('title.addBankAcc') }}
    </v-button>
  </div>
  <bank-accounts-list :items="items" class="box" />
</template>

<style scoped>
.table-container {
  max-width: 1100px;
}
</style>

