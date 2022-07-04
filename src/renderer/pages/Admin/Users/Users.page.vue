<script lang="ts">
// import { useI18n } from 'vue-i18n'
import { toRaw } from 'vue'
import { useRoutedTabs } from '/@/hooks'
import { exportToCsv } from '/@/utils/csv'
import { Actions } from '/@/components'

import { TABS, COLUMNS_LIST } from './constants/users.constant'
import { TabContentLayout } from '/@/layouts'
import { UsersTable } from './components'

import useUsers from './hooks/useUsers'

export default {
  name: 'Users',
  components: {
    TabContentLayout,
    UsersTable,
    Actions,
  },
  setup() {
    const { currentTab, current } = useRoutedTabs(TABS)
    const { items, loading, total } = useUsers()

    const onClickCSV = () => {
      exportToCsv(`users_${current.value.path}`, Object.values(toRaw(items.value)))
    }

    return {
      items,
      TABS,
      currentTab,
      current,
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
      <users-table
        :loading="loading"
        :columns="COLUMNS_LIST[currentTab]"
        :items="items"
        :total="total"/>
    </template>
  </tab-content-layout>
</template>

