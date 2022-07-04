import store, { getItems } from '/@/store/modules/Admin/oms-orders.module'
import { toRef, computed, watch, ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { GetOrders } from '/@/models/admin/request'
import { Order } from '/@/store/modules/Admin/types/oms-orders.type'
import { clone } from '/@/store/utils'

const useOMSOrders = () => {
  const route = useRoute()
  const currentId = ref<string | number | null>(null)

  onMounted(() => {
    if (route.params.id) {
      getById(route.params.id as string)
    }
  })

  watch(
    () => [route.params, route.query],
    () => {
      if (['adminOMSOrders'].includes(route.name as string)) {
        const query: GetOrders = {
          limit: Number(route.query.limit) || 25,
          offset: (Number(route.query.page) - 1) * Number(route.query.limit) || 0,
        }
        if (route?.query?.accountPublicId) {
          query.accountPublicId = Number(route.query.accountPublicId)
        }
        getItems(query)
      }
    },
  )

  const items = computed(() => {
    return Object.values(store.items)
  })

  const sellBook = computed(() => {
    const data = Object.values(store.items)
    return data.filter(e => e.status === 'traded')
  })

  const buyBook = computed(() => {
    const data = Object.values(store.items)
    return data.filter(e => e.status !== 'traded')
  })

  const current = computed(() => {
    if (store.items && currentId.value) {
      const data = clone(store.items) as Record<string, Order>

      if (data[currentId.value]) {
        return data[currentId.value]
      }
    }

    return {}
  })

  const getById = (id: string | number): void => {
    currentId.value = id
  }

  const getTotal = computed(() => {
    return store.totalBuy + store.totalSell
  })
  return {
    current,
    items,
    sellBook,
    buyBook,
    loading: toRef(store.loading, 'getItems'),
    error: toRef(store.error, 'getItems'),
    totalSell: toRef(store, 'totalSell'),
    totalBuy: toRef(store, 'totalBuy'),
    getTotal,
  }
}

export default useOMSOrders
