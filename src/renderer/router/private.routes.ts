import { RoutesType } from './router.types'
import {
  Dashboard,
  Wallet,
  Fiat,
  TransactionHistory,
  BankAccounts,
  Report,
  Support,
  Trade,
  AddBankAccount,
  Settings,
} from '/@/pages'
import { t } from '/@/i18n'
import { Component } from 'vue'

export const privateRoutes: RoutesType[] = [
  {
    title: t('header.dashboard'),
    icon: 'dashboard',
    showInSidebar: true,
    route: {
      component: Dashboard as unknown as Component,
      name: 'dashboard',
      path: 'dashboard',
    },
  },
  {
    title: t('header.wallet'),
    showInSidebar: true,
    icon: 'wallet',
    route: {
      component: Wallet as unknown as Component,
      name: 'wallet',
      path: 'wallet',
    },
  },
  {
    route: {
      component: Fiat as unknown as Component,
      name: 'fiat',
      path: '/wallet/fiat/:type?',
    },
  },
  {
    title: t('header.trade'),
    showInSidebar: true,
    icon: 'trade',
    route: {
      component: Trade as unknown as Component,
      name: 'trade',
      path: 'trade',
    },
  },
  {
    showInSidebar: true,
    title: t('header.transHistory'),
    icon: 'history',
    route: {
      component: TransactionHistory as unknown as Component,
      name: 'transaction-history',
      path: 'transaction-history',
    },
  },
  {
    title: t('header.bankAcc'),
    showInSidebar: true,
    icon: 'bank-account',
    route: {
      component: BankAccounts as unknown as Component,
      name: 'bankAccounts',
      path: 'bank-accounts',
    },
  },
  {
    route: {
      component: AddBankAccount as unknown as Component,
      name: 'addBankAccounts',
      path: 'bank-accounts/add-bank-account',
    },
  },
  {
    title: t('header.report'),
    showInSidebar: true,
    icon: 'report',
    route: {
      component: Report as unknown as Component,
      name: 'report',
      path: 'report',
    },
  },
  {
    title: t('header.support'),
    showInSidebar: true,
    icon: 'support',
    route: {
      component: Support as unknown as Component,

      name: 'support',
      path: 'support',
    },
  },
  {
    title: t('header.settings'),
    route: {
      component: Settings as unknown as Component,
      name: 'settings',
      path: 'settings',
    },
  },
]
