export const SEC_TABS = [
  {
    label: 'View',
    path: 'view',
    component: '',
    actions: [],
  },
  {
    label: 'Upload',
    path: 'upload',
    component: '',
    actions: [],
  },
]

export const SEC_REPORT_TYPES = {
  businessWallet: { get: 'GetSecReportBusinessWallet', update: 'UpdateSecReportBusinessWallet' },
  customerData: { get: 'GetSecReportCustomerData', update: 'UpdateSecReportCustomerData' },
  customerOutstanding: {
    get: 'GetSecReportCustomerOutstanding',
    update: 'UpdateSecReportCustomerOutstanding',
  },
  customerWallet: { get: 'GetSecReportCustomerWallet', update: 'UpdateSecReportCustomerWallet' },
  dtwReport: { get: 'GetSecReportDtwReport', update: 'UpdateSecReportDtwReport' },
  identification: { get: 'GetSecReportIdentification', update: 'UpdateSecReportIdentification' },
  orderbook: { get: 'GetSecReportOrderbook', update: 'UpdateSecReportOrderbook' },
  tradebook: { get: 'GetSecReportTradebook', update: 'UpdateSecReportTradebook' },
}

export const DUPLICATE_ADDRESS_COLUMNS = [
  { key: 'customerId', label: 'Investor ID', type: 'string' },
  { key: 'cardId', label: 'ID / Passport number', type: 'string' },
  { key: 'name', label: 'Customer name', type: 'string' },
  { key: 'typeAddress', label: 'Type of Address', type: 'string' },
  { key: 'address', label: 'Address', type: 'string' },
  { key: 'number  ', label: 'Mobile number', type: 'string' },
  { key: 'email', label: 'E-mail', type: 'string' },
  { key: 'createAt', label: 'Account opened date', type: 'string' },
  { key: 'updateAt', label: 'Last update date', type: 'string' },
  { key: 'verifyDate', label: 'Verify date', type: 'string' },
  { key: 'reasonDuplication', label: 'Reason Duplication', type: 'string' },
  // { key: 'reasonDuplication', label: 'Reason Duplication', type: 'string' },
  // { key: 'actions', label: '' },
]
