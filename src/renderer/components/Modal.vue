<script lang="ts">
export default {
  name: 'CardModal',
  inheritAttrs: false,
  props: {
    title: String,
  },
  emits: ['close'],
}
</script>

<template>
  <div class="modal is-active">
    <div @click="$emit('close')" class="modal-background" />
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">{{ title }}</p>
        <button @click="$emit('close')" class="delete" aria-label="close" />
      </header>
      <section class="modal-card-body">
        <slot />
      </section>
      <footer class="modal-card-foot is-flex is-justify-content-flex-end">
        <slot name="actions" />
      </footer>
    </div>
  </div>
</template>
