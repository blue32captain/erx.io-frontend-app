<script lang="ts">
import { ref } from 'vue'
import { DataGrid } from '@pathscale/vue3-ui'
import { WalletBalance } from '/@/models/WalletBalance.model'

import BANK_ACCOUNTS_TABLE_COLUMNS from '../constants/BankAccountsTable.constant'
import { useI18n } from 'vue-i18n'

export default {
  name: 'BankAccountsList',
  props: {
    items: {
      type: Array as () => Array<WalletBalance>,
      default: () => [],
    },
  },
  setup(props) {
    const datagrid = ref(new DataGrid())
    const { t } = useI18n()

    const generateColumns = () => {
      const columns = BANK_ACCOUNTS_TABLE_COLUMNS
      columns.forEach(column => datagrid.value.addColumn(column.key, column.label, column.type))
    }

    generateColumns()

    props.items.forEach(row => {
      datagrid.value.addRow(row)
    })

    return {
      datagrid,
      t,
    }
  },
}
</script>

<template>
  <v-table mobile-cards class="bank-account-table" :data="datagrid" fullwidth :rows-per-page="20">
    <template #isPrimary="props">
      <span v-if="props.row.isPrimary">
        {{ t('bankAcc.primary') }}
      </span>
      <span v-else />
    </template>
    <template #footer>
      <v-button class="is-pulled-right" disabled> Change </v-button>
    </template>
  </v-table>
</template>

<style>
.bank-account-table .table td,
.bank-account-table .table th {
  border: none !important;
}
</style>

