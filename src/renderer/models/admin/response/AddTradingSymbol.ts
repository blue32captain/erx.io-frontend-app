export interface AddTradingSymbol {
  seq: number
  method: number
  params: Params
}

export interface Params {
  tradingSymbolId: number
}
