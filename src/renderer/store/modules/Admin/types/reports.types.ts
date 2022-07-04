import {
  GetSecReportBusinessWallet,
  GetSecReportCustomerData,
  GetSecReportCustomerOutstanding,
  GetSecReportCustomerWallet,
  GetSecReportDtwReport,
  GetSecReportIdentification,
  GetSecReportOrderbook,
  GetSecReportTradebook,
} from '/@/models/admin/request'

export interface Reports {
  customerId: number
  cardId: number
  name: string
  email: string
}

export interface State {
  loading: Record<string, unknown>
  error: Record<string, unknown>
  items: Reports[]
}

export interface GetSecReport extends GetSecReportBusinessWallet {
  type: string
}

export type SecReport =
  | GetSecReportBusinessWallet
  | GetSecReportCustomerData
  | GetSecReportCustomerOutstanding
  | GetSecReportCustomerWallet
  | GetSecReportDtwReport
  | GetSecReportIdentification
  | GetSecReportOrderbook
  | GetSecReportTradebook

export interface UpdateSecReport {
  type: string
  tableId: number
  headers: string[]
  body: string[][]
}

export interface Mutations {
  getItems: (state: State) => Promise<void>
  getSecReport: (state: State, payload: GetSecReport) => Promise<void>
  updateSecReport: (state: State, payload: UpdateSecReport) => Promise<void>
}

export interface Actions {
  getItems: () => Promise<void>
  getSecReport: (payload: GetSecReport) => Promise<Record<string, unknown>>
  updateSecReport: (payload: UpdateSecReport) => Promise<Record<string, unknown>>
}
