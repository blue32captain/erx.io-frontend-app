import store, { getItems, modifyUser, setRole } from '/@/store/modules/Admin/users.module'
import { computed, onMounted, Ref, ref, toRef, watch } from 'vue'
import { useRoute } from 'vue-router'
import { GetUsers } from '/@/models/admin/request'
import { clone } from '/@/store/utils'
import { User } from '/@/store/modules/Admin/types/users.type'

const useUsers = () => {
  const currentId = ref<string | number | null>(null)

  const route = useRoute()

  onMounted(() => {
    if (route.params?.id) {
      getById(route.params?.id as string)
    }
  })

  watch(
    () => [route.params, route.query],
    () => {
      if (['adminUsers'].includes(route.name as string)) {
        const query: GetUsers = {
          limit: Number(route.query.limit) || 25,
          offset: (Number(route.query.page) - 1) * Number(route.query.limit) || 0,
          emailKw: route.query.emailKw as string,
          givenNameKw: route.query.givenNameKw as string,
          familyNameKw: route.query.familyNameKw as string,
          username: route.query.username as string,
        }

        switch (route.params.type) {
          case 'verified':
            query.emailVerified = true
            break
          case 'unverified':
            query.emailVerified = false
            break
          case 'blocked':
            query.isBlocked = true
            break
          default:
            break
        }

        getItems(query)
      }
    },
  )

  const items = computed(() => {
    return Object.values(store.items).sort((a, b) => b.userPublicId - a.userPublicId)
  })

  const current = computed<User>(() => {
    if (store.items && currentId.value) {
      const data = clone(store.items) as Record<string, User>
      return data[currentId.value]
    }

    return {}
  })

  const getById = (id: string | number): void => {
    currentId.value = id
  }

  return {
    total: toRef(store, 'total'),
    setRole,
    modifyUser,
    current,
    getById,
    items,
    loading: toRef(store.loading, 'getItems'),
    error: toRef(store.error, 'getItems'),
    loadingUpdate: toRef(store.loading, 'modifyUser') as Ref<boolean>,
    errorUpdate: toRef(store.error, 'modifyUser'),
    loadingRole: toRef(store.loading, 'setRole') as Ref<boolean>,
  }
}

export default useUsers
