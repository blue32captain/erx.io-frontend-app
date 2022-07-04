import { GetUsers, ModifyUser, SetRole } from '/@/models/admin/request'

export interface User {
  userPublicId: number
  username: string
  age: null
  preferredLanguage: string
  familyName: null
  givenName: null
  email: string
  emailVerified: boolean
  phoneNumber: null
  phoneVerified: boolean
  role: string
  blocked: boolean
}

export interface State {
  loading: Record<string, unknown>
  error: Record<string, unknown>
  items: Record<string, User>
  total: number
}

export interface Mutations {
  getItems: (state: State, payload: GetUsers) => Promise<void>
  modifyUser: (state: State, payload: ModifyUser) => Promise<void>
  setRole: (state: State, payload: SetRole) => Promise<void>
}

export interface Actions {
  getItems: (payload: GetUsers) => Promise<void>
  modifyUser: (payload: ModifyUser) => Promise<void>
  setRole: (payload: SetRole) => Promise<void>
}
