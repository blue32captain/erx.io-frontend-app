

<script lang="ts">
import { reactive } from 'vue'
import { useRoutedTabs } from '/@/hooks'
import { TABS } from './constants/products.contants'

import { DETAILS_TABS } from './constants/product.constant'

import { Actions } from '/@/components'

import useProducts from './hooks/useProducts'

import ProductForm from './components/Product.form.vue'
import { ModifyTradingSymbol } from '/@/models/admin/request'

export default {
  name: 'Product',
  components: { ProductForm, Actions },
  setup() {
    const { current: currentProduct, modifyTradingSymbol, loadingModify } = useProducts()
    const { currentTab } = useRoutedTabs(TABS, 'adminProducts')

    const state = reactive({
      showModal: false,
    })

    const toggleModal = () => {
      state.showModal = !state.showModal
    }

    const onSubmit = (payload: ModifyTradingSymbol) => {
      modifyTradingSymbol(payload)
    }

    return {
      loadingModify,
      state,
      currentProduct,
      currentTab,
      DETAILS_TABS,
      toggleModal,
      onSubmit,
    }
  },
}
</script>

<template>
  <product-form
    type="edit"
    v-if="state.showModal"
    @close="toggleModal"
    @submit="onSubmit"
    :current="currentProduct"
    :loading="loadingModify"/>

  <v-tabs v-model="currentTab" type="is-boxed" class="account-tabs">
    <v-tab :label="tab.label" v-for="tab in TABS" :key="tab.key" />
  </v-tabs>

  <div class="box">
    <v-columns>
      <v-column>
        <div class="subtitle">Product {{ currentProduct.tradingPairId }}</div>
      </v-column>

      <v-column>
        <actions @edit="toggleModal" :items="DETAILS_TABS[0].actions" />
      </v-column>
    </v-columns>

    <content-detail :current="currentProduct" />
  </div>
</template>

