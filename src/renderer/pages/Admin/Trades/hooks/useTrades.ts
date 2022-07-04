import { Trades } from '/@/store/modules/Admin/types/trades.type'
import store, { getItems } from '/@/store/modules/Admin/trades.module'
import { toRef, computed, ref, watch, onMounted } from 'vue'
import { clone } from '/@/store/utils'
import { useRoute } from 'vue-router'
import { GetTrades } from '/@/models/admin/request'

const useTrades = () => {
  const currentId = ref<string | number | null>(null)

  const route = useRoute()

  onMounted(() => {
    if (route.params.id) {
      getById(route.params.id as string)
    }
  })

  watch(
    () => [route.params, route.query],
    () => {
      if (['adminTrades'].includes(route.name as string)) {
        const query: GetTrades = {
          limit: Number(route.query.limit) || 25,
          offset: (Number(route.query.page) - 1) * Number(route.query.limit) || 0,
          isBlocked: route.params.type === 'block-trades',
        }

        getItems(query)
      }
    },
  )

  const items = computed(() => {
    return Object.values(store.items)
  })

  const current = computed(() => {
    if (store.items && currentId.value) {
      const data = clone(store.items) as Record<string, Trades>

      if (data[currentId.value]) {
        return data[currentId.value]
      }
    }

    return {}
  })

  const getById = (id: string | number): void => {
    currentId.value = id
  }

  return {
    items,
    current,
    getById,
    loading: toRef(store.loading, 'getItems'),
    error: toRef(store.error, 'getItems'),
    total: toRef(store, 'total'),
  }
}

export default useTrades
