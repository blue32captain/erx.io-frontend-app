import store, { getItems } from '/@/store/modules/Admin/instruments.module'
import { toRef, computed, onMounted } from 'vue'

const useInstruments = () => {
  onMounted(() => {
    getItems()
  })

  const items = computed(() => {
    return store.items
  })

  // const current = computed(() => {
  //   return data.find(item => item.instrumentId === id)
  // })

  // const add = (manager: GuildMember) => {
  //   addManager(clone(manager))
  // }

  // const remove = (manager: GuildMember) => {
  //   removeManager(clone(manager))
  // }

  // const update = (manager: GuildMember) => {
  //   updateManager(clone(manager))
  // }

  return {
    items,
    // current,
    loading: toRef(store.loading, 'getItems'),
    error: toRef(store.error, 'getItems'),
  }
}

export default useInstruments
