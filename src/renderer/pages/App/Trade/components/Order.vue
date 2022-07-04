<script>
import { ref, watchEffect } from 'vue'
import { useCssVariables } from 'vue-composable'
import OrderForm from './Order.form.vue'
import { formatCamelCase } from '/@/utils/formatters'

import { ORDER_BALANCE_COLUMNS } from '../constants/orders.constant'

const ACTIONS = ['buy', 'sell']
const TYPES = ['market', 'limit', 'stop']

export default {
  name: 'Order',
  components: {
    OrderForm,
  },
  setup() {
    const activeTab = ref(0)
    const actionTab = ref(0)
    const typeTab = ref(0)

    watchEffect(() => {
      useCssVariables([
        {
          name: '--blm-tabs-tgl-link-act-bg-clr',
          value: actionTab.value ? 'var(--blm-dang)' : 'var(--blm-sucs)',
        },
        {
          name: '--blm-tabs-tgl-link-act-bd-clr',
          value: actionTab.value ? 'var(--blm-dang)' : 'var(--blm-sucs)',
        },
      ])
    })

    const balanceItems = [
      {
        product: 'Available Balance',
        XTZ: '-',
        THB: '-',
      },

      {
        product: 'Hold',
        XTZ: '-',
        THB: '-',
      },
      {
        product: 'Pending Deposits',
        XTZ: '-',
        THB: '-',
      },
      {
        product: 'Total Balance',
        XTZ: '-',
        THB: '-',
      },
    ]

    return {
      activeTab,
      actionTab,
      typeTab,
      ACTIONS,
      TYPES,
      formatCamelCase,
      ORDER_BALANCE_COLUMNS,
      balanceItems,
    }
  },
}
</script>

<template>
  <v-tabs v-model="activeTab" expanded class="mb-0">
    <v-tab label="Order Entry">
      <div class="py-2 px-2">
        <v-tabs v-model="actionTab" expanded class="mb-0">
          <v-tab :label="formatCamelCase(action)" v-for="action in ACTIONS" :key="action">
            <div class="py-2 px-2">
              <p class="py-2">Order Type</p>

              <v-tabs v-model="typeTab" expanded type="is-toggle">
                <v-tab
                  :label="formatCamelCase(actionType)"
                  v-for="actionType in TYPES"
                  :key="actionType">
                  <order-form :action="action" :action-type="actionType" />
                </v-tab>
              </v-tabs>
            </div>
          </v-tab>
        </v-tabs>
      </div>
    </v-tab>
    <v-tab label="Balances"><div class="py-2 px-2">
        <basic-table :items="balanceItems" :columns="ORDER_BALANCE_COLUMNS" />
      </div>
    </v-tab>
  </v-tabs>
</template>
