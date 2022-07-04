<script lang="ts">
import { useRoutedTabs } from '/@/hooks'
import { TabContentLayout } from '/@/layouts'
import { DETAILS_TABS, ACCOUNT_COLUMNS_LIST } from './constants/account.constant'
import useAccounts from './hooks/useAccounts'
import { AccountDetails, AccountDetailsTable, AccountActions } from './components'

export default {
  name: 'Account',
  components: {
    TabContentLayout,
    AccountDetails,
    AccountDetailsTable,
    AccountActions,
  },
  setup() {
    const { currentTab, current } = useRoutedTabs(DETAILS_TABS)
    const { current: currentAccount } = useAccounts()

    const isDetails = (_current: number): boolean => {
      return _current === 0
    }

    return {
      current,
      isDetails,
      currentTab,
      DETAILS_TABS,
      currentAccount,
      ACCOUNT_COLUMNS_LIST,
    }
  },
}
</script>

<template>
  <v-tabs v-model="currentTab" type="is-boxed" class="account-tabs">
    <v-tab :label="tab.label" v-for="tab in DETAILS_TABS" :key="tab.key" />
  </v-tabs>
  <tab-content-layout :label="current.label">
    <template #actions>
      <account-actions />
    </template>
    <template #table>
      <template v-if="isDetails(currentTab)">
        <account-details :current="currentAccount" />
      </template>
      <template v-if="!isDetails(currentTab)">
        <account-details-table
          :columns="ACCOUNT_COLUMNS_LIST[currentTab]"
          :items="[]"
          :key="current"/>
      </template>
    </template>
  </tab-content-layout>
</template>

