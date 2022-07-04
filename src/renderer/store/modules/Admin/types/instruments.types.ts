// temporary instrument type
export interface Instrument {
  symbol: string | number
  instrumentId: string | number
  productOne: string | number
  productTwo: string | number
  venueInstrumentId: string | number
  quantityIncrement: string | number
  priceIncrement: string | number
  disabled: boolean
}

export interface State {
  loading: Record<string, unknown>
  error: Record<string, unknown>
  items: Partial<Instrument>[]
}

export interface Mutations {
  getItems: (state: State) => Promise<void>
}

export interface Actions {
  getItems: () => Promise<void>
}
