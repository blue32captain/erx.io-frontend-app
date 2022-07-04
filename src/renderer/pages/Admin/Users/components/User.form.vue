<script lang='ts'>
import { ref } from 'vue'
import { useErrorMessage, emailValidation } from '/@/utils/validators'
import { useValidation } from 'vue-composable'
import { User } from '/@/store/modules/Admin/types/users.type'
import { ModifyUser } from '/@/models/admin/request'

export default {
  name: 'UserForm',
  props: {
    current: {
      type: Object as () => User,
      required: true,
    },
    loading: Boolean,
  },
  emits: ['close', 'submit'],
  setup(props, { emit }) {
    const form = useValidation({
      familyName: {
        $value: ref(props.current.familyName || ''),
      },
      givenName: {
        $value: ref(props.current.givenName || ''),
      },
      email: {
        $value: ref(props.current.email || ''),
        isValid: {
          $validator(v) {
            return emailValidation.test(v)
          },
          $message: 'Please enter valid email address',
        },
      },
      phoneNumber: {
        $value: ref(props.current.phoneNumber || ''),
      },

      isBlocked: {
        $value: ref(props.current.blocked || false),
      },
      age: {
        $value: ref(props.current.age || 0),
      },
      emailVerified: {
        $value: ref(props.current.emailVerified || false),
      },
      phoneNumberVerified: {
        $value: ref(props.current.phoneVerified || false),
      },
    })

    const errorMessage = useErrorMessage(form)

    function onSubmit() {
      const value: ModifyUser = { userPublicId: props.current.userPublicId, ...form.toObject() }
      emit('submit', value)
    }

    return {
      form,
      onSubmit,
      errorMessage,
    }
  },
}
</script>

<template>
  <modal title="Edit User" @close="$emit('close')">
    <form @submit.prevent="onSubmit">
      <v-field :message="errorMessage('familyName')" type="is-danger" label="Family Name">
        <v-input
          placeholder="Family Name"
          v-model="form.familyName.$value"
          autofocus
          autocomplete="familyName"/>
      </v-field>
      <v-field :message="errorMessage('givenName')" type="is-danger" label="Given Name">
        <v-input
          placeholder="Given Name"
          v-model="form.givenName.$value"
          autofocus
          autocomplete="givenName"/>
      </v-field>
      <v-field :message="errorMessage('email')" type="is-danger" label="Email">
        <v-input
          placeholder="Email"
          type="email"
          v-model="form.email.$value"
          autofocus
          autocomplete="email"/>
      </v-field>
      <v-field :message="errorMessage('phoneNumber')" type="is-danger" label="Phone Number">
        <v-input
          placeholder="Phone Number"
          type="text"
          v-model="form.phoneNumber.$value"
          autofocus
          autocomplete="phoneNumber"/>
      </v-field>

      <v-columns>
        <v-column narrow>
          <v-field label="Blocked"> <v-checkbox v-model="form.isBlocked.$value" /></v-field>
        </v-column>
        <v-column narrow>
          <v-field label="Email Verified">
            <v-checkbox v-model="form.emailVerified.$value" />
          </v-field>
        </v-column>
        <v-column narrow>
          <v-field label="Phone Number Verified">
            <v-checkbox v-model="form.phoneNumberVerified.$value" />
          </v-field>
        </v-column>
      </v-columns>
    </form>
    <template #actions>
      <v-button @click="$emit('close')" type="is-light"> Cancel </v-button>
      <v-button @click="onSubmit" :disabled="form.$anyInvalid" :loading="loading" type="is-primary">
        Confirm
      </v-button>
    </template>
  </modal>
</template>

