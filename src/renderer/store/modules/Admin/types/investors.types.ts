import { GetInvestors } from '/@/models/admin/request'

export interface Investor {
  idCardOrPassport: string
  customerCode: string
  customerName: null
  customerType: string
  riskLevel: number
  verificationLevel: string
  accountOpenDate: null
  lastActivity: string
  registeredBank: null
  emailAddress: string
  publicId: string
  registered: boolean
  reason: string
}

export interface State {
  loading: Record<string, unknown>
  error: Record<string, unknown>
  items: Record<string, Investor>
  total: number
}

export interface Mutations {
  getItems: (state: State, payload: GetInvestors) => Promise<void>
}

export interface Actions {
  getItems: (payload: GetInvestors) => Promise<void>
}
