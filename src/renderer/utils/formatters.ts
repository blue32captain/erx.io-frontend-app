import { dateDiff } from '/@/store/utils'

export function toDateString(epoch: number) {
  const date = new Date(epoch * 1000).toDateString()
  return date
}

export function padLeft(x: number | string, len: number) {
  return x.toString().padStart(len, '0')
}

export function formatDateMMDDHHMM(epoch: number) {
  const dt = new Date(epoch * 1000)
  const month = padLeft(dt.getMonth() + 1, 2)
  const day = padLeft(dt.getDate(), 2)
  const minute = padLeft(dt.getMinutes(), 2)

  return `${month}/${day} ${dt.getHours()}:${minute}`
}

export function formatDateYYYYMMDD(epoch: number) {
  const dt = new Date(epoch * 1000)
  const YYYY = dt.getFullYear()
  const MM = dt.getMonth() + 1
  const DD = dt.getDate()

  return `${YYYY}-${MM}-${DD}`
}

export function capitalize(s: string) {
  return s[0].toUpperCase() + s.slice(1)
}

export function formatNumberToCurrency(n: number) {
  return new Intl.NumberFormat().format(n)
}

export function formatNextClaimAt(n: number) {
  return n ? `In ${dateDiff(new Date(), new Date(toDateString(n)))} days` : 'Waiting sync'
}

export function formatCamelCase(s: string) {
  return s.replace(/([A-Z])/g, ' $1').replace(/^./, function (str) {
    return str.toUpperCase()
  })
}

export const dateToUnix = (value: string): number => {
  return Number.parseInt((new Date(value).getTime() / 1000).toFixed(0))
}
