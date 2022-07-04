export interface WalletBalance {
  accountPublicId: number
  available: number
  locked: number
  assetId: number
}

export interface Coin {
  id: number
  name: string
  status: string
  precision: number
  price: number
  last24hPriceThb: number
}
