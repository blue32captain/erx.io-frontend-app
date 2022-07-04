<script lang="ts">
// import { useI18n } from 'vue-i18n'
import { ref } from 'vue'
import { clone } from '/@/store/utils'
import { exportToCsv } from '/@/utils/csv'
import { Actions } from '/@/components'

import useReports from './hooks/useReports'
import { TabContentLayout } from '/@/layouts'
import DuplicateAddressTable from './components/DuplicateAddressTable.vue'

import { DUPLICATE_ADDRESS_COLUMNS } from './constants/reports.contants'

const actions = [
  {
    event: 'csv',
    text: 'Export CSV',
  },
]

export default {
  name: 'DuplicateAddress',
  components: {
    TabContentLayout,
    DuplicateAddressTable,
    Actions,
  },
  setup() {
    // const { t } = useI18n()
    const defaultTab = ref(0)
    const { items, loading } = useReports()

    const onClickCSV = () => {
      exportToCsv('duplicate_address_csv', clone(items.value))
    }

    return {
      defaultTab,
      items,
      DUPLICATE_ADDRESS_COLUMNS,
      onClickCSV,
      loading,
      actions,
    }
  },
}
</script>

<template>
  <v-tabs v-model="defaultTab" type="is-boxed" class="account-tabs">
    <v-tab label="Duplicate Address" />
  </v-tabs>
  <tab-content-layout label="Duplicate Address">
    <template #actions>
      <actions :items="actions" @csv="onClickCSV" />
    </template>
    <template #table>
      <duplicate-address-table
        :loading="loading"
        :columns="DUPLICATE_ADDRESS_COLUMNS"
        :items="items"
        :key="items"/>
    </template>
  </tab-content-layout>
</template>

