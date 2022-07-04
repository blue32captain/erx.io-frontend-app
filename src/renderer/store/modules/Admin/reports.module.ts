import { makeState } from '../../makeState'

import { State, Mutations, Actions, GetSecReport, UpdateSecReport } from './types/reports.types'

import { api } from '/@/api'

const generate = [...Array.from({ length: 10 })].map(() => {
  const customerId = Math.round(Math.random() * 1000000)
  const cardId = Math.round(Math.random() * 1000000)
  const email = Math.round(Math.random() * 100)
  return {
    customerId,
    cardId,
    name: `mock_${customerId}`,
    email: `mock${email}@gmail.com`,
  }
})

const slices = makeState<State, Mutations, Actions>({
  initialState: {
    items: [],
    loading: {},
    error: {},
  },
  mutations: {
    // eslint-disable-next-line require-await
    async getItems(state: State) {
      // const data = normalize<Account>(params, 'accountPublicId')
      state.items = generate
    },

    async getSecReport(state: State, payload: GetSecReport) {
      const { params } = await api.app[payload.type]({
        beginTime: payload.beginTime,
        endTime: payload.endTime,
      })
      return params
    },

    async updateSecReport(state: State, payload: UpdateSecReport) {
      await api.app[payload.type]({
        tableId: payload.tableId,
        headers: payload.headers,
        body: payload.body,
      })
    },
  },
})

export default slices.state

export const { getItems, getSecReport, updateSecReport } = slices.actions
