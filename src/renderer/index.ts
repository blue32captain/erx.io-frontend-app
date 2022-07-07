import { createApp } from 'vue'

import i18n from './i18n'

import {
  Toaster,
  VAccordion,
  VAvatar,
  VBreadcrumb,
  VBreadcrumbItem,
  VButton,
  VCard,
  VCardContent,
  VCardFooter,
  VCardFooterItem,
  VCardHeader,
  VCardImage,
  VCheckbox,
  VColumn,
  VColumns,
  VDropdown,
  VDropdownItem,
  VField,
  VImage,
  VInput,
  VMenu,
  VMenuItem,
  VMenuList,
  VNavbar,
  VNavbarBurger,
  VNavbarDropdown,
  VNavbarItem,
  VProgress,
  VSteps,
  VStepItem,
  VSelect,
  VSidebar,
  VSwitch,
  VTab,
  VTable,
  VTabs,
  VTag,
  VTextarea,
  VTimeline,
  VUpload,
  VPagination,
} from '@pathscale/vue3-ui'
import App from './App.vue'
import '@pathscale/bulma-pull-2981-css-var-only'
import '@pathscale/bulma-extensions-css-var'
import '@pathscale/fonts-metroclean'
import { router } from './router'
import Icon from './Icon.vue'
import { Loader, PaginatedTable, Modal, BasicTable } from './components'

import './assets/css/globals.css'
import { ContentDetail } from './layouts/components'

const app = createApp(App)

app.component('VAccordion', VAccordion)
app.component('VAvatar', VAvatar)
app.component('VBreadcrumb', VBreadcrumb)
app.component('VBreadcrumbItem', VBreadcrumbItem)
app.component('VButton', VButton)
app.component('VCard', VCard)
app.component('VCardContent', VCardContent)
app.component('VCardFooter', VCardFooter)
app.component('VCardFooterItem', VCardFooterItem)
app.component('VCardHeader', VCardHeader)
app.component('VCardImage', VCardImage)
app.component('VCheckbox', VCheckbox)
app.component('VColumn', VColumn)
app.component('VColumns', VColumns)
app.component('VDropdown', VDropdown)
app.component('VDropdownItem', VDropdownItem)
app.component('VField', VField)
app.component('VImage', VImage)
app.component('VInput', VInput)
app.component('VMenu', VMenu)
app.component('VMenuItem', VMenuItem)
app.component('VMenuList', VMenuList)
app.component('VNavbar', VNavbar)
app.component('VNavbarBurger', VNavbarBurger)
app.component('VNavbarDropdown', VNavbarDropdown)
app.component('VNavbarItem', VNavbarItem)
app.component('VProgress', VProgress)
app.component('VSelect', VSelect)
app.component('VSidebar', VSidebar)
app.component('VSwitch', VSwitch)
app.component('VTab', VTab)
app.component('VTable', VTable)
app.component('VTabs', VTabs)
app.component('VTag', VTag)
app.component('VTextarea', VTextarea)
app.component('VTimeline', VTimeline)
app.component('VUpload', VUpload)
app.component('VPagination', VPagination)
app.component('VSteps', VSteps)
app.component('VStepItem', VStepItem)

app.component('Icon', Icon)
app.component('Loader', Loader)
app.component('PaginatedTable', PaginatedTable)
app.component('Modal', Modal)
app.component('BasicTable', BasicTable)
app.component('ContentDetail', ContentDetail)

app.use(Toaster)

app.use(router)
app.use(i18n).mount('#app')

const { $toast } = app.config.globalProperties

app.directive('visible', function(el, binding) {
  el.style.visibility = binding.value ? 'visible' : 'hidden'
})

export default $toast
