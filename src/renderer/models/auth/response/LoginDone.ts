export interface LoginDone {
  method: number
  seq: number
  params: Params
}

export interface Params {
  userPublicId: number
  serviceTokens: Service
  serviceUrls: Service
}

export interface Service {
  verify: string
  user: string
}
