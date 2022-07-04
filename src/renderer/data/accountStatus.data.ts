const data = {
  isApplicationComplete: true,
  isTradeEnabled: true,
  isMfaEnabled: true,
  message: null,
  contactInformation: {
    isCompleted: true,
    isExpired: false,
    message: null,
  },
  identification: {
    isCompleted: false,
    isExpired: false,
    message: null,
  },
  suitabilityAssessment: {
    isNotifyUpdate: null,
    age: 42,
    score: 34,
    ageThreshold: 60,
    scoreThreshold: 37,
    isWithinAgeThreshold: true,
    isWithinScoreThreshold: false,
    isCompleted: true,
    isExpired: false,
    message: null,
  },
  termsAndConditions: {
    isCompleted: true,
    isExpired: false,
    message: null,
  },
  privacyPolicy: {
    isCompleted: true,
    isExpired: false,
    message: null,
  },
}

export default data
