import { RoutesType } from './router.types'
import {
  PersonalInformation,
  CountryInformation,
  ProfessionalProfile,
  AccountProfile,
  TaxForm,
  ProofOfFunds,
  GettingReady,
  Information,
  SettingUpYourAcccount,
  HouseRegistrationAddress,
} from '/@/pages'
// import { t } from '/@/i18n'
import { Component } from 'vue'

interface RoutesTypeCustom extends RoutesType {
  index: number
}

export const KYCRoutes: RoutesTypeCustom[] = [
  {
    title: 'Welcome',
    icon: 'dashboard',
    route: {
      component: GettingReady as unknown as Component,
      name: 'PersonGettingReadyalInformation',
      path: 'getting-ready',
    },
  },
  // {
  //   title: 'Information',
  //   icon: 'dashboard',
  //   route: {
  //     component: Information as unknown as Component,
  //     name: 'Information',
  //     path: 'information',
  //   },
  // },
  {
    title: 'Setting up your account',
    icon: 'dashboard',
    route: {
      component: SettingUpYourAcccount as unknown as Component,
      name: 'SettingUpYourAcccount',
      path: 'setting-up-your-account',
    },
  },
  {
    title: 'House Registrarion Address',
    icon: 'dashboard',
    route: {
      component: HouseRegistrationAddress as unknown as Component,
      name: 'HouseRegistrationAddress',
      path: 'house-registration-address',
    },
  },
  {
    title: 'Personal Information',
    icon: 'dashboard',
    route: {
      component: PersonalInformation as unknown as Component,
      name: 'PersonalInformation',
      path: 'personal-information',
    },
  },
  {
    title: 'Country Information',
    icon: '',
    route: {
      component: CountryInformation as unknown as Component,
      name: 'CountryInformation',
      path: 'country-information',
    },
  },
  {
    title: 'Professional Profile',
    icon: '',
    route: {
      component: ProfessionalProfile as unknown as Component,
      name: 'ProfessionalProfile',
      path: 'professional-profile',
    },
  },
  {
    title: 'Account Profile',
    icon: '',
    route: {
      component: AccountProfile as unknown as Component,
      name: 'AccountProfile',
      path: 'account-profile',
    },
  },
  {
    title: 'Tax Form',
    icon: '',
    route: {
      component: TaxForm as unknown as Component,
      name: 'TaxForm',
      path: 'tax-form',
    },
  },
  {
    title: 'Upload Documents',
    icon: '',
    route: {
      component: ProofOfFunds as unknown as Component,
      name: 'ProofOfFunds',
      path: 'proof-of-funds',
    },
  },
].map((e, i) => ({ ...e, index: i }))
