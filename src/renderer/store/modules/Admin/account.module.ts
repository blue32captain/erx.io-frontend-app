import { makeState } from '../../makeState'

import { normalize } from '/@/store/utils'
import { State, Mutations, Actions, Account } from './types/account.types'
import { api } from '/@/api'
import { GetAccountsDone } from '/@/models/admin/response'
import { GetAccounts } from '/@/models/admin/request'

const slices = makeState<State, Mutations, Actions>({
  initialState: {
    total: 0,
    items: {},
    loading: {},
    error: {},
  },
  mutations: {
    async getItems(state: State, payload: GetAccounts) {
      const { params } = await api.app.GetAccounts<GetAccountsDone, GetAccounts>(payload)
      const data = normalize<Account>(params, 'accountPublicId')
      state.total = params.total || 0
      state.items = data
    },
  },
})

export default slices.state

export const { getItems } = slices.actions
