import { appRoutes, adminRoutes, KYCRoutes } from '/@/router/routes'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const useRoutes = () => {
  const route = useRoute()

  const getKycRoute = computed(() => {
    const routes = route.path.includes('/kyc/')
    if (routes) {
      const name = route.path.split('/')[2]
      const current = KYCRoutes.find(item => item.route?.path === name)

      if (!current) {
        return null
      }

      return {
        ...current,
        next: current.index < KYCRoutes.length - 1 ? KYCRoutes[current.index + 1] : null,
        back: current.index > 0 ? KYCRoutes[current.index - 1] : null,
      }
    }
    return null
  })

  function active(routePath: string) {
    if (Array.isArray(routePath)) {
      const name = route.path.split('/')[2]
      return routePath.some(path => path.route.path.includes(name.slice(0, -1)))
    }
    const name = routePath.split('/')[0]
    return route.path.includes(name.slice(0, -1))
  }

  const redirecTo = computed(() => {
    const path = route.path.includes('/admin/')
      ? { label: 'Client', path: 'dashboard' }
      : { label: 'Admin', path: 'adminUsers', defaultParams: { type: 'verified' } }
    return path
  })

  const routes = computed(() => {
    const routes = route.path.includes('/admin/') ? adminRoutes : appRoutes
    return routes.filter(route => route?.showInSidebar)
  })

  return {
    active,
    redirecTo,
    routes,
    getKycRoute,
  }
}

export default useRoutes
