import { reactive, watchEffect, watch } from 'vue'

const useCheckboxs = (options: string[]) => {
  const initState: Record<string, { label: string; value: boolean }> = {
    all: {
      label: 'all',
      value: true,
    },
  }

  options.forEach(option => {
    initState[option] = {
      label: option,
      value: true,
    }
  })

  const checkbox = reactive(initState)

  watch(
    () => [checkbox.all.value],
    () => {
      if (checkbox.all.value || options.every(key => checkbox[key].value)) {
        options.forEach(option => {
          checkbox[option].value = checkbox.all.value
        })
      }
    },
  )

  watchEffect(() => {
    checkbox.all.value = options.every(key => checkbox[key].value)
  })

  return checkbox
}

export default useCheckboxs
