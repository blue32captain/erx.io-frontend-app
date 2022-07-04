<script lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default {
  name: 'FilterByDate',
  setup() {
    const from = ref('')
    const to = ref('')
    const route = useRoute()
    const router = useRouter()

    const onSearch = () => {
      if (from.value?.length && to.value?.length) {
        const query = {
          ...route.query,
          beginTime: from.value,
          endTime: to.value,
        }
        router.push({
          path: route.path,
          query,
        })
      }
    }

    return {
      from,
      to,
      onSearch,
    }
  },
}
</script>

<template>
  <div class="is-flex is-justify-content-center mb-6">
    <div class="container_filter_date">
      <v-columns>
        <v-column class="is-align-items-center is-flex">
          <span class="mr-4 is-size-6 has-text-weight-semibold">Date: </span>
        </v-column>
        <v-column>
          <v-field label="From" class="is-align-items-center" horizontal>
            <v-input v-model="from" type="date" placeholder="Text input" />
          </v-field>
        </v-column>
        <v-column>
          <v-field label="To" class="is-align-items-center" horizontal>
            <v-input v-model="to" type="date" placeholder="Text input" />
          </v-field>
        </v-column>

        <v-column>
          <v-button @click="onSearch" type="is-primary"> Search </v-button>
        </v-column>
      </v-columns>
    </div>
  </div>
</template>

<style scoped>
.container_filter_date {
  /* max-width: 300px; */
  background-color: #fff;
  display: flex;
  align-items: center;
  padding: 2em;
  border-radius: 5px;
}
</style>
