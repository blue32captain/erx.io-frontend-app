import { computed } from 'vue'
import { useRoute } from 'vue-router'

const useParams = () => {
  const route = useRoute()

  const params = computed(() => {
    return route.params
  })

  return params.value
}

export default useParams
