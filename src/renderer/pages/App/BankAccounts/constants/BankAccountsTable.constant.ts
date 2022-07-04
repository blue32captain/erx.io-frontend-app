import { t } from '/@/i18n'

const DEFAULT_COLUMNS = [
  { key: 'bank', label: t('bankAcc.bank'), type: 'string' },
  { key: 'accountNumber', label: t('bankAcc.accNum'), type: 'string' },
  { key: 'status', label: t('bankAcc.status'), type: 'string' },
  { key: 'isPrimary', label: '', type: 'string' },
]

export default DEFAULT_COLUMNS
