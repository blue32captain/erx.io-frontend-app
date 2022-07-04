<script lang="ts">
import { useI18n } from 'vue-i18n'

import { useRoutedTabs } from '/@/hooks'

import Deposit from './Deposit.page.vue'
import Withdraw from './Withdraw.page.vue'

export default {
  name: 'Fiat',
  components: { Deposit, Withdraw },
  setup() {
    const { t } = useI18n()

    const TABS = [
      {
        label: t('btn.deposit'),
        path: 'deposit',
        component: 'Deposit',
      },
      {
        label: t('btn.withdraw'),
        path: 'withdraw',
        component: 'Withdraw',
      },
    ]

    const { currentTab, current } = useRoutedTabs(TABS)

    return {
      t,
      TABS,
      currentTab,
      current,
    }
  },
}
</script>

<template>
  <p class="has-text-info is-size-5 pb-2">{{ t('title.thaibaht') }}</p>

  <v-tabs v-model="currentTab" type="is-boxed" class="fiat-tabs">
    <v-tab :label="tab.label" v-for="tab in TABS" :key="tab.key" />
  </v-tabs>

  <component :is="current.component" />
</template>

<style>
.fiat-tabs .tabs:not(:last-child) {
  margin-bottom: 0 !important;
}
</style>
