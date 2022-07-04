import { makeState } from '../../makeState'

import { normalize } from '/@/store/utils'
import { State, Mutations, Actions, User } from './types/users.type'
import { api } from '/@/api'
import { GetUsersDone, ModifyUserDone, SetRoleDone } from '/@/models/admin/response'
import { GetUsers, ModifyUser, SetRole } from '/@/models/admin/request'

const slices = makeState<State, Mutations, Actions>({
  initialState: {
    total: 0,
    items: {},
    loading: {},
    error: {},
  },
  mutations: {
    async getItems(state: State, payload: GetUsers) {
      const { params } = await api.app.GetUsers<GetUsersDone, GetUsers>(payload)
      const data = normalize<User>(params, 'userPublicId')

      state.total = params.total || 0
      state.items = data
    },
    async modifyUser(state: State, payload: ModifyUser) {
      await api.app.ModifyUser<ModifyUserDone, ModifyUser>(payload)
    },
    async setRole(state: State, payload: SetRole) {
      await api.app.SetRole<SetRoleDone, SetRole>(payload)
    },
  },
})

export default slices.state

export const { getItems, modifyUser, setRole } = slices.actions
