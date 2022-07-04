import { makeState } from '../../makeState'

import {
  State,
  Mutations,
  Actions,
  PriceDifference,
  FrequentOrder,
  SelfTrade,
  InvestorDiferrenceByPrice,
} from './types/market-surveillance.types'
import tradeSymbol, { getTradeSymbol } from '../App/trading-symbols.module'

import { api } from '/@/api'
import { normalize } from '/@/store/utils'
import {
  GetFrequentOrders,
  GetMarketPriceDifference,
  GetMarketQuantityDifference,
  GetSelfTrade,
  GetInvestorDifferenceByPrice,
  GetTradePriceDifference,
  GetSplitOrder,
} from '/@/models/admin/request'
import {
  GetFrequentOrdersDone,
  GetInvestorDifferenceByPriceDone,
  GetMarketPriceDifferenceDone,
  GetMarketQuantityDifferenceDone,
  GetSelfTradeDone,
  GetSplitOrderDone,
  GetTradePriceDifferenceDone,
} from '/@/models/admin/response'

const slices = makeState<State, Mutations, Actions>({
  initialState: {
    priceDifferences: {},
    quantityDifferences: {},
    frequentOrders: {},
    selfTrades: {},
    invertorDiferencesByPrice: {},
    investorTradePriceDifferences: {},
    splitOrder: {},
    loading: {},
    error: {},
    total: 1000,
  },
  mutations: {
    // eslint-disable-next-line require-await
    async getPriceDifferences(state: State, payload: GetMarketPriceDifference) {
      if (!tradeSymbol.items) {
        await getTradeSymbol()
      }

      const { params } = await api.app.GetMarketPriceDifference<
        GetMarketPriceDifferenceDone,
        GetMarketPriceDifference
      >(payload)

      params.headers.push('id')
      params.data.forEach((order, index) => {
        order.push(`${index}`)
      })

      const data = normalize<PriceDifference>(params, 'id')

      Object.values(data).forEach(trade => {
        if (
          trade.currentTrade?.instrumentId &&
          tradeSymbol?.items?.[trade.currentTrade.instrumentId]
        ) {
          trade.token = tradeSymbol.items[trade.currentTrade.instrumentId].name
        }
        trade.orderPrice = trade.currentTrade.price
        trade.lastTradePrice = trade.previousTrade.price
      })

      state.priceDifferences = data
    },
    async getQuantityDifferences(state: State, payload: GetMarketQuantityDifference) {
      const { params } = await api.app.GetMarketQuantityDifference<
        GetMarketQuantityDifferenceDone,
        GetMarketQuantityDifference
      >(payload)
      const data = normalize<PriceDifference>(params, 'createdAt')

      state.quantityDifferences = data
    },
    async getFrequentOrders(state: State, payload: GetFrequentOrders) {
      if (!tradeSymbol.items) {
        await getTradeSymbol()
      }

      const { params } = await api.app.GetFrequentOrders<GetFrequentOrdersDone, GetFrequentOrders>(
        payload,
      )

      const data = normalize<FrequentOrder>(params, 'orderId')

      Object.values(data).forEach(trade => {
        if (trade?.instrumentId && tradeSymbol?.items?.[trade.instrumentId]) {
          trade.token = tradeSymbol.items[trade.instrumentId].name
        }
      })

      state.frequentOrders = data
    },
    async getSelfTrades(state: State, payload: GetSelfTrade) {
      if (!tradeSymbol.items) {
        await getTradeSymbol()
      }

      const { params } = await api.app.GetSelfTrade<GetSelfTradeDone, GetSelfTrade>(payload)
      const data = normalize<SelfTrade>(params, 'tradeId')

      Object.values(data).forEach(trade => {
        if (trade.tradeBuyer?.instrumentId && tradeSymbol?.items?.[trade.tradeBuyer.instrumentId]) {
          trade.token = tradeSymbol.items[trade.tradeBuyer.instrumentId].name
        }
      })

      state.selfTrades = data
    },
    async getInvestorDifferencesByPrice(state: State, payload: GetInvestorDifferenceByPrice) {
      if (!tradeSymbol.items) {
        await getTradeSymbol()
      }

      const { params } = await api.app.GetInvestorDifferenceByPrice<
        GetInvestorDifferenceByPriceDone,
        GetInvestorDifferenceByPrice
      >(payload)

      params.headers.push('id')
      params.data.forEach((order, index) => {
        order.push(`${index}`)
      })

      const data = normalize<InvestorDiferrenceByPrice>(params, 'id')

      Object.values(data).forEach(trade => {
        if (
          trade.orderDetail?.instrumentId &&
          tradeSymbol?.items?.[trade.orderDetail.instrumentId]
        ) {
          trade.token = tradeSymbol.items[trade.orderDetail.instrumentId].name
        }
        trade.side = trade.orderDetail.side
        trade.price = trade.orderDetail.limitPrice
        trade.quantity = trade.orderDetail.originalQuantity
      })

      state.invertorDiferencesByPrice = data
    },
    async getTradePriceDifferences(state: State, payload: GetTradePriceDifference) {
      if (!tradeSymbol.items) {
        await getTradeSymbol()
      }

      const { params } = await api.app.GetTradePriceDifference<
        GetTradePriceDifferenceDone,
        GetTradePriceDifference
      >(payload)

      console.log(params)

      // params.headers.push('id')
      // params.data.forEach((order, index) => {
      //   order.push(`${index}`)
      // })

      // const data = normalize<InvestorDiferrenceByPrice>(params, 'id')

      // console.log('--------data--------', data)

      // Object.values(data).forEach(trade => {
      //   if (
      //     trade.orderDetail?.instrumentId &&
      //     tradeSymbol?.items?.[trade.orderDetail.instrumentId]
      //   ) {
      //     trade.token = tradeSymbol.items[trade.orderDetail.instrumentId].name
      //   }
      //   trade.side = trade.orderDetail.side
      //   trade.price = trade.orderDetail.limitPrice
      //   trade.quantity = trade.orderDetail.originalQuantity
      // })

      // state.investorTradePriceDifferences = data
    },
    async getSplitOrder(state: State, payload: GetSplitOrder) {
      if (!tradeSymbol.items) {
        await getTradeSymbol()
      }

      const { params } = await api.app.GetSplitOrder<GetSplitOrderDone, GetSplitOrder>(payload)

      console.log(params)

      // params.headers.push('id')
      // params.data.forEach((order, index) => {
      //   order.push(`${index}`)
      // })

      // const data = normalize<InvestorDiferrenceByPrice>(params, 'id')

      // console.log('--------data--------', data)

      // Object.values(data).forEach(trade => {
      //   if (
      //     trade.orderDetail?.instrumentId &&
      //     tradeSymbol?.items?.[trade.orderDetail.instrumentId]
      //   ) {
      //     trade.token = tradeSymbol.items[trade.orderDetail.instrumentId].name
      //   }
      //   trade.side = trade.orderDetail.side
      //   trade.price = trade.orderDetail.limitPrice
      //   trade.quantity = trade.orderDetail.originalQuantity
      // })

      // state.investorTradePriceDifferences = data
    },
    getTotal(state: State) {
      // TDOD: add call from backend when done

      state.total = 1000
    },
  },
})

export default slices.state

export const {
  getPriceDifferences,
  getQuantityDifferences,
  getFrequentOrders,
  getSelfTrades,
  getInvestorDifferencesByPrice,
  getTradePriceDifferences,
  getSplitOrder,
  getTotal,
} = slices.actions
