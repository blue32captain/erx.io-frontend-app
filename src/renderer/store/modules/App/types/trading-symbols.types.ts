import { AddTradingSymbol, ModifyTradingSymbol } from '/@/models/admin/request'

export interface TradingSymbol {
  tradingPairId: number
  name: string
  baseCurrency: number
  quoteCurrency: number
  productType?: string
  baseCurrencyId?: string
  quoteCurrencyId?: string
  minQuantity: number
  minPrice: number
  status: string
  feeProportion: number
}

export interface State {
  loading: Record<string, unknown>
  error: Record<string, unknown>
  items: Record<string | number, TradingSymbol> | null
}

export interface Mutations {
  getTradeSymbol: (state: State) => Promise<void>
  addTradeSymbol: (state: State, payload: AddTradingSymbol) => Promise<void>
  modifyTradingSymbol: (state: State, payload: ModifyTradingSymbol) => Promise<void>
}

export interface Actions {
  getTradeSymbol: () => Promise<void>
  addTradeSymbol: (payload: TradingSymbol) => Promise<void>
  modifyTradingSymbol: (payload: ModifyTradingSymbol) => Promise<void>
}
