export interface Transaction {
  transactionId?: number
  destinationId?: null
  destinationAddress?: null
  assetId?: number
  amount?: number
  requestCode?: string
  status?: string
  updatedBy?: string
  updatedAt?: number
}

export interface State {
  loading: Record<string, unknown>
  error: Record<string, unknown>
  withdraws: Record<string | number, Transaction>
  deposits: Record<string | number, Transaction>
}

export interface Mutations {
  getItems: (state: State) => Promise<void>
}

export interface Actions {
  getItems: () => Promise<void>
}
