<script lang='ts'>
import { ref } from 'vue'
import { User } from '/@/store/modules/Admin/types/users.type'
import { SetRole } from '/@/models/admin/request'
import Role from '/@/utils/roles.enum'

export default {
  name: 'UserRoleForm',
  props: {
    current: {
      type: Object as () => User,
      required: true,
    },
    loading: Boolean,
  },
  emits: ['close', 'submit'],
  setup(props, { emit }) {
    const userRole = ref(props.current.role || '')
    function onSubmit() {
      const value: SetRole = {
        userPublicId: props.current.userPublicId,
        role: userRole.value,
      }
      console.log(value)
      emit('submit', value)
    }

    return {
      onSubmit,
      userRole,
      Role,
    }
  },
}
</script>

<template>
  <modal title="Edit User Role" @close="$emit('close')">
    <form @submit.prevent="onSubmit">
      <v-field label="Role">
        <v-select v-model="userRole" :placeholder="userRole">
          <option v-for="role in Object.values(Role)" :key="role" :value="role">
            {{ role }}
          </option>
        </v-select>
      </v-field>
    </form>
    <template #actions>
      <v-button @click="$emit('close')" type="is-light"> Cancel </v-button>
      <v-button @click="onSubmit" :loading="loading" type="is-primary"> Confirm </v-button>
    </template>
  </modal>
</template>

