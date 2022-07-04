import { makeState } from '../../makeState'

import { State, Mutations, Actions } from './types/instruments.types'
// import { api } from '/@/api'

const generate = [...Array.from({ length: 10 })].map(() => {
  const ramdon = Math.round(Math.random() * 100)
  const symbolSelect = Math.round(Math.random() * 10)
  return {
    symbol: symbolSelect > 5 ? 'SirHubA/Mock' : 'XTZMock',
    instrumentId: ramdon,
    productOne: symbolSelect > 5 ? 'Mock' : 'XTZ',
    productTwo: 'Mock',
    disabled: symbolSelect > 5,
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
      state.items = generate
    },
  },
})

export default slices.state

export const { getItems } = slices.actions
