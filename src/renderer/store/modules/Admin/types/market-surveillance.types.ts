import {
  GetFrequentOrders,
  GetInvestorDifferenceByPrice,
  GetMarketPriceDifference,
  GetMarketQuantityDifference,
  GetSelfTrade,
  GetSplitOrder,
  GetTradePriceDifference,
} from '/@/models/admin/request'

export interface PriceDifference {
  createdAt: number
  percentageDifference: number
  thresholdPercentageDifference: number
  thresholdTimespan: number
  previousTrade: Trade
  currentTrade: Trade
  token: string
  orderPrice: number
  lastTradePrice: number
}

export interface Trade {
  side: string
  price: number
  orderId: number
  tradeId: number
  quantity: number
  accountId: number
  timestamp: number
  instrumentId: number
}

export interface FrequentOrder {
  reportDate: number
  createdAt: number
  updatedAt: number
  thresholdFrequency: number
  thresholdTimespan: number
  isCancelled: boolean
  cancelOrder: CancelOrder
  orderType: string
  accountId: number
  instrumentId: string
  limitPrice: number
  stateChangedReason: string
  state: string
  side: string
  orderId: number
  ipAddress: string
  displayQuantity: number
  originalQuantity: number
  remainingQuantity: number
  executedQuantity: number
  token: string
}

export interface CancelOrder {
  side: string
  state: string
  orderId: number
  accountId: number
  ipAddress: string
  orderType: string
  timestamp: number
  limitPrice: number
  instrumentId: number
  displayQuantity: number
  executedQuantity: number
  originalQuantity: number
  remainingQuantity: number
  stateChangedReason: string
}

export interface SelfTrade {
  createdAt: number
  ipAddress: string
  tradeId: number
  orderBuyer: Order
  orderSeller: Order
  tradeBuyer: Trade
  tradeSeller: Trade
  token: string
}

export interface Order {
  side: string
  state: string
  orderId: number
  accountId: number
  ipAddress: string
  orderType: string
  timestamp: number
  limitPrice: number
  instrumentId: number
  displayQuantity: number
  executedQuantity: number
  originalQuantity: number
  remainingQuantity: number
  stateChangedReason: string
}

export interface InvestorDiferrenceByPrice {
  reportDate: number
  createdAt: number
  differencePercentage: number
  thresholdFrequency: number
  thresholdPercentage: number
  thresholdTimespan: number
  orderCompare: Order
  orderDetail: Order
  id: string
  token: string
  side: string
  price: number
  quantity: number
}

export interface State {
  loading: Record<string, unknown>
  error: Record<string, unknown>
  priceDifferences: Record<string, PriceDifference>
  quantityDifferences: Record<string, PriceDifference>
  frequentOrders: Record<string, FrequentOrder>
  selfTrades: Record<string, SelfTrade>
  invertorDiferencesByPrice: Record<string, InvestorDiferrenceByPrice>
  investorTradePriceDifferences: Record<string, PriceDifference>
  splitOrder: Record<string, InvestorDiferrenceByPrice>
  total: number
}

export interface Mutations {
  getPriceDifferences: (state: State, payload: GetMarketPriceDifference) => Promise<void>
  getQuantityDifferences: (state: State, payload: GetMarketQuantityDifference) => Promise<void>
  getFrequentOrders: (state: State, payload: GetFrequentOrders) => Promise<void>
  getSelfTrades: (state: State, payload: GetSelfTrade) => Promise<void>
  getInvestorDifferencesByPrice: (
    state: State,
    payload: GetInvestorDifferenceByPrice,
  ) => Promise<void>
  getTradePriceDifferences: (state: State, payload: GetTradePriceDifference) => Promise<void>
  getSplitOrder: (state: State, payload: GetSplitOrder) => Promise<void>
  getTotal: (state: State, payload: number) => void
}

export interface Actions {
  getPriceDifferences: (payload: GetMarketPriceDifference) => Promise<void>
  getQuantityDifferences: (payload: GetMarketQuantityDifference) => Promise<void>
  getFrequentOrders: (payload: GetFrequentOrders) => Promise<void>
  getSelfTrades: (payload: GetSelfTrade) => Promise<void>
  getInvestorDifferencesByPrice: (payload: GetInvestorDifferenceByPrice) => Promise<void>
  getTradePriceDifferences: (payload: GetTradePriceDifference) => Promise<void>
  getSplitOrder: (payload: GetSplitOrder) => Promise<void>
  getTotal: (payload: number) => void
}
