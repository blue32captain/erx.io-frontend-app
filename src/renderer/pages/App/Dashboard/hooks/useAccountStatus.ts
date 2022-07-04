import { watchEffect, computed, toRef } from 'vue'
import accountStore, { getAccountStatus } from '/@/store/modules/App/account.module'
import { t } from '/@/i18n'

const STATUS = {
  contactInformation: {
    label: t('title.launchpadComplete'),
    message: t('desc.launchpadComplete'),
    icon: 'fingerprint',
  },
  identification: {
    label: t('title.verifyIdentity'),
    message: t('desc.verifyIdentity'),
    icon: 'passport',
  },
  suitabilityAssessment: {
    label: t('title.addBankAcc'),
    message: t('desc.addBankAcc'),
    icon: 'card',
  },
}

interface AccountStatus {
  label: string
  message: string
  icon: string
  status: boolean
}

const useAccountStatus = () => {
  watchEffect(() => {
    getAccountStatus()
  })

  const status = computed<AccountStatus[]>(() => {
    const keys = Object.keys(STATUS) as (keyof typeof STATUS)[]
    const data = keys.map(key => {
      const labels = STATUS[key]
      return {
        label: labels.label,
        icon: labels.icon,
        message: labels.message,
        status: accountStore.status[key].isCompleted,
      }
    }) as AccountStatus[]

    return data
  })

  return {
    status,
    loading: toRef(accountStore.loading, 'getAccountStatus'),
    error: toRef(accountStore.error, 'getAccountStatus'),
  }
}

export default useAccountStatus
