<script lang="ts">
import { useValidation } from 'vue-composable'
import { computed, ref, watchEffect } from 'vue'
import { useEmail, useErrorMessage, useRequired } from '/@/utils/validators'

import { useI18n } from 'vue-i18n'

import { Params as UserSettings } from '/@/models/app/response/GetUserSettings'
import { UpdateUserSettings } from '/@/models/app/request'

const defaultUser = {
  familyName: null,
  givenName: null,
  email: null,
  emailVerified: false,
  phoneNumber: null,
  phoneVerified: false,
  role: '',
}

export default {
  name: 'UserDetailsForm',
  props: {
    user: {
      type: Object as () => UserSettings,
      default: () => defaultUser,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['submit'],
  setup(props, { emit }) {
    const { t } = useI18n()

    const form = useValidation({
      email: useEmail(props.user.email),
      familyName: useRequired(props.user.familyName),
      givenName: useRequired(props.user.givenName),
      phoneNumber: {
        $value: ref(props.user.phoneNumber),
      },
    })

    watchEffect(() => {
      form.familyName.$value = props.user.familyName
      form.givenName.$value = props.user.givenName
      form.email.$value = props.user.email
      form.phoneNumber.$value = props.user.phoneNumber
    })

    const errorMessage = useErrorMessage(form)

    function onSubmit() {
      const payload: UpdateUserSettings = {
        preferredLanguage: 'en',
        familyName: form.familyName.$value ?? '',
        givenName: form.givenName.$value ?? '',
        email: form.email.$value ?? '',
        phoneNumber: form.phoneNumber.$value ?? '',
      }
      emit('submit', payload)
    }

    const disabled = computed(() => {
      return form.email.$anyInvalid || form.givenName.$anyInvalid || form.familyName.$anyInvalid
    })

    return {
      disabled,
      errorMessage,
      form,
      onSubmit,
      t,
    }
  },
}
</script>

<template>
  <form action="">
    <v-columns>
      <v-column>
        <v-field
          class="is-aligned-center"
          label="Email"
          :message="errorMessage('email')"
          type="is-danger">
          <v-input v-model="form.email.$value" />
        </v-field>
        <v-field
          class="is-aligned-center"
          label="Family Name"
          :message="errorMessage('familyName')"
          type="is-danger">
          <v-input v-model="form.familyName.$value" />
        </v-field>
      </v-column>

      <v-column>
        <v-field
          class="is-aligned-center"
          label="Given Name"
          :message="errorMessage('givenName')"
          type="is-danger">
          <v-input v-model="form.givenName.$value" />
        </v-field>
        <v-field
          class="is-aligned-center"
          label="Contact Number"
          :message="errorMessage('phoneNumber')"
          type="is-danger">
          <v-input v-model="form.phoneNumber.$value" />
        </v-field>
      </v-column>
    </v-columns>

    <v-button type="is-primary" @click="onSubmit" :loading="loading" :disabled="disabled">
      {{ t('desc.securityChangeSave') }}
    </v-button>
  </form>
</template>
