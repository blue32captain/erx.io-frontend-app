import { makeState } from '../../makeState'

import { normalize } from '/@/store/utils'
import { State, Mutations, Actions, Transaction } from './types/tickets.types'
import { api } from '/@/api'
import { GetTransactionsDone } from '/@/models/admin/response'
import { GetTransactions } from '/@/models/admin/request'

const slices = makeState<State, Mutations, Actions>({
  initialState: {
    withdraws: {},
    deposits: {},
    loading: {},
    error: {},
  },
  mutations: {
    // eslint-disable-next-line require-await
    async getItems(state: State) {
      const { params } = await api.app.GetTransactions<GetTransactionsDone, GetTransactions>({
        offset: 0,
        limit: 200,
      })
      const withdrawsArray = params.data.filter(e => e[4] < 0)
      const depositsArray = params.data.filter(e => e[4] > 0)
      const withdraws = normalize<Transaction>({ ...params, data: withdrawsArray }, 'transactionId')
      const deposits = normalize<Transaction>({ ...params, data: depositsArray }, 'transactionId')
      state.withdraws = withdraws
      state.deposits = deposits
    },
  },
})

export default slices.state

export const { getItems } = slices.actions
