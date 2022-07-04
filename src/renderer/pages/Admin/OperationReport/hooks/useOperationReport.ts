import { computed, toRef, watch } from 'vue'
import { useRoute } from 'vue-router'
import store, {
  getInvestorStrReports,
  getNegativeBalances,
  getAmloReports,
} from '/@/store/modules/Admin/operation-reports.module'

import { dateToUnix } from '/@/utils/formatters'
import { GetStrReportDetails } from '/@/models/admin/request'

const useOperationReport = () => {
  const route = useRoute()

  watch(
    () => [route.params, route.query],
    () => {
      if (['adminOperationReport'].includes(route.name as string)) {
        const query: GetStrReportDetails = {
          limit: Number(route.query.limit) || 25,
          offset: (Number(route.query.page) - 1) * Number(route.query.limit) || 0,
        }

        if (route.query.beginTime && route.query.endTime) {
          Object.assign(query, {
            beginTime: dateToUnix(route.query.beginTime as string),
            endTime: dateToUnix(route.query.endTime as string),
          })
        }

        console.log('query', query)

        switch (route.params.type) {
          case 'str-report':
            getInvestorStrReports(query)
            break
          case 'negative-balance':
            getNegativeBalances(query)
            break
          case 'amlo-report':
            getAmloReports(query)
            break
          default:
            break
        }
      }
    },
  )

  const items = computed(() => {
    switch (route.params.type) {
      case 'str-report':
        return store.investorStrReports
      case 'negative-balance':
        return store.negativeBalances
      case 'amlo-report':
        return store.amloReports
      default:
        return {}
    }
  })

  const loading = computed(() => {
    switch (route.params.type) {
      case 'str-report':
        return store.loading.getInvestorStrReports
      case 'negative-balance':
        return store.loading.getNegativeBalances
      case 'amlo-report':
        return store.loading.getAmloReport
      default:
        return false
    }
  })

  return {
    items,
    loading,
    total: toRef(store, 'total'),
  }
}

export default useOperationReport
