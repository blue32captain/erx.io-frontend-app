import { t } from '/@/i18n'

const DEPOSIT_COLUMNS = [
  { key: 'createdAt', label: t('table.time'), type: 'string' },
  { key: 'transactionId', label: t('table.reference'), type: 'number' },
  { key: 'amount', label: t('table.amount'), type: 'number' },
  { key: 'status', label: t('table.status'), type: 'number' },
]

const WITHDRAW_COLUMNS = [
  { key: 'createdAt', label: t('table.time'), type: 'string' },
  { key: 'transactionId', label: t('table.reference'), type: 'number' },
  { key: 'amount', label: t('table.amount'), type: 'number' },
  { key: 'feeAmount', label: t('table.fee'), type: 'number' },
  { key: 'status', label: t('table.status'), type: 'number' },
  { key: 'cancel', label: '', type: 'unknow' },
]

const DEFAULT_COLUMNS = {
  deposit: DEPOSIT_COLUMNS,
  withdraw: WITHDRAW_COLUMNS,
}

export default DEFAULT_COLUMNS
