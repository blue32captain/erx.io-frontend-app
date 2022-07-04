import { TradingSymbol } from '/@/store/modules/App/types/trading-symbols.types'
import store, {
  getTradeSymbol,
  addTradeSymbol,
  modifyTradingSymbol,
} from '/@/store/modules/App/trading-symbols.module'
import { toRef, computed, onMounted, ref } from 'vue'
import { clone } from '/@/store/utils'

import { useRoute } from 'vue-router'

const useProducts = () => {
  const route = useRoute()

  const currentId = ref<string | number | null>(null)

  onMounted(() => {
    getTradeSymbol()

    if (route.params.id) {
      getById(route.params.id as string)
    }
  })

  const items = computed(() => {
    if (!store.items) {
      return []
    }
    return Object.values(store.items)
  })

  const getById = (id: string | number): void => {
    currentId.value = id
  }

  const current = computed<TradingSymbol | Record<string, never>>(() => {
    if (store.items && currentId.value) {
      const data = clone(store.items) as Record<string, TradingSymbol>

      if (data[currentId.value]) {
        return data[currentId.value]
      }
    }

    return {}
  })

  const loadingModify = computed(() => {
    return store.loading.modifyTradingSymbol || store.loading.addTradeSymbol
  })

  return {
    items,
    current,
    addTradeSymbol,
    getById,
    loading: toRef(store.loading, 'getTradeSymbol'),
    error: toRef(store.error, 'getTradeSymbol'),
    loadingModify,
    modifyTradingSymbol,
  }
}

export default useProducts
