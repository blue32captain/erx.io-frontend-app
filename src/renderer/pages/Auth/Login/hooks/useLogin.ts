import { computed } from 'vue'
import authStore, {
  login as signIn,
  logout,
  init as autologin,
} from '/@/store/modules/Auth/auth.module'
import { encodePassword } from '/@/utils/encoders'

const useLogin = () => {
  const login = (payload: { username: string; password: string }) => {
    const data = {
      username: payload.username,
      password: encodePassword(payload.password),
      serviceCode: 1,
      deviceId: '24787297130491616',
      deviceOS: 'android',
    }

    signIn(data)
  }

  const init = () => {
    const userPublicId = Number.parseInt(localStorage.getItem('userPublicId') || '')
    const token = localStorage.getItem('token')
    const remote = localStorage.getItem('remote')

    if (userPublicId && token && remote) {
      autologin({
        userPublicId,
        token,
        deviceId: '24787297130491616',
        deviceOS: 'android',
        remote,
      })
    }
  }

  const loading = computed(() => authStore.loading.login || authStore.loading.init)
  const error = computed(() => authStore.error.login || authStore.error.init)

  return {
    init,
    login,
    logout,
    loading,
    error,
  }
}

export default useLogin
