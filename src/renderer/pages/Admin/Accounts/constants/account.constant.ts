export const DETAILS_TABS = [
  {
    label: 'Accounts Details',
    path: 'details',
    component: '',
    actions: [
      {
        event: 'add',
        text: 'Add Account',
      },
      // {
      //   event: 'refresh',
      //   text: 'Refresh',
      // },
      // {
      //   event: 'view',
      //   text: 'View all',
      // },
      {
        event: 'csv',
        text: 'Create CSV',
      },
    ],
  },
  {
    label: 'Balances',
    path: 'balances',
    component: '',
    actions: [
      // {
      //   event: 'refresh',
      //   text: 'Refresh',
      // },
      {
        event: 'csv',
        text: 'Create CSV',
      },
    ],
    // actions: ['refresh', 'createCSV'],
  },
  {
    label: 'Treasury Activity',
    path: 'treasury-activity',
    component: '',
    actions: [
      // {
      //   event: 'refresh',
      //   text: 'Refresh',
      // },
      {
        event: 'csv',
        text: 'Create CSV',
      },
    ],
    // actions: ['refresh', 'createCSV'],
  },
  {
    label: 'Trading Activity',
    path: 'trading-activity',
    component: 'none',
    actions: [
      // {
      //   event: 'refresh',
      //   text: 'Refresh',
      // },
      {
        event: 'csv',
        text: 'Create CSV',
      },
    ],
  },
  {
    label: 'Account Activity',
    path: 'activity',
    component: 'none',
    actions: [
      // {
      //   event: 'refresh',
      //   text: 'Refresh',
      // },
      {
        event: 'csv',
        text: 'Create CSV',
      },
    ],
  },
  {
    label: 'Order History',
    path: 'order-history',
    component: 'none',
    actions: [
      // {
      //   event: 'refresh',
      //   text: 'Refresh',
      // },
      {
        event: 'csv',
        text: 'Create CSV',
      },
    ],
  },
  {
    label: 'Ledger Entries',
    path: 'ledger-entries',
    component: 'none',
    actions: [
      // {
      //   event: 'refresh',
      //   text: 'Refresh',
      // },
      {
        event: 'csv',
        text: 'Create CSV',
      },
    ],
  },
  {
    label: 'Tickets',
    path: 'tickets',
    component: 'none',
    actions: [
      // {
      //   event: 'refresh',
      //   text: 'Refresh',
      // },
      {
        event: 'csv',
        text: 'Create CSV',
      },
    ],
  },
  {
    label: 'Transfers',
    path: 'transfers',
    component: 'none',
    actions: [
      // {
      //   event: 'refresh',
      //   text: 'Refresh',
      // },
      {
        event: 'csv',
        text: 'Create CSV',
      },
    ],
  },
]

export const ACCOUNT_BALANCE_COLUMNS = [
  { key: 'accountPublicId', label: 'Product ', type: 'string' },
  { key: 'accountName', label: 'Amount', type: 'string' },
  { key: 'accountType', label: 'Hold Amount', type: 'string' },
  { key: 'riskType', label: 'Pending Deposits', type: 'string' },
  { key: 'verificationLevel', label: 'Pending Withdraws', type: 'string' },
]

export const ACCOUNT_TREASURY_ACTIVITY_COLUMNS = [
  { key: 'accountPublicId', label: 'Product ', type: 'string' },
  { key: 'accountPublicId', label: 'Daily Deposits ', type: 'string' },
  { key: 'accountPublicId', label: 'Monthly Deposits ', type: 'string' },
  { key: 'accountPublicId', label: 'Yearly Deposits', type: 'string' },
  { key: 'accountPublicId', label: 'Daily Withdraws ', type: 'string' },
  { key: 'accountPublicId', label: 'Monthly Withdraws', type: 'string' },
  { key: 'accountPublicId', label: 'Yearly Withdraws', type: 'string' },
]

export const ACCOUNT_TRADING_ACTIVITY_COLUMNS = [
  { key: 'accountPublicId', label: 'Instrument', type: 'string' },
  { key: 'accountPublicId', label: 'Daily Notional Volume', type: 'string' },
  { key: 'accountPublicId', label: 'Monthly Notional Volume', type: 'string' },
  { key: 'accountPublicId', label: 'Yearly Notional Volume  ', type: 'string' },
  { key: 'accountPublicId', label: 'Rolling Trade Volume ', type: 'string' },
]

export const ACCOUNT_ACTIVITY_COLUMNS = [
  { key: 'accountPublicId', label: 'Product', type: 'string' },
  { key: 'accountPublicId', label: 'Credit', type: 'string' },
  { key: 'accountPublicId', label: 'Debit', type: 'string' },
  { key: 'accountPublicId', label: 'Reference Type', type: 'string' },
  { key: 'accountPublicId', label: 'Reference ID ', type: 'string' },
  { key: 'accountPublicId', label: 'Counter Party ', type: 'string' },
  { key: 'accountPublicId', label: 'Balance', type: 'string' },
]

export const ACCOUNT_ORDER_HISTORY_COLUMNS = [
  { key: 'accountPublicId', label: 'Order Type ', type: 'string' },
  { key: 'accountName', label: 'Instrument', type: 'string' },
  { key: 'accountType', label: 'Qty. Executed', type: 'string' },
]

export const ACCOUNT_LEDGER_ENTRIES_COLUMNS = [
  { key: 'accountPublicId', label: 'Product ID', type: 'string' },
  { key: 'accountPublicId', label: 'Credit', type: 'string' },
  { key: 'accountPublicId', label: 'Debit', type: 'string' },
  { key: 'accountPublicId', label: 'Entered by', type: 'string' },
  { key: 'accountPublicId', label: 'One sided Transaction', type: 'string' },
]

export const ACCOUNT_TICKETS_COLUMNS = [
  { key: 'accountPublicId', label: 'Ticket ID', type: 'string' },
  { key: 'accountPublicId', label: 'Asset', type: 'string' },
  { key: 'accountPublicId', label: 'Amount', type: 'string' },
  { key: 'accountPublicId', label: 'Status', type: 'string' },
  { key: 'accountPublicId', label: 'Last Updated', type: 'string' },
]

export const ACCOUNT_TRANSFERS_COLUMNS = [
  { key: 'accountPublicId', label: 'ID', type: 'string' },
  { key: 'accountPublicId', label: 'Sender', type: 'string' },
  { key: 'accountPublicId', label: 'Receiver', type: 'string' },
  { key: 'accountPublicId', label: 'Product', type: 'string' },
  { key: 'accountPublicId', label: 'Amount', type: 'string' },
  { key: 'accountPublicId', label: 'Notes', type: 'string' },
  { key: 'accountPublicId', label: 'Reason', type: 'string' },
  { key: 'accountPublicId', label: 'Status', type: 'string' },
  { key: 'accountPublicId', label: 'Created Time', type: 'string' },
  { key: 'accountPublicId', label: 'Last Update', type: 'string' },
]

export const ACCOUNT_COLUMNS_LIST = [
  [],
  ACCOUNT_BALANCE_COLUMNS,
  ACCOUNT_TREASURY_ACTIVITY_COLUMNS,
  ACCOUNT_TRADING_ACTIVITY_COLUMNS,
  ACCOUNT_ACTIVITY_COLUMNS,
  ACCOUNT_ORDER_HISTORY_COLUMNS,
  ACCOUNT_LEDGER_ENTRIES_COLUMNS,
  ACCOUNT_TICKETS_COLUMNS,
  ACCOUNT_TRANSFERS_COLUMNS,
]
