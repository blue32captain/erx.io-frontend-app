<script lang="ts">
import useProducts from '/@/pages/Admin/Products/hooks/useProducts'

export default {
  name: 'FilterByproduct',
  setup() {
    const { items } = useProducts()
    return {
      items,
    }
  },
}
</script>

<template>
  <v-field class="mb-0 mr-4">
    <v-select v-if="items" color="is-info" placeholder="Info" size="is-normal">
      <option v-for="item in items" :key="item.tradingPairId" :value="item.tradingPairId">
        {{ item.name }}
      </option>
    </v-select>
  </v-field>
</template>
