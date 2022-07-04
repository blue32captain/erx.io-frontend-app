<script lang="ts">
import { RECENT_TRADES_COLUMNS } from '../constants/orders.constant'

export default {
  name: 'RecentTrades',
  props: {
    trades: {
      type: Array as () => Array<{
        price: string
        qty: string
        time: string
        type: string
      }>,
      required: true,
      default: () => [],
    },
  },
  setup(props) {
    const getPriceClass = (row: typeof props.trades[0]) => {
      if (row.type === 'buy') {
        return 'has-text-success'
      }
      return 'has-text-danger'
    }

    return {
      RECENT_TRADES_COLUMNS,
      getPriceClass,
    }
  },
}
</script>

<template>
  <div class="p-2">Recent Trades</div>
  <basic-table :columns="RECENT_TRADES_COLUMNS" :items="trades">
    <template #price="props">
      <p :class="getPriceClass(props.price.row)">{{ props.price.row.price }}</p>
    </template>
  </basic-table>
</template>


