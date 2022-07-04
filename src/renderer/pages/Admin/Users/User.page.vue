<script lang="ts">
import { reactive } from 'vue'

import { useRoutedTabs } from '/@/hooks'
import { DETAILS_TABS } from './constants/user.constant'
import { UserForm, UserRoleForm } from './components'
import useUsers from './hooks/useUsers'

import { Actions } from '/@/components'
import { TABS } from './constants/users.constant'

export default {
  name: 'User',
  components: {
    Actions,
    UserForm,
    UserRoleForm,
  },
  setup() {
    const { current: currentUser, modifyUser, loadingUpdate, loadingRole, setRole } = useUsers()

    const { currentTab } = useRoutedTabs(TABS, 'adminUsers')

    const state = reactive({
      showModal: false,
      showRoleModal: false,
    })

    const toggleModal = () => {
      state.showModal = !state.showModal
    }

    const toggleRoleModal = () => {
      state.showRoleModal = !state.showRoleModal
    }

    return {
      modifyUser,
      toggleModal,
      state,
      DETAILS_TABS,
      currentUser,
      loadingUpdate,
      toggleRoleModal,
      setRole,
      loadingRole,
      currentTab,
      TABS,
    }
  },
}
</script>

<template>
  <v-tabs v-model="currentTab" type="is-boxed" class="account-tabs">
    <v-tab :label="tab.label" v-for="tab in TABS" :key="tab.key" />
  </v-tabs>

  <user-form
    v-if="state.showModal"
    @close="toggleModal"
    :current="currentUser"
    @submit="modifyUser"
    :loading="loadingUpdate"/>

  <user-role-form
    v-if="state.showRoleModal"
    @close="toggleRoleModal"
    :current="currentUser"
    @submit="setRole"
    :loading="loadingRole"/>

  <div class="box">
    <v-columns>
      <v-column>
        <div class="subtitle">User {{ currentUser.userPublicId }}</div>
      </v-column>

      <v-column>
        <actions
          @edit="toggleModal"
          @edit-role="toggleRoleModal"
          @view-all="$router.back()"
          :items="DETAILS_TABS[0].actions"/>
      </v-column>
    </v-columns>

    <content-detail :current="currentUser" />
  </div>
</template>

