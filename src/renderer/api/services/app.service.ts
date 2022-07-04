import { IService } from '@pathscale/wss-adapter/types'

const service: IService = {
  remote: '',
  methods: {
    40010: {
      name: 'GetUsers',
      parameters: ['offset', 'limit']
    },
    40020: {
      name: 'ModifyUser',
      parameters: ['userPublicId']
    },
    40030: {
      name: 'GetAccounts',
      parameters: ['offset', 'limit']
    },
    40040: {
      name: 'GetTrades',
      parameters: ['offset', 'limit']
    },
    40050: {
      name: 'GetTransactions',
      parameters: ['offset', 'limit']
    },
    40070: {
      name: 'AddTradingSymbol',
      parameters: [
        'name',
        'productType',
        'baseCurrencyId',
        'quoteCurrencyId',
        'minQuantity',
        'minPrice',
        'feeProportion'
      ]
    },
    40080: {
      name: 'ModifyTradingSymbol',
      parameters: ['tradingSymbolId', 'minQuantity', 'minPrice', 'feeProportion']
    },
    40110: {
      name: 'GetOrders',
      parameters: ['offset', 'limit']
    },
    40120: {
      name: 'GetWithdrawalDestinations',
      parameters: ['offset', 'limit']
    },
    40130: {
      name: 'SetRole',
      parameters: ['userPublicId', 'role']
    },
    40140: {
      name: 'GetAmloReport',
      parameters: ['offset', 'limit']
    },
    40150: {
      name: 'GetConfiguration',
      parameters: ['type']
    },
    40160: {
      name: 'SetConfiguration',
      parameters: ['type', 'value']
    },
    40170: {
      name: 'GetFrequentOrders',
      parameters: ['offset', 'limit']
    },
    40180: {
      name: 'GetInvestorDifferenceByPrice',
      parameters: ['offset', 'limit']
    },
    40190: {
      name: 'GetMarketPriceDifference',
      parameters: ['offset', 'limit']
    },
    40200: {
      name: 'GetMarketQuantityDifference',
      parameters: ['offset', 'limit']
    },
    40210: {
      name: 'GetNegativeBalance',
      parameters: ['offset', 'limit']
    },
    40220: {
      name: 'GetSelfTrade',
      parameters: ['offset', 'limit']
    },
    40230: {
      name: 'GetStrReportDetails',
      parameters: ['offset', 'limit']
    },
    40240: {
      name: 'GetStrReportHeader',
      parameters: ['offset', 'limit']
    },
    40250: {
      name: 'GetTradePriceDifference',
      parameters: ['offset', 'limit']
    },
    40260: {
      name: 'GetInvestors',
      parameters: ['offset', 'limit']
    },
    40270: {
      name: 'GetSplitOrder',
      parameters: ['offset', 'limit']
    },
    40280: {
      name: 'UpdateSecReportBusinessWallet',
      parameters: ['tableId', 'headers', 'body']
    },
    40290: {
      name: 'UpdateSecReportCustomerData',
      parameters: ['tableId', 'headers', 'body']
    },
    40300: {
      name: 'UpdateSecReportCustomerOutstanding',
      parameters: ['tableId', 'headers', 'body']
    },
    40310: {
      name: 'UpdateSecReportCustomerWallet',
      parameters: ['tableId', 'headers', 'body']
    },
    40320: {
      name: 'UpdateSecReportDtwReport',
      parameters: ['tableId', 'headers', 'body']
    },
    40330: {
      name: 'UpdateSecReportIdentification',
      parameters: ['tableId', 'headers', 'body']
    },
    40340: {
      name: 'UpdateSecReportOrderbook',
      parameters: ['tableId', 'headers', 'body']
    },
    40350: {
      name: 'UpdateSecReportTradebook',
      parameters: ['tableId', 'headers', 'body']
    },
    40360: {
      name: 'GetSecReportBusinessWallet',
      parameters: []
    },
    40370: {
      name: 'GetSecReportCustomerData',
      parameters: []
    },
    40380: {
      name: 'GetSecReportCustomerOutstanding',
      parameters: []
    },
    40390: {
      name: 'GetSecReportCustomerWallet',
      parameters: []
    },
    40400: {
      name: 'GetSecReportDtwReport',
      parameters: []
    },
    40410: {
      name: 'GetSecReportIdentification',
      parameters: []
    },
    40420: {
      name: 'GetSecReportOrderbook',
      parameters: []
    },
    40430: {
      name: 'GetSecReportTradebook',
      parameters: []
    },
    20010: {
      name: 'GetTransactionHistory',
      parameters: []
    },
    20020: {
      name: 'GetTradeHistory',
      parameters: []
    },
    20030: {
      name: 'SubmitOrder',
      parameters: ['symbolId', 'amount', 'type', 'isBuyer']
    },
    20040: {
      name: 'GetBalance',
      parameters: ['accountPublicId']
    },
    20050: {
      name: 'GetBalances',
      parameters: []
    },
    20060: {
      name: 'GetCoins',
      parameters: []
    },
    20070: {
      name: 'GetSymbols',
      parameters: []
    },
    20080: {
      name: 'GetBankAccounts',
      parameters: []
    },
    20090: {
      name: 'AddBankAccount',
      parameters: ['accountNumber']
    },
    20100: {
      name: 'SetDefaultBankAccount',
      parameters: ['sourcePublicId']
    },
    20110: {
      name: 'WithdrawAsset',
      parameters: ['accountPublicId', 'amount', 'destinationPublicId']
    },
    20130: {
      name: 'GetLiveOrders',
      parameters: ['symbolId']
    },
    20140: {
      name: 'GetLedger',
      parameters: []
    },
    20150: {
      name: 'GetTradingSymbols',
      parameters: []
    },
    29950: {
      name: 'GetRecoveryQuestions',
      parameters: []
    },
    29960: {
      name: 'SetRecoveryQuestions',
      parameters: ['questionId', 'answer']
    },
    29980: {
      name: 'GetUserSettings',
      parameters: []
    },
    29990: {
      name: 'UpdateUserSettings',
      parameters: ['preferredLanguage', 'familyName', 'givenName', 'phoneNumber', 'email']
    }
  }
}

export default service
