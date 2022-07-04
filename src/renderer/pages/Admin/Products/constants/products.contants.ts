export const PRODUCTS_COLUMNS = [
  { key: 'tradingPairId', label: 'Product ID', type: 'string' },
  { key: 'name', label: 'Symbol', type: 'string' },
  { key: 'baseCurrency', label: 'Base Currency Id', type: 'integer' },
  { key: 'quoteCurrency', label: 'Quote Currency Id', type: 'integer' },
  { key: 'minQuantity', label: 'Min Size', type: 'string' },
  { key: 'status', label: 'Status', type: 'string' },
  { key: 'actions', label: '', type: 'unknow' },
]

export const ACCOUNT_PROVIDERS_COLUMNS = [
  { key: 'id', label: 'ID', type: 'string' },
  { key: 'product', label: 'Product', type: 'string' },
  { key: 'name', label: 'Name', type: 'string' },
  { key: 'enable', label: 'Enable', type: 'string' },
  { key: 'omsBalance', label: 'OMS Balance', type: 'string' },
  { key: 'hotBalance', label: 'Hot Balance', type: 'string' },
  { key: 'coldBalance', label: 'Cold Balance', type: 'number' },
  { key: 'diffAmount', label: 'Diff Amount', type: 'number' },
  { key: 'diff', label: 'Diff %', type: 'number' },
  { key: 'type', label: 'Type', type: 'number' },
  { key: 'url', label: 'Url', type: 'number' },
]

export const TABS = [
  {
    label: 'Products',
    path: 'list',
    component: '',
    actions: [
      {
        event: 'add',
        text: 'Create product',
      },
      // {
      //   event: 'refresh',
      //   text: 'Refresh',
      // },
      {
        event: 'csv',
        text: 'Generate CSV',
      },
    ],
    columns: PRODUCTS_COLUMNS,
  },
  {
    label: 'Account Providers',
    path: 'account-providers',
    component: '',
    actions: [
      // {
      //   event: 'refresh',
      //   text: 'Refresh',
      // },
      {
        event: 'csv',
        text: 'Generate CSV',
      },
    ],
    columns: ACCOUNT_PROVIDERS_COLUMNS,
  },
]
