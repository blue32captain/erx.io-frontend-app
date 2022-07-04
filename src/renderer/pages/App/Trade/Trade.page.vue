<script lang="ts">
// import { useI18n } from 'vue-i18n'
import useProducts from '/@/pages/Admin/Products/hooks/useProducts'
import { PairDetails, Chart, Orders, Order, RecentTrades, OrderBook } from './components'
import { computed, ref, watchEffect } from 'vue'

export default {
  name: 'Trade',
  components: { PairDetails, Chart, Orders, Order, RecentTrades, OrderBook },
  setup() {
    // const { t } = useI18n()

    const { items, loading } = useProducts()

    const pair = ref({})

    watchEffect(() => {
      if (items.value.length) {
        pair.value = items.value[0]
      }
    })

    const recentTrades = computed(() => {
      console.log(pair.value)
      const recentTradesItems = []

      for (let i = 0; i < 20; i++) {
        recentTradesItems.push({
          price: '140.00',
          qty: (Math.random() * 10).toFixed(2),
          time: '21:59:59',
          type: Math.random() > 0.5 ? 'buy' : 'sell',
        })
      }

      return recentTradesItems
    })

    const orderBook = computed(() => {
      console.log(pair.value)

      const orderBookItems = []

      for (let i = 0; i < 8; i++) {
        orderBookItems.push({
          price: '140.00',
          qty: (Math.random() * 10).toFixed(2),
          mySize: '______',
          type: i % 2 ? 'buy' : 'sell',
        })
      }

      return orderBookItems
    })

    return {
      // t,
      items,
      loading,
      recentTrades,
      orderBook,
      pair,
    }
  },
}
</script>

<template>
  <div class="has-border-gray has-background-white">
    <div class="has-border-gray mb-0">
      <pair-details v-model:pair="pair" :items="items" :loading="loading" />
    </div>

    <v-columns gapless>
      <v-column size="is-9">
        <v-columns gapless class="mb-0">
          <v-column size="is-6">
            <div class="has-border-gray h-500"><chart /></div>
          </v-column>
          <v-column>
            <div class="has-border-gray h-500 is-flex is-flex-direction-column">
              <order-book :trades="orderBook" />
            </div>
          </v-column>
          <v-column>
            <div class="has-border-gray h-500">
              <recent-trades :trades="recentTrades" />
            </div>
          </v-column>
        </v-columns>

        <v-columns gapless>
          <v-column>
            <div class="h-200"><orders /></div>
          </v-column>
        </v-columns>
      </v-column>

      <v-column>
        <div class="has-border-gray h-200"><order /></div>
      </v-column>
    </v-columns>
  </div>
</template>

<style scoped>
.h-500 {
  height: 500px;
  min-height: 100%;
  overflow-y: auto;
}

.h-200 {
  min-height: 200px;
  height: 100%;
  max-width: calc(100vw - 2rem); /* 2rem is the padding of the section in mobile */
}
</style>



