export interface GetUserSettings {
  seq: number
  method: number
  params: Params
}

export interface Params {
  familyName: null
  givenName: null
  email: null
  emailVerified: boolean
  phoneNumber: null
  phoneVerified: boolean
  role: string
}
