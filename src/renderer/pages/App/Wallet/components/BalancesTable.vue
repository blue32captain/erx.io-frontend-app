<script lang="ts">
import { ref } from 'vue'
import { DataGrid } from '@pathscale/vue3-ui'

import BALANCES_TABLE_COLUMNS from '../constants/BalancesTable.constant'
import { useI18n } from 'vue-i18n'
import { Balance } from '/@/store/modules/App/types/wallet.types'

export default {
  name: 'BalancesTable',
  props: {
    items: {
      type: Object as () => Record<string, Balance>,
      default: () => ({}),
    },
    simplified: {
      type: Boolean,
      default: false,
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
      const columns = props.simplified
        ? BALANCES_TABLE_COLUMNS.simplified
        : BALANCES_TABLE_COLUMNS.detailed

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
    <template #change24h="props">
      <span>{{ props.row.change24h }}%</span>
    </template>

    <template #price="props">
      <span>฿ {{ props.row.price }}</span>
    </template>

    <template #value="props">
      <span>฿ {{ props.row.value }}</span>
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

