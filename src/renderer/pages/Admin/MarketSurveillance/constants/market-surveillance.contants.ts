export const TABS = [
  {
    label: 'Price Difference',
    path: 'price-difference',
    component: '',
    actions: [],
  },
  {
    label: 'Quantity Difference',
    path: 'quantity-difference',
    component: '',
    actions: [],
  },
  {
    label: 'Frequent Order',
    path: 'frequent-order',
    component: '',
    actions: [],
  },
  {
    label: 'Investor Self Trade ( IP Address )',
    path: 'self-trade',
    component: '',
    actions: [],
  },
  {
    label: 'Investor Difference By Price',
    path: 'difference-by-price',
    component: '',
    actions: [],
  },
  {
    label: 'Investor Trade Price Difference',
    path: 'trade-price-difference',
    component: '',
    actions: [],
  },
  {
    label: 'Investor Split Order',
    path: 'split-order',
    component: '',
    actions: [],
  },
]

export const PRICE_DIFFERENCE_COLUMNS = [
  { key: 'createdAt', label: 'Date Time', type: 'string' },
  { key: 'customerId', label: 'Customer ID', type: 'string' },
  { key: 'customerName', label: 'Customer Name', type: 'string' },
  { key: 'customerEmail', label: 'Customer Email', type: 'string' },
  { key: 'token', label: 'Token', type: 'string' },
  { key: 'side', label: 'Side', type: 'string' },
  { key: 'lastTradePrice', label: 'Last Trade Price', type: 'string' },
  { key: 'orderPrice', label: 'Order Price', type: 'string' },
  { key: 'percentageDifference', label: 'Percent Difference', type: 'string' },
]

export const QUANTITY_DIFFERENCE_COLUMNS = [
  { key: 'fromDateTime', label: 'From Date Time', type: 'string' },
  { key: 'toDateTime', label: 'To Date Time', type: 'string' },
  { key: 'token', label: 'Token', type: 'string' },
  { key: 'fromQuantity', label: 'From Quantity', type: 'string' },
  { key: 'toQuantity', label: 'To Quantity', type: 'string' },
  { key: 'percentDifference', label: 'Percent Difference', type: 'string' },
  {
    key: 'thresholdPercentageDifference',
    label: 'Threshold Percentage Difference',
    type: 'string',
  },
]

export const FREQUENT_ORDER_COLUMNS = [
  { key: 'createdAt', label: 'Date Time', type: 'string' },
  { key: 'accountId', label: 'Customer ID', type: 'string' },
  { key: 'customerName', label: 'Customer Name', type: 'string' },
  { key: 'customerEmail', label: 'Customer Email', type: 'string' },
  { key: 'orderId', label: 'Order ID', type: 'string' },
  { key: 'token', label: 'Token', type: 'string' },
  { key: 'side', label: 'Side', type: 'string' },
  { key: 'originalQuantity', label: 'Quantity', type: 'string' },
  { key: 'limitPrice', label: 'Price', type: 'string' },
]

export const INVESTOR_SELF_TRADE_COLUMNS = [
  { key: 'createdAt', label: 'Date Time', type: 'string' },
  { key: 'token', label: 'Token', type: 'string' },
  { key: 'tradeId', label: 'Trade ID', type: 'string' },
  { key: 'buyerEmail', label: 'Buyer Email', type: 'string' },
  { key: 'buyerIPAddress', label: 'Buyer IP Address', type: 'string' },
  { key: 'sellerEmail', label: 'Seller Email', type: 'string' },
  { key: 'sellerIpAddress', label: 'Seller IP Address', type: 'string' },
]

export const INVESTOR_DIFFERENCE_BY_PRICE_COLUMNS = [
  { key: 'createdAt', label: 'Date Time', type: 'string' },
  { key: 'customerId', label: 'Customer ID', type: 'string' },
  { key: 'customerName', label: 'Customer Name', type: 'string' },
  { key: 'customerEmail', label: 'Customer Email', type: 'string' },
  { key: 'orderId', label: 'Order ID', type: 'string' },
  { key: 'token', label: 'Token', type: 'string' },
  { key: 'side', label: 'Side', type: 'string' },
  { key: 'quantity', label: 'Quantity', type: 'string' },
  { key: 'price', label: 'Price', type: 'string' },
]

export const INVESTOR_TRADE_PRICE_DIFFERENCE_COLUMNS = [
  { key: 'createdAt', label: 'Date Time', type: 'string' },
  { key: 'customerId', label: 'Customer ID', type: 'string' },
  { key: 'customerName', label: 'Customer Name', type: 'string' },
  { key: 'customerEmail', label: 'Customer Email', type: 'string' },
  { key: 'tradeId', label: 'Trade ID', type: 'string' },
  { key: 'tradePrice', label: 'Trade Price', type: 'string' },
  { key: 'token', label: 'Token', type: 'string' },
  { key: 'side', label: 'Side', type: 'string' },
  { key: 'lastTradePrice', label: 'Last Trade Price', type: 'string' },
  { key: 'percentDifference', label: 'Percent Difference', type: 'string' },
]

export const INVESTOR_SPLIT_ORDER_COLUMNS = [
  { key: 'createdAt', label: 'Date Time', type: 'string' },
  { key: 'customerId', label: 'Customer ID', type: 'string' },
  { key: 'customerName', label: 'Customer Name', type: 'string' },
  { key: 'customerEmail', label: 'Customer Email', type: 'string' },
  { key: 'tradeId', label: 'Trade ID', type: 'string' },
  { key: 'tradePrice', label: 'Trade Price', type: 'string' },
  { key: 'token', label: 'Token', type: 'string' },
  { key: 'side', label: 'Side', type: 'string' },
  { key: 'quantity', label: 'Quantity', type: 'string' },
]

export const COLUMNS_LIST = [
  PRICE_DIFFERENCE_COLUMNS,
  QUANTITY_DIFFERENCE_COLUMNS,
  FREQUENT_ORDER_COLUMNS,
  INVESTOR_SELF_TRADE_COLUMNS,
  INVESTOR_DIFFERENCE_BY_PRICE_COLUMNS,
  INVESTOR_TRADE_PRICE_DIFFERENCE_COLUMNS,
  INVESTOR_SPLIT_ORDER_COLUMNS,
]
