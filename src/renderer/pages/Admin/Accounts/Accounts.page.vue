<script lang="ts">
// import { useI18n } from 'vue-i18n'
import { toRaw } from 'vue'
import { useRoutedTabs } from '/@/hooks'
import { Actions } from '/@/components/'

import { exportToCsv } from '/@/utils/csv'
import AccountTable from './components/AccountTable.vue'
import TabContentLayout from './layouts/TabContent.layout.vue'
import useAccounts from './hooks/useAccounts'
import { TABS, COLUMNS_LIST } from './constants/accounts.constant'

export default {
  name: 'Accounts',
  components: {
    TabContentLayout,
    AccountTable,
    Actions,
  },
  setup() {
    // const { t } = useI18n()
    const { currentTab, current } = useRoutedTabs(TABS)
    const { items, loading, total } = useAccounts()

    const onClickCSV = () => {
      exportToCsv(`accounts_${current.value.path}`, toRaw(items.value))
    }

    return {
      // t,
      TABS,
      currentTab,
      current,
      items,
      COLUMNS_LIST,
      onClickCSV,
      loading,
      total,
    }
  },
}
</script>

<template>
  <v-tabs v-model="currentTab" type="is-boxed" class="account-tabs">
    <v-tab :label="tab.label" v-for="tab in TABS" :key="tab.key" />
  </v-tabs>
  <tab-content-layout :label="current.label">
    <template #actions>
      <actions @csv="onClickCSV" :items="current.actions" />
    </template>
    <template #table>
      <account-table
        :loading="loading"
        :columns="COLUMNS_LIST[currentTab]"
        :items="items"
        :total="total"/>
    </template>
  </tab-content-layout>
</template>

<style>
.account-tabs .tabs {
  margin-bottom: 0;
}
</style>
