import { RouteRecordRaw } from 'vue-router'
import { RoutesType } from './router.types'

export const normalizeRoutes = (routeList: RoutesType[]): RouteRecordRaw[] => {
  const routes: RouteRecordRaw[] = []
  routeList
    .filter(menu => menu.route || menu.subRoutes)
    .forEach(menu => {
      if (menu.subRoutes) {
        menu.subRoutes.forEach(e => {
          if (e.route) {
            routes.push({
              ...e.route,
              meta: {
                ...e.route.meta,
                title: e.title || '',
              },
            })
          }
        })
      }
      if (menu.route) {
        routes.push({
          ...menu.route,
          meta: {
            ...menu.route.meta,
            title: menu.title || '',
          },
        })
      }
    })
  return routes
}

export const withMeta = (
  routes: RouteRecordRaw[],
  meta: Record<string, unknown>,
): RouteRecordRaw[] => {
  routes.forEach(route => {
    Object.assign(route.meta, meta)
  })

  return routes
}
