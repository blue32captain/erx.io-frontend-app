<script lang="ts">
// import { useI18n } from 'vue-i18n'
import { useRoutedTabs } from '/@/hooks'
import { TabContentLayout } from '/@/layouts'
import { SEC_TABS } from './constants/reports.contants'

import DownloadReportForm from './components/DownloadReport.form.vue'
import UploadReportForm from './components/UploadReport.form.vue'
import useReports from './hooks/useReports'
import { GetSecReport } from '/@/store/modules/Admin/types/reports.types'
import { exportToCsv } from '/@/utils/csv'

export default {
  name: 'SEC',
  components: {
    TabContentLayout,
    DownloadReportForm,
    UploadReportForm,
  },
  setup() {
    // const { t } = useI18n()
    const { currentTab, current } = useRoutedTabs(SEC_TABS)

    const { download, downloading, update, uploading } = useReports()

    const onDownload = async(payload: GetSecReport) => {
      const response = await download(payload)
      console.log('---------', response)
      // TODO return response
      exportToCsv(`${payload.type}_${payload.beginTime}_${payload.endTime}`, [{}])
    }

    return {
      current,
      currentTab,
      SEC_TABS,
      onDownload,
      downloading,
      update,
      uploading,
    }
  },
}
</script>

<template>
  <v-tabs v-model="currentTab" type="is-boxed" class="account-tabs">
    <v-tab :label="tab.label" v-for="tab in SEC_TABS" :key="tab.key" />
  </v-tabs>
  <tab-content-layout :label="current.label">
    <template #table>
      <template v-if="current.path.includes('view')">
        <download-report-form @submit="onDownload" :loading="downloading" />
      </template>
      <template v-if="current.path.includes('upload')">
        <upload-report-form @submit="update" :loading="uploading" />
      </template>
    </template>
  </tab-content-layout>
</template>

