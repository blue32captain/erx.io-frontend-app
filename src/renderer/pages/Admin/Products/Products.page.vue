<script lang="ts">
// import { useI18n } from 'vue-i18n'
import { watch, ref, toRaw } from 'vue'
import { useRoutedTabs } from '/@/hooks'
import { Actions } from '/@/components'
import { exportToCsv } from '/@/utils/csv'
import { TabContentLayout } from '/@/layouts'

import { TABS } from './constants/products.contants'
import ProductsTable from './components/ProductsTable.vue'
import useProducts from './hooks/useProducts'
import ProductForm from './components/Product.form.vue'
import { AddTradingSymbol } from '/@/models/admin/request'

export default {
  name: 'Products',
  components: {
    TabContentLayout,
    ProductsTable,
    Actions,
    ProductForm,
  },
  setup() {
    // const { t } = useI18n()
    const isVisible = ref(false)
    const activeTab = ref('table')
    const { currentTab, current } = useRoutedTabs(TABS)
    const { items, loading, addTradeSymbol, loadingModify } = useProducts(current)

    watch([items, currentTab], ([items, current]) => {
      activeTab.value = `${items.length} + ${current}`
    })

    const onClickCSV = () => {
      exportToCsv(`products_${current.value.path}`, toRaw(items.value))
    }

    const handleModal = (): void => {
      isVisible.value = !isVisible.value
    }

    const onSubmit = (values: AddTradingSymbol): void => {
      addTradeSymbol(values)
    }

    return {
      isVisible,
      currentTab,
      current,
      TABS,
      items,
      activeTab,
      loading,
      onClickCSV,
      handleModal,
      onSubmit,
      loadingModify,
    }
  },
}
</script>

<template>
  <product-form v-if="isVisible" @close="handleModal" @submit="onSubmit" :loading="loadingModify" />
  <v-tabs v-model="currentTab" type="is-boxed" class="account-tabs">
    <v-tab :label="tab.label" v-for="tab in TABS" :key="tab.key" />
  </v-tabs>
  <tab-content-layout :label="current.label">
    <template #actions>
      <actions @add="handleModal" @csv="onClickCSV" :items="current.actions" />
    </template>
    <template #table>
      <products-table
        :loading="loading"
        :columns="current.columns"
        :items="items"
        :key="activeTab"/>
    </template>
  </tab-content-layout>
</template>

