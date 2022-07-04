import { t } from '/@/i18n'

const SIMPLIFIED_COLUMNS = [
  { key: 'name', label: t('table.asset'), type: 'string' },
  { key: 'available', label: t('table.holding'), type: 'number' },
  { key: 'price', label: t('table.price'), type: 'number' },
  { key: 'change24h', label: t('table.changes'), type: 'number' },
  { key: 'value', label: t('table.value'), type: 'number' },
]

const DETAILED_COLUMNS = [
  { key: 'name', label: t('table.asset'), type: 'string' },
  { key: 'amount', label: 'Amount', type: 'number' },
  { key: 'price', label: t('table.marketValue'), type: 'number' },
]

const DEFAULT_COLUMNS = {
  simplified: SIMPLIFIED_COLUMNS,
  detailed: DETAILED_COLUMNS,
}

export default DEFAULT_COLUMNS
