<script lang="ts">
import { VNavbar, VNavbarItem } from '@pathscale/vue3-ui'
import { useI18n } from 'vue-i18n'
import i18n from '/@/i18n'
import useUser from '/@/hooks/useUser'

import useRoutes from '../hooks/useRoutes'

export default {
  name: 'Navbar',
  components: { VNavbar, VNavbarItem },
  props: {
    sidebarOpen: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['logout', 'update:sidebarOpen'],
  setup(props, { emit }) {
    const { t } = useI18n()

    const { active, redirecTo, routes } = useRoutes()
    const lang = i18n.global.locale.value
    function onClick() {
      emit('update:sidebarOpen', !props.sidebarOpen)
    }

    function changeLanguage(lang: string) {
      i18n.global.locale.value = lang
    }
    const { username, role, isAdmin } = useUser()

    return {
      logout: () => emit('logout'),
      onClick,
      t,
      username,
      role,
      active,
      routes,
      redirecTo,
      isAdmin,
      changeLanguage,
      lang,
    }
  },
}
</script>

<template>
  <!--  eslint-disable @pathscale/vue3/v-directive -->
  <v-navbar>
    <template #brand>
      <section class="pt-2 is-clickable is-hidden-tablet mx-3" @click="onClick">
        <icon tag="a" v-show="!sidebarOpen" fill="black" name="menu" size="is-medium" />
        <icon tag="a" v-show="sidebarOpen" fill="black" name="close" size="is-medium" />
      </section>
    </template>

    <template #start>
      <template v-for="(item, key) in routes" :key="key">
        <v-navbar-item
          tag="router-link"
          :to="{ name: item.route.name, params: item.route.meta?.defaultParams }"
          :active="active(item.route.path)"
          v-if="item.route">
          {{ item.title }}
        </v-navbar-item>
        <v-navbar-dropdown
          v-if="item.subRoutes"
          :label="item.title"
          hoverable
          close-on-click
          :class="{
            'has-text-weight-bold has-text-primary': active(item.subRoutes),
          }">
          <v-navbar-item
            class="has-text-weight-normal"
            v-for="(subRouteItem, subRoutekey) in item.subRoutes"
            :key="subRoutekey"
            tag="router-link"
            :to="{ name: subRouteItem.route.name, params: subRouteItem.route.meta?.defaultParams }">
            {{ subRouteItem.title }}
          </v-navbar-item>
        </v-navbar-dropdown>
      </template>
    </template>

    <template #end>
      <v-navbar-item
        v-if="isAdmin"
        tag="router-link"
        :to="{ name: redirecTo.path, params: redirecTo.defaultParams }">
        Go to {{ redirecTo.label }}
      </v-navbar-item>
      <v-navbar-dropdown right close-on-click hoverable>
        <template #label>
          {{ username }}
        </template>

        <v-navbar-item>
          {{ role }}
        </v-navbar-item>

        <v-navbar-item @click="logout">
          {{ t('header.logout') }}
        </v-navbar-item>
        <v-navbar-item tag="router-link" :to="{ name: 'settings' }">
          {{ t('header.settings') }}
        </v-navbar-item>
      </v-navbar-dropdown>

      <v-navbar-dropdown right close-on-click hoverable>
        <template #label>
          {{ t(lang) }}
        </template>

        <v-navbar-item @click="changeLanguage('thai')">
          {{ t('thai') }}
        </v-navbar-item>
        <v-navbar-item @click="changeLanguage('en')">
          {{ t('en') }}
        </v-navbar-item>
      </v-navbar-dropdown>
    </template>
  </v-navbar>
</template>

<style >
.has-text-primary > .navbar-link {
  color: var(--blm-primary);
}

.navbar-dropdown {
  min-width: unset;
}

.navbar-brand {
  justify-content: space-between;
}

.navbar-burger.burger {
  display: none;
}

@media screen and (min-width: 768px) {
  .navbar,
  .navbar-menu,
  .navbar-start,
  .navbar-end {
    align-items: stretch;
    display: flex;
  }

  .navbar-dropdown {
    background-color: var(--blm-nav-drp-bg-clr);
    border-bottom-left-radius: var(--blm-nav-drp-radius);
    border-bottom-right-radius: var(--blm-nav-drp-radius);
    border-top: var(--blm-nav-drp-bd-top);
    box-shadow:
      0 8px 8px
      hsla(var(--blm-sch-inv-h), var(--blm-sch-inv-s), var(--blm-sch-inv-l), 0.1);
    display: none;
    font-size: 0.875rem;
    left: 0;
    min-width: 100%;
    position: absolute;
    top: 100%;
    z-index: var(--blm-nav-drp-z);
  }

  .navbar-item.has-dropdown {
    align-items: stretch;
  }
}
</style>
