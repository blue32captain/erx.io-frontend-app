export const ACCOUNTS_LIST_COLUMNS = [
  { key: 'accountPublicId', label: 'Account Id', type: 'string', searchableKey: 'accountPublicId' },
  { key: 'accountName', label: 'Account Name', type: 'string' },
  { key: 'accountType', label: 'Account Type', type: 'string' },
  { key: 'riskType', label: 'Risk Type', type: 'string' },
  { key: 'verificationLevel', label: 'Verification Level', type: 'string' },
  { key: 'creditTier', label: 'Credit Tier', type: 'string' },
  { key: 'feeTier', label: 'Price Tier', type: 'string' },
  { key: 'fsRegAcctId', label: 'Fs Reg Acct Id', type: 'string' },
  { key: 'actions', label: '', type: '' },
]

export const NEGATIVE_BALANCES_COLUMNS = [
  { key: 'omsId', label: 'OMS Id', type: 'string' },
  { key: 'accountPublicId', label: 'Account Id', type: 'string', searchableKey: 'accountPublicId' },
  { key: 'accountName', label: 'Account Name', type: 'string' },
  { key: 'assetCode', label: 'Product Id', type: 'string' },
  { key: 'assetFriendlyName', label: 'Product', type: 'string' },
  { key: 'balance', label: 'Balance', type: 'string' },
  { key: 'locked', label: 'Hold', type: 'string' },
  { key: 'available', label: 'Available', type: 'string' },
  { key: 'usdValue', label: 'USD Value', type: 'string' },
  { key: 'actions', label: '', type: '' },
]

export const ACCOUNT_BALANCES_COLUMNS = [
  { key: 'accountPublicId', label: 'Account Id', type: 'string', searchableKey: 'accountPublicId' },
  { key: 'assetId', label: 'Asset Id', type: 'string', searchableKey: 'assetId' },
  {
    key: 'assetFriendlyName',
    label: 'Asset Name',
    type: 'string',
    searchableKey: 'assetFriendlyName',
  },
  { key: 'assetCode', label: 'Asset Code', type: 'string', searchableKey: 'assetCode' },
  { key: 'available', label: 'Amount', type: 'float' },
  { key: 'locked', label: 'Holds', type: 'float' },
  { key: 'price', label: 'Asset Price', type: 'float' },
  { key: 'last24HPriceThb', label: 'Last 24H Asset Price in THB', type: 'float' },
  { key: 'updatedAt', label: 'Updated At', type: 'numeric' },
  { key: 'createdAt', label: 'Created At', type: 'numeric', searchableKey: 'createdAt' },
  { key: 'actions', label: '', type: '' },
]

export const TABS = [
  // {
  //   label: 'Accounts',
  //   path: 'list',
  //   component: 'AccountList',
  //   actions: [
  //     {
  //       event: 'csv',
  //       text: 'Create CSV',
  //     },
  //   ],
  // },
  {
    label: 'Accounts Balances',
    path: 'balances',
    component: 'AccountBalanceTab',
    actions: [
      {
        event: 'csv',
        text: 'Create CSV',
      },
    ],
    // actions: ['refresh', 'createCSV'],
  },
  {
    label: 'Negative Balances',
    path: 'negative-balances',
    component: 'NegativeBalancesTab',
    actions: [
      {
        event: 'csv',
        text: 'Create CSV',
      },
    ],
  },
  {
    label: 'Frozen Accounts',
    path: 'frozen-accounts',
    component: 'FrozenAccountsTab',
    actions: [
      {
        event: 'csv',
        text: 'Create CSV',
      },
    ],
  },
]

export const COLUMNS_LIST = [
  ACCOUNT_BALANCES_COLUMNS,
  NEGATIVE_BALANCES_COLUMNS,
  ACCOUNTS_LIST_COLUMNS,
]
