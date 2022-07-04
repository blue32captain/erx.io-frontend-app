<script lang="ts">
import TransactionsTable from './components/TransactionsTable.vue'
import useTransactions from './hooks/useTransactionsHistory'
import useCheckboxs from './hooks/useCheckboxs'
import { ref } from 'vue'

import { useI18n } from 'vue-i18n'

export default {
  name: 'Wallet',
  components: { TransactionsTable },

  setup() {
    const { t } = useI18n()
    const options = ['buy', 'sell', 'deposit', 'withdraw', 'transfer']
    const checkboxs = useCheckboxs(options)
    const currentCurrency = ref('all')

    const { items, currencies } = useTransactions(currentCurrency, checkboxs)

    return {
      currencies,
      checkboxs,
      items,
      currentCurrency,
      t,
    }
  },
}
</script>

<template>
  <p class="has-text-info is-size-5 pb-2">{{ t('header.transHistory') }}</p>

  <v-columns class="mb-3" mobile multiline vcentered>
    <v-column narrow v-for="(item, index) in checkboxs" :key="index">
      <v-checkbox v-model="item.value">
        <span class="ml-2">
          {{ t(`checkBox.${item.label}`) }}
        </span>
      </v-checkbox>
    </v-column>
    <v-column narrow>
      <v-select v-model="currentCurrency">
        <option value="all">{{ t('select.allAsset') }}</option>
        <option v-for="currency in currencies" :key="currency">{{ currency }}</option>
      </v-select>
    </v-column>
  </v-columns>

  <transactions-table class="my-2" :key="items" :items="items" />
</template>

