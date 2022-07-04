<script lang="ts">
import { Navbar, Sidebar, AppFooter } from './components'
import useLogin from '/@/pages/Auth/Login/hooks/useLogin'
import { reactive } from 'vue'

export default {
  name: 'Layout',
  components: { Navbar, Sidebar, AppFooter },
  setup() {
    const state = reactive({
      sidebarOpen: false,
      sidebarExpanded: false,
    })

    const { logout } = useLogin()
    return { logout, state }
  },
}
</script>


<template>
  <div class="is-flex app-wrapper is-flex-1">
    <div class="is-hidden-tablet sidebar-mobile">
      <sidebar @logout="logout" v-model:open="state.sidebarOpen" :sidebar-expanded="true" />
    </div>
    <div class="is-flex-1 is-flex is-flex-direction-column is-justify-content-space-between">
      <div>
        <navbar @logout="logout" v-model:sidebarOpen="state.sidebarOpen" class="px-3" />
        <div class="section">
          <router-view />
        </div>
      </div>
      <app-footer />
    </div>
  </div>
</template>

<style scoped>
@media screen and (max-width: 768px) {
  .section {
    padding: 1rem;
  }
}

.app-wrapper {
  background-color: #f0f0f0;
}

.sidebar-mobile {
  z-index: calc(var(--blm-nav-z) - 1);
  width: 0;
}

.sidebar-container {
  width: 80px;
}
</style>

