const ORDER_TABS = [
  {
    label: 'Open Orders',
    value: 'open',
    columns: [
      { key: 'pair', label: 'pair', type: 'number' },
      { key: 'side', label: 'side', type: 'number' },
      { key: 'type', label: 'type', type: 'number' },
      { key: 'size', label: 'size', type: 'number' },
      { key: 'price', label: 'price', type: 'number' },
      { key: 'dateTime', label: 'dateTime', type: 'number' },
      { key: 'status', label: 'status', type: 'number' },
      { key: 'action', label: 'action', type: 'number' },
    ],
  },
  {
    label: 'Filled Orders',
    value: 'filled',
    columns: [
      { key: 'id', label: 'id', type: 'number' },
      { key: 'pair', label: 'pair', type: 'number' },
      { key: 'side', label: 'side', type: 'number' },
      { key: 'size', label: 'size', type: 'number' },
      { key: 'price', label: 'price', type: 'number' },
      { key: 'total', label: 'total', type: 'number' },
      { key: 'fee', label: 'fee', type: 'number' },
      { key: 'executionId', label: 'executionId', type: 'number' },
      { key: 'dateTime', label: 'dateTime', type: 'number' },
    ],
  },
  {
    label: 'Inactive Orders',
    value: 'inactive',
    columns: [
      { key: 'pair', label: 'pair', type: 'number' },
      { key: 'side', label: 'side', type: 'number' },
      { key: 'type', label: 'type', type: 'number' },
      { key: 'size', label: 'size', type: 'number' },
      { key: 'price', label: 'price', type: 'number' },
      { key: 'dateTime', label: 'dateTime', type: 'number' },
      { key: 'status', label: 'status', type: 'number' },
    ],
  },
  {
    label: 'Trade Reports',
    value: 'tradeReports',
    columns: [
      { key: 'pair', label: 'pair', type: 'number' },
      { key: 'side', label: 'side', type: 'number' },
      { key: 'size', label: 'size', type: 'number' },
      { key: 'price', label: 'price', type: 'number' },
      { key: 'fee', label: 'fee', type: 'number' },
      { key: 'dateTime', label: 'dateTime', type: 'number' },
      { key: 'status', label: 'status', type: 'number' },
    ],
  },
]

const ORDER_BALANCE_COLUMNS = [
  { key: 'product', label: 'Product', type: 'string' },
  { key: 'XTZ', label: 'XTZ', type: 'number' },
  { key: 'THB', label: 'THB', type: 'number' },
]

const RECENT_TRADES_COLUMNS = [
  {
    key: 'price',
    label: 'Price',
    type: 'string',
  },
  {
    key: 'qty',
    label: 'Qty',
    type: 'number',
  },
  {
    key: 'time',
    label: 'Time',
    type: 'string',
  },
]

const ORDER_BOOK_COLUMNS = [
  {
    key: 'price',
    label: 'Price',
    type: 'string',
  },
  {
    key: 'qty',
    label: 'Qty',
    type: 'number',
  },
  {
    key: 'mySize',
    label: 'My Size',
    type: 'string',
  },
]

export { ORDER_TABS, ORDER_BALANCE_COLUMNS, RECENT_TRADES_COLUMNS, ORDER_BOOK_COLUMNS }
