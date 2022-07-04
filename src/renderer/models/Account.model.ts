// Generated by https://quicktype.io

export interface Status {
  isCompleted: boolean
  isExpired: boolean
  message: null
}

export interface SuitabilityAssessment {
  isNotifyUpdate: null
  age: number
  score: number
  ageThreshold: number
  scoreThreshold: number
  isWithinAgeThreshold: boolean
  isWithinScoreThreshold: boolean
  isCompleted: boolean
  isExpired: boolean
  message: null
}

export interface AccountStatus {
  isApplicationComplete: boolean
  isTradeEnabled: boolean
  isMfaEnabled: boolean
  message: null
  contactInformation: Status
  identification: Status
  suitabilityAssessment: SuitabilityAssessment
  termsAndConditions: Status
  privacyPolicy: Status
}

export interface Account {
  accountPublicId: number
  accountNumber: string
  accountType: string
  accountStatus: string
  network: null
  networkType: string
  updateAt: number
  createAt: number
}
