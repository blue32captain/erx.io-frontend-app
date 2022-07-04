export const TABS = [
  {
    label: 'On Board',
    path: 'on-board',
    component: '',
    actions: [
      {
        event: 'csv',
        text: 'Create CSV',
      },
    ],
  },
  // {
  //   label: 'All Pending',
  //   path: 'pending',
  //   component: '',
  //   actions: [],
  // },
  // {
  //   label: 'Pending Risk3',
  //   path: 'pending-risk',
  //   component: '',
  //   actions: [],
  // },
  {
    label: 'Rejected',
    path: 'rejected',
    component: '',
    actions: [
      {
        event: 'csv',
        text: 'Create CSV',
      },
    ],
  },
  {
    label: 'Closed',
    path: 'closed',
    component: '',
    actions: [
      {
        event: 'csv',
        text: 'Create CSV',
      },
    ],
  },
]

export const INVESTORS_ONBOARD_COLUMNS = [
  { key: 'publicId', label: 'ID', type: 'string' },
  { key: 'idCardOrPassport', label: 'ID Card / Passport', type: 'string' },
  { key: 'customerCode', label: 'Customer Code', type: 'string' },
  { key: 'customerName', label: 'Customer Name', type: 'string' },
  { key: 'customerType', label: 'Customer Type', type: 'string' },
  { key: 'xdInvestor', label: 'XD Investor', type: 'string' },
  { key: 'riskLevel', label: 'Risk Level', type: 'string' },
  { key: 'verificationLevel', label: 'Ver Level', type: 'string' },
  { key: 'suitScore', label: 'Suit Score', type: 'string' },
  { key: 'accountOpenDate', label: 'Account Open Date', type: 'string' },
  { key: 'lastActivity', label: 'Last Activity', type: 'string' },
  { key: 'registeredBank', label: 'Registered Bank', type: 'string' },
  // { key: 'actions', label: '', type: 'unknow' },
]

export const PENDGIN_ONBOARD_COLUMNS = [
  { key: 'publicId', label: 'ID', type: 'string' },
  { key: 'customerCode', label: 'Customer Code', type: 'string' },
  { key: 'customerName', label: 'Customer Name', type: 'string' },
  { key: 'customerType', label: 'Customer Type', type: 'string' },
  { key: 'emailAddress', label: 'Email Address', type: 'string' },
  { key: 'xdInvestor', label: 'XD Investor', type: 'string' },
  { key: 'registered', label: 'Registered', type: 'string' },
  { key: 'reason', label: 'Reason', type: 'string' },
  // { key: 'actions', label: '', type: 'unknow' },
]

export const CLOSED_ONBOARD_COLUMNS = [
  { key: 'publicId', label: 'ID', type: 'string' },
  { key: 'customerCode', label: 'Customer Code', type: 'string' },
  { key: 'customerName', label: 'Customer Name', type: 'string' },
  { key: 'customerType', label: 'Customer Type', type: 'string' },
  { key: 'emailAddress', label: 'Email Address', type: 'string' },
  { key: 'xdInvestor', label: 'XD Investor', type: 'string' },
  { key: 'registered', label: 'Registered', type: 'string' },
  { key: 'closed', label: 'Closed', type: 'string' },
  // { key: 'actions', label: '', type: 'unknow' },
]

export const COLUMNS_LIST = [
  INVESTORS_ONBOARD_COLUMNS,
  PENDGIN_ONBOARD_COLUMNS,
  CLOSED_ONBOARD_COLUMNS,
]
