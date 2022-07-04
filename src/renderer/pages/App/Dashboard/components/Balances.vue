<script lang="ts">
import BalancesTable from '../../Wallet/components/BalancesTable.vue'

import { useI18n } from 'vue-i18n'
import { Balance } from '/@/store/modules/App/types/wallet.types'

export default {
  name: 'Balances',
  components: { BalancesTable },
  inheritAttrs: false,
  props: {
    items: {
      type: Object as () => Record<string, Balance>,
      default: () => ({}),
    },
    totalValue: {
      type: Number,
      default: 0,
    },
  },
  setup() {
    const { t } = useI18n()
    return {
      t,
    }
  },
}
</script>

<template>
  <div class="box has-border-gray">
    <div class="has-text-info is-size-5 mb-2">{{ t('title.totalValue') }}</div>
    <div class="subtitle has-text-black">
      ฿
      <span>{{ totalValue }}</span>
    </div>
    <balances-table :items="items" simplified v-bind="$attrs" />
  </div>
</template>
