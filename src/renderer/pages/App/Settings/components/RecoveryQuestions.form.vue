<script lang="ts">
import { computed, reactive, watchEffect } from 'vue'

export default {
  name: 'RecoveryQuestionsForm',
  props: {
    recoveryQuestions: {
      type: Object,
      required: true,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['submit'],
  setup(props, { emit }) {
    const state = reactive({
      categories: {},
      questionId: [],
      answer: [],
    })

    watchEffect(() => {
      state.categories = props.recoveryQuestions
    })

    const onSubmit = () => {
      emit('submit', {
        questionId: JSON.parse(JSON.stringify(state.questionId)),
        answer: JSON.parse(JSON.stringify(state.answer)),
      })
    }

    const isValid = computed(() => {
      let invalid = false
      state.answer.forEach((e: string) => {
        if (!e || e.length < 3) {
          invalid = true
        }
      })
      return !state.questionId.includes(null) && !invalid
    })
    return { onSubmit, state, isValid }
  },
}
</script>

<template>
  <!-- eslint-disable @pathscale/vue3/v-directive -->
  <form action="">
    <div v-for="(category, index) in Object.keys(state.categories)" :key="category" class="my-3">
      <v-columns>
        <v-column size="is-6">
          <v-field :label="`${category}`" class="is-capitalized">
            <v-select v-model="state.questionId[index]" placeholder="Select a question" expanded>
              <option
                v-for="(question, subindex) in state.categories[category].content"
                :value="state.categories[category].questionId[subindex]"
                :key="state.categories[category].questionId[subindex]">
                {{ question }}
              </option>
            </v-select>
          </v-field>
        </v-column>
        <v-column>
          <v-field :label="`Answer ${index + 1}`">
            <v-input type="text" v-model="state.answer[index]" />
          </v-field>
        </v-column>
      </v-columns>
    </div>

    <v-button type="is-primary" @click="onSubmit" :loading="loading" :disabled="!isValid">
      Save
    </v-button>
  </form>
</template>
