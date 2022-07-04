import { makeState } from '../../makeState'

import { State, Mutations, Actions, Investor } from './types/investors.types'
import { api } from '/@/api'
import { GetInvestors } from '/@/models/admin/request'
import { normalize } from '/@/store/utils'
import { GetInvestorsDone } from '/@/models/admin/response'

const slices = makeState<State, Mutations, Actions>({
  initialState: {
    items: {},
    loading: {},
    error: {},
    total: 0,
  },
  mutations: {
    // eslint-disable-next-line require-await
    async getItems(state: State, payload: GetInvestors) {
      const { params } = await api.app.GetInvestors<GetInvestorsDone, GetInvestors>(payload)
      const data = normalize<Investor>(params, 'publicId')
      state.items = data
      state.total = params.total || 1000
    },
  },
})

export default slices.state

export const { getItems } = slices.actions
