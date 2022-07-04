<script lang="ts">
import { computed, ref, watchEffect } from 'vue'

import { TradingSymbol } from '/@/store/modules/App/types/trading-symbols.types'

export default {
  name: 'PairDetails',
  props: {
    pair: {
      type: Object as () => TradingSymbol,
      required: true,
    },
    items: {
      type: Array as () => Array<TradingSymbol>,
      required: true,
    },
    loading: {
      type: Boolean,
    },
  },
  emits: ['update:pair'],
  setup(props, { emit }) {
    const currentPair = ref(props.pair)

    watchEffect(() => {
      emit('update:pair', currentPair.value)
    })

    watchEffect(() => {
      currentPair.value = props.pair
    })

    const computedPair = computed(() => {
      return {
        ...currentPair.value,
        lastPrice: Math.random() * 100,
        porcentageChange24: ((Math.random() * 1000) % 200) - 100,
        bid: Math.random() * 100,
        ask: Math.random() * 100,
        hourVolume24: Math.random() * 100,
        hourLow24: Math.random() * 100,
        hourHight24: Math.random() * 100,
      }
    })

    const getLabelClass = (porcentageChange24: number) => {
      if (porcentageChange24 > 0) {
        return 'has-text-success'
      } else if (porcentageChange24 < 0) {
        return 'has-text-danger'
      }
      return 'has-text-grey'
    }

    return {
      getLabelClass,
      currentPair,
      computedPair,
    }
  },
}
</script>

<template>
  <!--  eslint-disable @pathscale/vue3/v-directive  -->
  <v-columns class="px-3 py-3" mobile multiline>
    <v-column>
      <v-select v-model="currentPair" :loading="loading">
        <option v-for="item in items" :key="item.name" :value="item">{{ item.name }}</option>
      </v-select>
    </v-column>
    <v-column>
      <v-field :label="computedPair.lastPrice?.toFixed(2)"> Last Price </v-field>
    </v-column>

    <v-column>
      <div class="field">
        <label class="label" :class="getLabelClass(computedPair.porcentageChange24)">{{ computedPair.porcentageChange24?.toFixed(2) }}%</label>
        24 hour prc Chg
      </div>
    </v-column>

    <v-column>
      <div class="field">
        <label class="label has-text-success">{{ computedPair.bid?.toFixed(2) }}</label>
        Bid
      </div>
    </v-column>

    <v-column>
      <div class="field">
        <label class="label has-text-danger">{{ computedPair.ask?.toFixed(2) }}</label>
        Ask
      </div>
    </v-column>

    <v-column>
      <v-field :label="computedPair.hourVolume24?.toFixed(2)"> 24 hour Volume </v-field>
    </v-column>
    <v-column>
      <v-field :label="computedPair.hourLow24?.toFixed(2)"> 24 hour Low </v-field>
    </v-column>
    <v-column>
      <v-field :label="computedPair.hourHight24?.toFixed(2)"> 24 hour High </v-field>
    </v-column>
  </v-columns>
</template>



