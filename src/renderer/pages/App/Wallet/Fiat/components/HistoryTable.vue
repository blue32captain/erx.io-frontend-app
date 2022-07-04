<script lang="ts">
import { ref } from 'vue'
import { DataGrid } from '@pathscale/vue3-ui'

import HISTORY_TABLE_COLUMNS from '../constants/HistoryTable.constant'
import { useI18n } from 'vue-i18n'
import { Transaction } from '/@/store/modules/App/types/wallet.types'

export default {
  name: 'HistoryTable',
  props: {
    items: {
      type: Object as () => Record<string, Transaction>,
      default: () => ({}),
    },
    type: {
      type: String as () => 'deposit' | 'withdraw',
      default: 'widthdraw',
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
      const columns = HISTORY_TABLE_COLUMNS[props.type]
      columns.forEach(column => datagrid.value.addColumn(column.key, column.label, column.type))
    }

    generateColumns()

    Object.values(props.items).forEach(row => {
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
    class="sticky-table"
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
    <template #deposit="props">
      <v-button
        type="is-success"
        tag="router-link"
        :to="{ name: 'fiat', params: { type: 'deposit' } }">{{ t('btn.deposit') }}
      </v-button>
    </template>
    <template #withdraw="props">
      <v-button
        type="is-danger"
        tag="router-link"
        :to="{ name: 'fiat', params: { type: 'withdraw' } }">{{ t('btn.withdraw') }}
      </v-button>
    </template>
  </v-table>
</template>


