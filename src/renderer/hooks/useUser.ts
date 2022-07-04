import store from '/@/store/modules/Auth/auth.module'
import { computed, toRef } from 'vue'
import Role from '/@/utils/roles.enum'

const useUser = () => {
  const username = localStorage.getItem('username')

  const isAdmin = computed(() => {
    return [Role.administrator, Role.superadmin, Role.developer].includes(store.role as Role)
  })

  return {
    isAdmin,
    username,
    role: toRef(store, 'role'),
    userPublicId: toRef(store, 'userPublicId'),
    logged: toRef(store, 'logged'),
  }
}

export default useUser
