import store, {
  getItems,
  getSecReport,
  updateSecReport,
} from '/@/store/modules/Admin/reports.module'
import { toRef, computed, onMounted } from 'vue'

const useReports = () => {
  onMounted(() => {
    getItems()
  })

  const items = computed(() => {
    return store.items
  })

  const downloading = computed(() => {
    return store.loading.getSecReport
  })

  const uploading = computed(() => {
    return store.loading.updateSecReport
  })

  return {
    download: getSecReport,
    downloading,
    error: toRef(store.error, 'getItems'),
    items,
    loading: toRef(store.loading, 'getItems'),
    update: updateSecReport,
    uploading,
  }
}

export default useReports
