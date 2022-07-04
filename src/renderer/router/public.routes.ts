import { RoutesType } from './router.types'
import { Login, Signup, ResetPassword, SubmitRecoveryAnswers, ForgotPassword } from '/@/pages'
import { t } from '/@/i18n'
import { Component } from 'vue'

export const publicRoutes: RoutesType[] = [
  {
    title: t('login.signIn'),
    route: {
      component: Login as unknown as Component,
      name: 'login',
      path: '',
    },
  },
  {
    title: t('login.createAccount'),
    route: {
      component: Signup as unknown as Component,
      name: 'signup',
      path: 'signup',
    },
  },
  {
    title: t('title.securityChange'),
    route: {
      component: ResetPassword as unknown as Component,
      name: 'resetPassword',
      path: '/reset-password',
    },
  },
  {
    title: 'Forgot Password',
    route: {
      component: SubmitRecoveryAnswers as unknown as Component,
      name: 'submitRecoveryAnswers',
      path: '/submit-recovery-answers',
    },
  },
  {
    title: 'Forgot Password',
    route: {
      component: ForgotPassword as unknown as Component,
      name: 'forgotPassword',
      path: '/forgot-password',
    },
  },
]
