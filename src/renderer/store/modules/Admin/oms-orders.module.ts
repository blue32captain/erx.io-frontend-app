import { makeState } from '../../makeState'
import { State, Mutations, Actions, Order } from './types/oms-orders.type'

import { normalize } from '/@/store/utils'
import { GetOrdersDone } from '/@/models/admin/response'
import { GetOrders } from '/@/models/admin/request'
import { api } from '/@/api'

const slices = makeState<State, Mutations, Actions>({
  initialState: {
    items: {},
    loading: {},
    error: {},
    totalSell: 0,
    totalBuy: 0,
  },
  mutations: {
    async getItems(state: State, payload: GetOrders) {
      const { params } = await api.app.GetOrders<GetOrdersDone, GetOrders>(payload)
      const data = normalize<Order>(params, 'orderId')
      state.items = data
      state.totalSell = params.totalSell || 1000
      state.totalBuy = params.totalBuy || 1000
    },
  },
})

export default slices.state

export const { getItems } = slices.actions
