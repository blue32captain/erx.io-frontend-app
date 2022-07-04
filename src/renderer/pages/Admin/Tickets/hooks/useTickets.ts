import store, { getItems } from '/@/store/modules/Admin/tickets.module'
import { onMounted, toRef, computed, ref } from 'vue'

const PATHS = ['withdraws', 'deposits', 'asset-manager-wallet', 'approvals', 'ledger-entries']

const useTickets = () => {
  const table = ref(PATHS[0])

  onMounted(() => {
    getItems()
  })

  const filterItemByTable = (tableName: string): void => {
    table.value = tableName
  }

  const items = computed(() => {
    if (table.value === PATHS[0]) {
      return Object.values(store.withdraws)
    }
    if (table.value === PATHS[1]) {
      return Object.values(store.deposits)
    }
    return []
  })

  // const current = computed(() => {
  //   return store.items.find(item => item.accountId === id)
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
    filterItemByTable,
    loading: toRef(store.loading, 'getItems'),
    error: toRef(store.error, 'getItems'),
  }
}

export default useTickets
