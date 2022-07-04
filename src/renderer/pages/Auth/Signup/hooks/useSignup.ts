import { toRef, computed } from 'vue'
import authStore, { signup as signUp, login } from '/@/store/modules/Auth/auth.module'
import { encodePassword } from '/@/utils/encoders'

const useSignup = () => {
  const signup = async (payload: { username: string; password: string }) => {
    const data = {
      username: payload.username,
      password: encodePassword(payload.password),
      preferredLanguage: 'en',
      agreedPrivacy: true,
      agreedTOS: true,
    }

    const success = await signUp(data)
    if (success) {
      const data = {
        username: payload.username,
        password: encodePassword(payload.password),
        serviceCode: 1,
        deviceId: '24787297130491616',
        deviceOS: 'android',
      }
      login(data)
    }
  }

  const loading = computed(() => authStore.loading.login || authStore.loading.signup)
  const error = computed(() => authStore.error.login || authStore.error.signup)

  return {
    signup,
    loading,
    error,
  }
}

export default useSignup
