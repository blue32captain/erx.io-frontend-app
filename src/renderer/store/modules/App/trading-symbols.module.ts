import { makeState } from '../../makeState'

import { normalize } from '/@/store/utils'
import { State, Mutations, Actions, TradingSymbol } from './types/trading-symbols.types'
import { api } from '/@/api'
import { AddTradingSymbolDone, ModifyTradingSymbolDone } from '/@/models/admin/response'
import { AddTradingSymbol, ModifyTradingSymbol } from '/@/models/admin/request'
import { GetTradingSymbolsDone } from '/@/models/app/response'
import { GetTradingSymbols } from '/@/models/app/request'

const slices = makeState<State, Mutations, Actions>({
  initialState: {
    items: null,
    loading: {},
    error: {},
  },
  mutations: {
    async getTradeSymbol(state: State) {
      const { params } = await api.app.GetTradingSymbols<GetTradingSymbolsDone, GetTradingSymbols>()
      const data = normalize<TradingSymbol>(params, 'tradingPairId')
      state.items = data
    },
    async addTradeSymbol(_, payload) {
      await api.app.AddTradingSymbol<AddTradingSymbolDone, AddTradingSymbol>(payload)
    },
    async modifyTradingSymbol(_, payload) {
      await api.app.ModifyTradingSymbol<ModifyTradingSymbolDone, ModifyTradingSymbol>(payload)
    },
  },
})

export default slices.state

export const { getTradeSymbol, addTradeSymbol, modifyTradingSymbol } = slices.actions
