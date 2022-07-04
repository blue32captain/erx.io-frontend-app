<script lang="ts">
import { ref } from 'vue'
import { DataGrid } from '@pathscale/vue3-ui'

import BALANCES_TABLE_COLUMNS from '../constants/TransactionsTable.constant'
import { useI18n } from 'vue-i18n'
import { Transaction } from '/@/store/modules/App/types/wallet.types'

export default {
  name: 'TransactionsTable',
  props: {
    items: {
      type: Array as () => Array<Transaction>,
      default: () => [],
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const datagrid = ref(new DataGrid())
    const { t } = useI18n()

    const generateColumns = () => {
      const columns = BALANCES_TABLE_COLUMNS
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
  <v-table
    mobile-cards
    sticky
    :data="datagrid"
    fullwidth
    :rows-per-page="20"
    pagination
    hoverable
    :rows-per-page-options="[20, 50, 70, 100]">
    <template #header>
      <loader :loading="loading" />
    </template>
  </v-table>
</template>

