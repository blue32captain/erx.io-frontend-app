export interface AddBankAccount {
  seq: number
  method: number
  params: Params
}

export interface Params {
  accountPublicId: number
  accountStatus: string
}
