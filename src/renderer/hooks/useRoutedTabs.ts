import { RouteRecordName, useRoute } from 'vue-router'
import { ref, computed, watch } from 'vue'
import { router } from '/@/router'

export interface Tab {
  path: string
  component: unknown
}

const useRoutedTabs = (TABS: Tab[], baseName = '') => {
  const route = useRoute()

  const {
    params: { type },
  } = route

  const initTab = TABS.findIndex(({ path }) => path === type)

  const currentTab = ref(initTab)

  watch(
    () => currentTab.value,
    async () => {
      const { name } = route

      await router.push({
        name: baseName || (name as RouteRecordName),
        params: {
          type: TABS[currentTab.value].path,
        },
        query: {
          page: 1,
          limit: 25,
        },
      })
    },
  )
  const current = computed(() => {
    return TABS[currentTab.value]
  })

  return {
    currentTab,
    current,
  }
}

export default useRoutedTabs
