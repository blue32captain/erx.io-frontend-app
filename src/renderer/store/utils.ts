/* eslint-disable quotes */
/* eslint-disable indent */

import { GetRecoveryQuestionsDone } from '/@/models/app/response'
import { TradingSymbol } from './modules/App/types/trading-symbols.types'
import { Questions } from './modules/App/types/account.types'

export function dateDiff(first: number, second: number) {
  // Take the difference between the dates and divide by milliseconds per day.
  // Round to nearest whole number to deal with DST.
  return Math.round(Math.abs((first - second) / (1000 * 60 * 60 * 24)))
}

/**
 * @description Normalize array of array.
 * @param {Array<string>} headers
 * @param {Array<Array<number|string>>} data
 * @param {string} key
 */

export const normalize = <T>(
  { headers, data }: { headers: string[]; data: (number | string | boolean | null)[][] },
  key: string,
): Record<string | number, T> => {
  if (!headers) {
    return {}
  }
  const keySelected = headers.indexOf(key)
  const result = {}

  data.forEach(element => {
    const key = typeof element[keySelected] !== 'boolean' ? element[keySelected] : null
    if (!key) {
      throw new Error("You can't select a boolean like key")
    }
    const value = {}
    headers.forEach((header, index) => {
      Object.assign(value, { [header]: element[index] })
    })
    Object.assign(result, {
      [key as string | number]: value,
    })
  })
  return result
}

export function clone<T>(obj: Record<string, unknown>): T {
  return JSON.parse(JSON.stringify(obj))
}

export const formatQuestions = ({ params }: GetRecoveryQuestionsDone): Questions => {
  const questions: Questions = {}
  params.data.forEach((e, i) => {
    const category = e[0]
    const questionId = e[1]
    const content = e[2]

    questions[category] = questions[category]
      ? {
          questionId: [...questions[category].questionId, questionId],
          content: [...questions[category].content, content],
        }
      : { questionId: [questionId], content: [content] }
  })

  return questions
}

export const assingTradingSymbol = <T extends Record<'symbolId', number | string>>(
  tradeSymbols?: Record<string | number, TradingSymbol> | null,
  data?: T[],
): void => {
  data?.forEach(trade => {
    if (trade.symbolId && tradeSymbols?.[trade.symbolId]) {
      trade.symbolId = tradeSymbols[trade.symbolId].name
    }
  })
}
