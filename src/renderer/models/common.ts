export type TableType<T> = {
  key: keyof T
  label: string
  type: string | number
}
