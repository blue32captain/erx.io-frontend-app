<script lang="ts">
import { ORDER_BOOK_COLUMNS } from '../constants/orders.constant'
import { computed } from 'vue'

export default {
  name: 'OrderBook',
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

    const buys = computed(() => props.trades.filter(trade => trade.type === 'buy'))
    const sells = computed(() => props.trades.filter(trade => trade.type === 'sell'))

    return {
      ORDER_BOOK_COLUMNS,
      getPriceClass,
      buys,
      sells,
    }
  },
}
</script>

<template>
  <div class="p-2">Order Book</div>
  <div class="v-table has-text-grey-light" loading="false">
    <div class="table-wrapper table-container">
      <table class="table is-hoverable is-fullwidth" style="position: relative;">
        <thead class="thead">
          <tr class="tr">
            <th class="th" width="35%">Price</th>
            <th class="th" width="30%">Qty</th>
            <th class="th" width="35%">My Size</th>
          </tr>
        </thead>
      </table>
    </div>
  </div>

  <div class="is-flex is-flex-direction-column is-justify-content-center is-flex-1">
    <basic-table :columns="ORDER_BOOK_COLUMNS" :items="buys" class="headless-table">
      <template #price="props">
        <p :class="getPriceClass(props.price.row)">{{ props.price.row.price }}</p>
      </template>
      <template #mySize="props">
        <p class="has-text-white">{{ props.mySize.row.mySize }}</p>
      </template>
    </basic-table>

    <basic-table :columns="ORDER_BOOK_COLUMNS" :items="sells" class="headless-table">
      <template #header> <div class="p-2">Spread 5.00</div> </template>

      <template #price="props">
        <p :class="getPriceClass(props.price.row)">{{ props.price.row.price }}</p>
      </template>
      <template #mySize="props">
        <p class="has-text-white">{{ props.mySize.row.mySize }}</p>
      </template>
    </basic-table>
  </div>
</template>

<style>
.headless-table .thead {
  display: none;
}
</style>


