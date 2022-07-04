import { Component } from 'vue'
import { RouteRecordRaw } from 'vue-router'
import MainLayout from '/@/layouts/Main.layout.vue'
import AdminLayout from '/@/layouts/Admin.layout.vue'
import KycLayout from '/@/layouts/KYC.layout.vue'
import { privateRoutes } from './private.routes'
import { publicRoutes } from './public.routes'
import { KYCRoutes } from './kyc.routes'

import { adminRoutes } from './admin.routes'
import { normalizeRoutes, withMeta } from './utils'
import Role from '/@/utils/roles.enum'

const appRoutes = [...publicRoutes, ...privateRoutes]

const normalizedPublicRoutes = normalizeRoutes(publicRoutes)
const normalizedPrivateRoutes = withMeta(normalizeRoutes(privateRoutes), {
  private: true,
})
const normalizedKycRoutes = withMeta(normalizeRoutes(KYCRoutes), {
  private: true,
})

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: MainLayout as unknown as Component,
    children: [...normalizedPublicRoutes, ...normalizedPrivateRoutes],
  },
  {
    path: '/kyc',
    component: KycLayout as unknown as Component,
    children: [...normalizedKycRoutes],
  },
  {
    path: '/admin',
    component: AdminLayout as unknown as Component,
    children: withMeta(normalizeRoutes(adminRoutes), {
      private: true,
      roles: [Role.administrator, Role.developer, Role.superadmin],
    }),
  },
]

export { appRoutes, adminRoutes, KYCRoutes }

export default routes
