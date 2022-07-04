<script lang="ts">
import useRoutes from '../hooks/useRoutes'

const LogoSVG = 'https://ok11static.oktacdn.com/fs/bco/1/fs011zz007olZRbhl4x7'

export default {
  name: 'Sidebar',
  props: {
    sidebarExpanded: {
      type: Boolean,
      default: false,
    },
    open: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:sidebarExpanded'],
  setup(props, { emit }) {
    const { active, redirecTo, routes } = useRoutes()

    function onClick() {
      emit('update:sidebarExpanded', !props.sidebarExpanded)
    }

    return {
      active,
      routes,
      redirecTo,
      LogoSVG,
      onClick,
    }
  },
}
</script>

<template>
  <!-- eslint-disable @pathscale/vue3/v-directive -->
  <div class="has-background-white-bis has-border-gray is-100-width">
    <v-sidebar :open="open" :reduce="!sidebarExpanded" fullheight position="fixed">
      <img class="mx-4 my-5" :src="LogoSVG" width="50" alt="ERX" />

      <div class="my-5 px-5 is-clickable ml-1 is-hidden-mobile" @click="onClick">
        <icon tag="a" v-show="!sidebarExpanded" fill="currentColor" name="menu" size="is-medium" />
        <icon tag="a" v-show="sidebarExpanded" fill="currentColor" name="close" size="is-medium" />
      </div>

      <v-menu>
        <v-menu-list>
          <template v-for="(item, key) in routes" :key="key">
            <v-menu-item
              class="py-3 px-5"
              v-if="item.route"
              tag="router-link"
              :to="{ name: item.route.name, params: item.route.meta?.defaultParams }"
              :active="active(item.route.path)">
              <template #label>
                <div class="is-flex is-align-items-center">
                  <icon :name="item.icon" custom-class="menu-icon" />
                  <span class="px-4" v-show="sidebarExpanded"> {{ item.title }}</span>
                </div>
              </template>
            </v-menu-item>
            <v-menu-item class="py-3 px-5" v-if="item.subRoutes">
              <template #label>
                <div class="is-flex is-align-items-center">
                  <icon :name="item.icon" custom-class="menu-icon" />
                  <span class="px-4" v-show="sidebarExpanded"> {{ item.title }}</span>
                </div>
              </template>
              <v-menu-item
                v-for="(subRouteItem, subRoutekey) in item.subRoutes"
                :key="subRoutekey"
                tag="router-link"
                :to="{
                  name: subRouteItem.route.name,
                  params: subRouteItem.route.meta?.defaultParams,
                }">
                <template #label>
                  <div class="is-flex is-align-items-center">
                    <icon :name="item.icon" custom-class="menu-icon" />
                    <span class="px-4" v-show="sidebarExpanded"> {{ subRouteItem.title }}</span>
                  </div>
                </template>
              </v-menu-item>
            </v-menu-item>
          </template>
          <v-menu-item
            class="py-3 px-5 has-background-danger"
            tag="router-link"
            :to="{ name: redirecTo.path, params: redirecTo.defaultParams }">
            <template #label>
              <div class="is-flex is-align-items-center">
                <icon name="support" custom-class="menu-icon" />
                <span class="px-4" v-show="sidebarExpanded">Go to {{ redirecTo.label }}</span>
              </div>
            </template>
          </v-menu-item>
        </v-menu-list>
      </v-menu>
    </v-sidebar>
  </div>
</template>


<style>
.v-sidebar .sidebar-content {
  background: white !important;
}

.menu-icon {
  width: 20px;
  height: 20px;
  fill: var(--blm-grey-light) !important;
}

.is-active .menu-icon {
  fill: var(--blm-prim) !important;
}

.menu-list a {
  border-left: transparent solid 4px;
  margin-left: 4px;
}

.menu-list span {
  white-space: nowrap;
}

.menu-list a.is-active {
  border-left-color: var(--blm-prim);
}

.is-active {
  color: var(--blm-prim) !important;
  font-weight: bold;
}
</style>
