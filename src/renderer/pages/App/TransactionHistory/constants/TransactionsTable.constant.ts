import { t } from '/@/i18n'

const DEFAULT_COLUMNS = [
  { key: 'createdAt', label: t('table.time'), type: 'string' },
  { key: 'type', label: t('table.tokenType'), type: 'number' },
  { key: 'name', label: t('table.tokenCurrency'), type: 'number' },
  { key: 'status', label: t('table.status'), type: 'number' },
  { key: 'amount', label: t('table.amount'), type: 'number' },
]

export default DEFAULT_COLUMNS
