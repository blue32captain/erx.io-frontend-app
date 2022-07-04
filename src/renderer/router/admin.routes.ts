import { Component } from 'vue'
import { RoutesType } from './router.types'
import {
  AdminUsers,
  AdminUser,
  // AdminSystemMetrics,
  AdminAccounts,
  AdminTrades,
  AdminOMSOrders,
  // AdminSettlements,
  AdminProducts,
  AdminInstruments,
  AdminTickets,
  AdminAccount,
  AdminTrade,
  AdminOMSOrder,
  AdminProduct,
  AdminInvestors,
  AdminDuplicateAddress,
  AdminSEC,
  AdminMarketSurveillance,
  AdminOperationReport,
} from '/@/pages'
// import { t } from '/@/i18n'

export const adminRoutes: RoutesType[] = [
  {
    title: 'Users',
    icon: 'account',
    showInSidebar: true,
    route: {
      component: AdminUsers as unknown as Component,
      name: 'adminUsers',
      path: 'users/:type?',
      meta: {
        defaultParams: {
          type: 'verified',
        },
      },
    },
  },
  {
    route: {
      component: AdminUser as unknown as Component,
      name: 'AdminUser',
      path: 'user/:type/:id',
      meta: {
        showBackNavigation: true,
        defaultParams: {
          type: 'list',
        },
      },
    },
  },
  {
    title: 'Accounts',
    icon: 'dashboard',
    showInSidebar: true,
    route: {
      component: AdminAccounts as unknown as Component,
      name: 'adminAccounts',
      path: 'accounts/:type?',
      meta: {
        defaultParams: {
          type: 'balances',
        },
      },
    },
  },
  {
    route: {
      component: AdminAccount as unknown as Component,
      name: 'AdminAccount',
      path: 'account/:id/:type?',
      meta: {
        defaultParams: {
          type: 'details',
        },
      },
    },
  },
  {
    title: 'Trades',
    icon: 'trade',
    showInSidebar: true,
    route: {
      component: AdminTrades as unknown as Component,
      name: 'adminTrades',
      path: 'trades/:type?',
      meta: {
        defaultParams: {
          type: 'list',
        },
      },
    },
  },
  {
    route: {
      component: AdminTrade as unknown as Component,
      name: 'adminTrade',
      path: 'trade/:type/:id',
      meta: {
        showBackNavigation: true,
        title: 'Trade',
        defaultParams: {
          type: 'details',
        },
      },
    },
  },
  {
    title: 'OMS Orders',
    icon: 'history',
    showInSidebar: true,
    route: {
      component: AdminOMSOrders as unknown as Component,
      name: 'adminOMSOrders',
      path: 'oms-orders/:type?',
      meta: {
        defaultParams: {
          type: 'orders',
        },
      },
    },
  },
  {
    route: {
      component: AdminOMSOrder as unknown as Component,
      name: 'adminOMSOrder',
      path: 'oms-order/:type/:id',
      meta: {
        showBackNavigation: true,
      },
    },
  },
  {
    title: 'Products',
    icon: 'report',
    showInSidebar: true,
    route: {
      component: AdminProducts as unknown as Component,
      name: 'adminProducts',
      path: 'products/:type?',
      meta: {
        defaultParams: {
          type: 'list',
        },
      },
    },
  },
  {
    route: {
      component: AdminProduct as unknown as Component,
      name: 'adminProduct',
      path: 'product/:type/:id',
      meta: {
        showBackNavigation: true,
        defaultParams: {
          type: 'details',
        },
      },
    },
  },
  {
    title: 'Instruments',
    icon: 'eye',
    showInSidebar: true,
    route: {
      component: AdminInstruments as unknown as Component,
      name: 'adminInstruments',
      path: 'instruments',
      meta: {},
    },
  },
  {
    title: 'Tickets',
    icon: 'passport',
    showInSidebar: true,
    route: {
      component: AdminTickets as unknown as Component,
      name: 'adminTickets',
      path: 'tickets/:type?',
      meta: {
        defaultParams: {
          type: 'withdraws',
        },
      },
    },
  },
  {
    title: 'Investors',
    icon: 'passport',
    showInSidebar: true,
    route: {
      component: AdminInvestors as unknown as Component,
      name: 'adminInvestors',
      path: 'investors/:type?',
      meta: {
        defaultParams: {
          type: 'on-board',
        },
      },
    },
  },
  {
    title: 'Market Surveillance',
    icon: 'passport',
    showInSidebar: true,
    route: {
      component: AdminMarketSurveillance as unknown as Component,
      name: 'adminMarketSurveillance',
      path: 'market-surveillance/:type?',
      meta: {
        defaultParams: {
          type: 'price-difference',
        },
      },
    },
  },
  {
    title: 'Operation Report',
    icon: 'passport',
    showInSidebar: true,
    route: {
      component: AdminOperationReport as unknown as Component,
      name: 'adminOperationReport',
      path: 'operation-report/:type?',
      meta: {
        defaultParams: {
          type: 'str-report',
        },
      },
    },
  },
  {
    title: 'Report',
    icon: 'dashboard',
    showInSidebar: true,
    subRoutes: [
      {
        title: 'Duplicate Address',
        showInSidebar: true,
        route: {
          component: AdminDuplicateAddress as unknown as Component,
          name: 'AdminDuplicateAddress',
          path: 'reports/duplicate-address',
          meta: {},
        },
      },
      {
        title: 'SEC',
        showInSidebar: true,
        route: {
          component: AdminSEC as unknown as Component,
          name: 'AdminSEC',
          path: 'reports/sec/:type?',
          meta: {
            defaultParams: {
              type: 'view',
            },
          },
        },
      },
    ],
  },
]
