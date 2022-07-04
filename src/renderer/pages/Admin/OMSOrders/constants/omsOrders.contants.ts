export const ORDER_HISTORY_COLUMNS = [
  { key: 'orderId', label: 'Order ID', type: 'string' },
  { key: 'username', label: 'User', type: 'string' },
  { key: 'account', label: 'Account', type: 'string' },
  { key: 'accountPublicId', label: 'Account Id', type: 'string' },
  { key: 'type', label: 'Order Type', type: 'string' },
  { key: 'status', label: 'Order State', type: 'string' },
  { key: 'price', label: 'Price', type: 'string' },
  { key: 'originalQuantity', label: 'Original Quantity', type: 'string' },
  { key: 'remainingQuantity', label: 'Original Quantity', type: 'string' },
  { key: 'side', label: 'Side', type: 'string' },
  { key: 'submitTs', label: 'Order Time', type: 'string' },
  { key: 'orderAttributes', label: 'Order Attributes', type: 'string' },
  { key: 'actions', label: '' },
]

export const BUY_SIDE_BOOK_COLUMNS = [
  { key: 'orderId', label: 'Order ID', type: 'string' },
  { key: 'username', label: 'User Name', type: 'string' },
  { key: 'accountPublicId', label: 'Account Name', type: 'string' },
  { key: 'price', label: 'Price', type: 'string' },
  { key: 'amount', label: 'Quantity', type: 'string' },
  { key: 'type', label: 'Order Type', type: 'string' },
  { key: 'actions', label: '' },
]

export const SELL_SIDE_BOOK_COLUMNS = [
  { key: 'orderId', label: 'Order ID', type: 'string' },
  { key: 'username', label: 'User Name', type: 'string' },
  { key: 'accountPublicId', label: 'Account Name', type: 'string' },
  { key: 'price', label: 'Price', type: 'string' },
  { key: 'amount', label: 'Quantity', type: 'string' },
  { key: 'type', label: 'Order Type', type: 'string' },
  { key: 'actions', label: '' },
]

export const TABS = [
  {
    label: 'OMS Open Orders',
    path: 'orders',
    component: '',
    actions: [
      {
        event: 'custom',
        text: 'BULK CANCEL',
        type: 'is-danger',
      },
      // {
      //   event: 'refresh',
      //   text: 'Refresh',
      // },
      {
        event: 'csv',
        text: 'Create CSV',
      },
    ],
    leftTableTitle: 'BUY SIDE BOOK',
    rightTableTitle: 'SELL SIDE BOOK',
    leftTable: BUY_SIDE_BOOK_COLUMNS,
    rightTable: SELL_SIDE_BOOK_COLUMNS,
  },
  {
    label: 'OMS Orders History',
    path: 'history',
    component: '',
    actions: [
      // {
      //   event: 'refresh',
      //   text: 'Refresh',
      // },
    ],
    uniq: ORDER_HISTORY_COLUMNS,
  },
]
