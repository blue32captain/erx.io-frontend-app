import { makeState } from '../../makeState'
import tradeSymbol, { getTradeSymbol } from '../App/trading-symbols.module'
import { normalize } from '/@/store/utils'
import { State, Mutations, Actions, Trades } from './types/trades.type'
import { api } from '/@/api'
import { GetTradesDone } from '/@/models/admin/response'
import { GetTrades } from '/@/models/admin/request'

const slices = makeState<State, Mutations, Actions>({
  initialState: {
    items: {},
    loading: {},
    error: {},
    total: 0,
  },
  mutations: {
    async getItems(state: State, payload: GetTrades) {
      if (!tradeSymbol.items) {
        await getTradeSymbol()
      }

      const { params } = await api.app.GetTrades<GetTradesDone, GetTrades>(payload)

      const data = normalize<Trades>(params, 'tradeId')

      Object.values(data).forEach(trade => {
        if (trade.symbolId && tradeSymbol?.items?.[trade.symbolId]) {
          trade.market = tradeSymbol.items[trade.symbolId].name
        }
      })
      state.items = data
      state.total = params.total || 1000
    },
  },
})

export default slices.state

export const { getItems } = slices.actions
