import { makeState } from '../../makeState'

import {
  State,
  Mutations,
  Actions,
  InvestorStrReport,
  NegativeBalance,
  AmloReport,
} from './types/operation-reports.type'
import { api } from '/@/api'
import {
  GetAmloReportDone,
  GetNegativeBalanceDone,
  GetStrReportDetailsDone,
} from '/@/models/admin/response'
import { GetAmloReport, GetNegativeBalance, GetStrReportDetails } from '/@/models/admin/request'
import { normalize } from '/@/store/utils'

const slices = makeState<State, Mutations, Actions>({
  initialState: {
    investorStrReports: {},
    negativeBalances: {},
    amloReports: {},
    loading: {},
    error: {},
    total: 0,
  },
  mutations: {
    // eslint-disable-next-line require-await
    async getNegativeBalances(state: State, payload: GetNegativeBalance) {
      const { params } = await api.app.GetNegativeBalance<
        GetNegativeBalanceDone,
        GetNegativeBalance
      >(payload)

      params.headers.push('id')
      params.data.forEach((order, index) => {
        order.push(`${index}`)
      })

      const data = normalize<NegativeBalance>(params, 'id')

      state.negativeBalances = data
      state.total = params.total || 1000
    },
    async getInvestorStrReports(state: State, payload: GetStrReportDetails) {
      const { params } = await api.app.GetStrReportDetails<
        GetStrReportDetailsDone,
        GetStrReportDetails
      >(payload)
      const data = normalize<InvestorStrReport>(params, 'publicId')
      state.investorStrReports = data
      state.total = params.total || 1000
    },
    async getAmloReports(state: State, payload: GetAmloReport) {
      const { params } = await api.app.GetAmloReport<GetAmloReportDone, GetAmloReport>(payload)
      const data = normalize<AmloReport>(params, 'publicId')
      state.amloReports = data
      state.total = params.total || 1000
    },
  },
})

export default slices.state

export const { getNegativeBalances, getInvestorStrReports, getAmloReports } = slices.actions
