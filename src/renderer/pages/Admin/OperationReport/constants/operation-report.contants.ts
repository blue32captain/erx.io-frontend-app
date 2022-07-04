export const TABS = [
  {
    label: 'Investor STR Report',
    path: 'str-report',
    component: '',
    actions: [''],
  },
  {
    label: 'Negative Balance',
    path: 'negative-balance',
    component: '',
    actions: [''],
  },
  {
    label: 'AMLO Report',
    path: 'amlo-report',
    component: '',
    actions: [''],
  },
]

export const INVESTORS_STR_REPORT_COLUMNS = [
  { key: 'accountId', label: 'Customer ID', type: 'string' },
  { key: 'name', label: 'Customer Name', type: 'string' },
  { key: 'email', label: 'Customer Email', type: 'string' },
  { key: 'tier', label: 'Risk Level', type: 'string' },
  { key: 'token', label: 'Token Balance', type: 'string' },
  { key: 'total', label: 'Total Asset Balance', type: 'string' },
  { key: 'tier', label: 'Tier', type: 'string' },
]

export const NEGATIVE_BALANCE_COLUMNS = [
  { key: 'omsId', label: 'OMS ID', type: 'string' },
  { key: 'accountIUd', label: 'Customer ID', type: 'string' },
  { key: 'accountName', label: 'Customer Name', type: 'string' },
  { key: 'customerEmail', label: 'Customer Email', type: 'string' },
  { key: 'symbol', label: 'Asset', type: 'string' },
  { key: 'balance', label: 'Balance', type: 'string' },
  { key: 'hold', label: 'Hold', type: 'string' },
  { key: 'available', label: 'Available', type: 'string' },
  { key: 'usdValue', label: 'USD Value', type: 'string' },
]

export const AMLO_REPORT_COLUMNS = [
  { key: 'customerId', label: 'Customer ID', type: 'string' },
  { key: 'customerName', label: 'Customer Name', type: 'string' },
  { key: 'customerEmail', label: 'Customer Email', type: 'string' },
  { key: 'transactionTime', label: 'Date Time', type: 'string' },
  { key: 'assetName', label: 'Asset', type: 'string' },
  { key: 'transactionId', label: 'Transaction', type: 'string' },
  { key: 'transactionType', label: 'Transaction Type', type: 'string' },
  { key: 'quantity', label: 'Quantity', type: 'string' },
  { key: 'value', label: 'Quantity Value in THB', type: 'string' },
]

export const COLUMNS_LIST = [
  INVESTORS_STR_REPORT_COLUMNS,
  NEGATIVE_BALANCE_COLUMNS,
  AMLO_REPORT_COLUMNS,
]
