import store, { getItems } from '/@/store/modules/Admin/account.module'
import { toRef, computed, ref, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { clone } from '/@/store/utils'
import { GetAccounts } from '/@/models/admin/request'
import { Account } from '/@/models/Account.model'

const useAccounts = () => {
  const currentId = ref<string | number | null>(null)
  const route = useRoute()

  onMounted(() => {
    if (route.params?.id) {
      getById(route.params?.id as string)
    }
  })

  watch(
    () => [route.params, route.query],
    () => {
      // debugger
      if (['adminAccounts'].includes(route.name as string)) {
        const query: GetAccounts = {
          limit: Number(route.query.limit) || 25,
          offset: (Number(route.query.page) - 1) * Number(route.query.limit) || 0,
          negativeBalance: route.params.type === 'negative-balances',
          isBlocked: route.params.type === 'frozen-accounts',
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

  const current = computed(() => {
    if (store.items && currentId.value) {
      const data = clone(store.items) as Record<string, Account>

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
    total: toRef(store, 'total'),
    items,
    current,
    getById,
    loading: toRef(store.loading, 'getItems'),
    error: toRef(store.error, 'getItems'),
  }
}

export default useAccounts
