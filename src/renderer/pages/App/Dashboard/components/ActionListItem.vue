<script lang="ts">
export default {
  name: 'ActionListItem',
  props: {
    label: {
      type: String,
    },
    message: {
      type: String,
    },
    icon: {
      type: String,
      default: 'dashboard',
    },
    status: {
      type: Boolean,
    },
  },
  setup(props) {
    const iconColor = props.status ? 'green' : 'orange'
    const iconName = props.status ? 'check' : 'alert'
    return {
      iconColor,
      iconName,
    }
  },
}
</script>

<template>
  <div class="box total-card px-2 py-2 is-100-height">
    <div class="is-pulled-right">
      <icon :name="iconName" :fill="iconColor" />
    </div>
    <div class="is-flex is-align-items-start px-2 pt-2">
      <div class="mr-2">
        <icon :name="icon" fill="currentColor" />
      </div>
      <div>
        <div class="has-text-info is-size-5 pb-2">{{ label }}</div>
        <div class="pb-3">
          {{ message }}
        </div>
      </div>
    </div>
  </div>
</template>
