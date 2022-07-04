import { GetNegativeBalance, GetStrReportDetails } from '/@/models/admin/request'

export interface InvestorStrReport {
  publicId: string
  headerId: string
  createdAt: number
  accountId: number
  name: string
  email: string
  riskLevel: string
  tier: string
  token: string
  fiat: string
  total: number
}

// Generated by https://quicktype.io

export interface NegativeBalance {
  reportDate: number
  createdAt: number
  omsId: number
  accountIUd: number
  accountName: string
  productId: number
  symbol: string
  balance: number
  hold: number
  available: number
  usdValue: number
  id: string
}

export interface AmloReport {
  publicId: string
  createdAt: number
  reportDate: number
  customerId: string
  customerName: string
  customerEmail: string
  accountId: string
  transactionTime: number
  assetId: string
  assetName: string
  symbol: string
  quantity: number
  value: number
  transactionId: number
  transactionType: string
}

export interface State {
  total: number
  loading: Record<string, unknown>
  error: Record<string, unknown>
  investorStrReports: Record<string, InvestorStrReport>
  negativeBalances: Record<string, NegativeBalance>
  amloReports: Record<string, AmloReport>
}

export interface Mutations {
  getInvestorStrReports: (state: State, payload: GetStrReportDetails) => Promise<void>
  getNegativeBalances: (state: State, payload: GetNegativeBalance) => Promise<void>
  getAmloReports: (state: State, payload: GetNegativeBalance) => Promise<void>
}

export interface Actions {
  getInvestorStrReports: (payload: GetStrReportDetails) => Promise<void>
  getNegativeBalances: (payload: GetNegativeBalance) => Promise<void>
  getAmloReports: (payload: GetNegativeBalance) => Promise<void>
}
