export const TABS = [
  {
    label: 'Withdraws',
    path: 'withdraws',
    component: '',
    actions: [
      {
        event: 'csv',
        text: 'Create CSV',
      },
    ],
  },
  {
    label: 'Deposits',
    path: 'deposits',
    component: '',
    actions: [
      {
        event: 'csv',
        text: 'Create CSV',
      },
    ],
  },
  {
    label: 'Ledger Entries',
    path: 'ledger-entries',
    component: '',
    actions: [
      {
        event: 'csv',
        text: 'Create CSV',
      },
    ],
  },
  // {
  //   label: 'Asset Manager Wallet',
  //   path: 'asset-manager-wallet',
  //   component: '',
  //   actions: [],
  // },
  // {
  //   label: 'Approvals',
  //   path: 'approvals',
  //   component: '',
  //   actions: [],
  // },
]

export const WITHDRAWS_COLUMNS = [
  { key: 'transactionId', label: 'Ticket ID', type: 'string' },
  { key: 'accountPublicId', label: 'Account ID', type: 'string' },
  { key: 'accountName', label: 'Account Name', type: 'string' },
  { key: 'username', label: 'User Name', type: 'string' },
  { key: 'assetId', label: 'Asset', type: 'string' },
  { key: 'amount', label: 'Amount', type: 'string' },
  { key: 'requestCode', label: 'Request Code', type: 'string' },
  { key: 'status', label: 'Status', type: 'string' },
  { key: 'updatedBy', label: 'Updated By', type: 'string' },
  { key: 'updatedAt', label: 'Last Updated', type: 'string' },
  // { key: 'actions', label: '' },
]

export const DEPOSITS_COLUMNS = [
  { key: 'id', label: 'Ticket ID', type: 'string' },
  { key: 'referenceId', label: 'Reference ID', type: 'string' },
  { key: 'accountId', label: 'Account ID', type: 'string' },
  { key: 'accountName', label: 'Account Name', type: 'string' },
  { key: 'username', label: 'User Name', type: 'string' },
  { key: 'asset', label: 'Asset', type: 'string' },
  { key: 'amount', label: 'Amount', type: 'string' },
  { key: 'status', label: 'Status', type: 'string' },
  { key: 'updatedBy', label: 'Updated By', type: 'string' },
  { key: 'updatedAt', label: 'Last Updated', type: 'string' },
  // { key: 'actions', label: '' },
]

export const LEDGER_ENTRIES_COLUMNS = [
  { key: 'id', label: 'ID', type: 'string' },
  { key: 'accountId', label: 'Account ID', type: 'string' },
  { key: 'productId', label: 'Product ID', type: 'string' },
  { key: 'creditAmount', label: 'Credit Amount', type: 'string' },
  { key: 'debitAmount', label: 'Debit Amount', type: 'string' },
  { key: 'enteredBy', label: 'Entere By', type: 'string' },
  { key: 'timestamp', label: 'Timestamp', type: 'string' },
  // { key: 'actions', label: '' },
]

export const COLUMNS_LIST = [WITHDRAWS_COLUMNS, DEPOSITS_COLUMNS, LEDGER_ENTRIES_COLUMNS]
