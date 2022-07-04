export const TABS = [
  {
    label: 'Trades',
    path: 'list',
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
  },
  {
    label: 'Block Trades',
    path: 'block-trades',
    component: '',
    actions: [],
  },
]

export const TRADES_LIST_COLUMNS = [
  { key: 'tradeId', label: 'Trade ID', type: 'integer' },
  { key: 'executionPublicId', label: 'Execution ID', type: 'integer' },
  { key: 'orderId', label: 'Order ID', type: 'integer' },
  { key: 'instrument', label: 'Instrument', type: 'integer' },
  { key: 'userPublicId', label: 'User Name', type: 'integer' },
  { key: 'accountPublicId', label: 'Account Name', type: 'integer' },
  { key: 'side', label: 'Side', type: 'integer' },
  { key: 'market', label: 'Market/Taker', type: 'numeric' },
  { key: 'quantity', label: 'Quantity', type: 'numeric' },
  { key: 'price', label: 'price', type: 'numeric' },
  { key: 'value', label: 'Value', type: 'numeric' },
  { key: 'createdAt', label: 'Trade Time', type: 'integer' },
  { key: 'actions', label: '' },
]

export const COLUMNS_LIST = [TRADES_LIST_COLUMNS, TRADES_LIST_COLUMNS]
