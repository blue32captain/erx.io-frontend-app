import store, { getItems } from '/@/store/modules/Admin/investors.module'
import { toRef, watch } from 'vue'
import { useRoute } from 'vue-router'
import { GetInvestors } from '/@/models/admin/request'

const useInvestors = () => {
  const route = useRoute()

  watch(
    () => [route.params, route.query],
    () => {
      if (['adminInvestors'].includes(route.name as string)) {
        const query: GetInvestors = {
          limit: Number(route.query.limit) || 25,
          offset: (Number(route.query.page) - 1) * Number(route.query.limit) || 0,
        }

        switch (route.params.type) {
          case 'on-board':
            query.isOnboard = true
            break
          case 'rejected':
            query.isRejected = true
            break
          case 'closed':
            query.isClosed = true
            break
          default:
            break
        }

        getItems(query)
      }
    },
  )

  return {
    total: toRef(store, 'total'),
    items: toRef(store, 'items'),
    loading: toRef(store.loading, 'getItems'),
    error: toRef(store.error, 'getItems'),
  }
}

export default useInvestors
