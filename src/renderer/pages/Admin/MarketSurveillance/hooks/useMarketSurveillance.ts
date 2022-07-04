import { watch, computed, toRef } from 'vue'
import { useRoute } from 'vue-router'
import store, {
  getPriceDifferences,
  getQuantityDifferences,
  getFrequentOrders,
  getSelfTrades,
  getInvestorDifferencesByPrice,
  getTradePriceDifferences,
  getSplitOrder,
} from '/@/store/modules/Admin/market-surveillance.module'
import { dateToUnix } from '/@/utils/formatters'
import { GetTradePriceDifference } from '/@/models/admin/request'

const useMarketSurveillance = () => {
  const route = useRoute()

  watch(
    () => [route.params, route.query],
    () => {
      if (['adminMarketSurveillance'].includes(route.name as string)) {
        const query: GetTradePriceDifference = {
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
          case 'price-difference':
            getPriceDifferences(query)
            break
          case 'quantity-difference':
            getQuantityDifferences(query)
            break
          case 'frequent-order':
            getFrequentOrders(query)
            break
          case 'self-trade':
            getSelfTrades(query)
            break
          case 'difference-by-price':
            getInvestorDifferencesByPrice(query)
            break
          case 'trade-price-difference':
            getTradePriceDifferences(query)
            break
          case 'split-order':
            getSplitOrder(query)
            break
          default:
            break
        }
      }
    },
  )

  const items = computed(() => {
    switch (route.params.type) {
      case 'price-difference':
        return store.priceDifferences
      case 'quantity-difference':
        return store.quantityDifferences
      case 'frequent-order':
        return store.frequentOrders
      case 'self-trade':
        return store.selfTrades
      case 'difference-by-price':
        return store.invertorDiferencesByPrice
      case 'trade-price-difference':
        return store.investorTradePriceDifferences
      case 'split-order':
        return store.splitOrder
      default:
        return {}
    }
  })

  const loading = computed(() => {
    switch (route.params.type) {
      case 'price-difference':
        return store.loading.getPriceDifferences
      case 'quantity-difference':
        return store.loading.getQuantityDifferences
      case 'frequent-order':
        return store.loading.getFrequentOrders
      case 'self-trade':
        return store.loading.getSelfTrades
      case 'difference-by-price':
        return store.loading.getInvestorDifferencesByPrice
      case 'trade-price-difference':
        return store.loading.getTradePriceDifferences
      case 'split-order':
        return store.loading.getSplitOrder
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

export default useMarketSurveillance
