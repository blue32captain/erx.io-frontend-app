import wssAdapter from '@pathscale/wss-adapter'
import errors from './errors'
import auth from './services/auth.service'
import app from './services/app.service'

import { router } from '/@/router'

import $toast from '/@/index'

const wssConfigure = () => {
  wssAdapter.configure({
    timeout: 90000,
    services: {
      auth: {
        ...auth,
        onDisconnect() {
          console.log('disconnected from auth!')
        },
      },
      app: {
        ...app,
        onDisconnect() {
          $toast.error('You have been disconnected from the server')

          setTimeout(() => {
            router.replace({ name: 'login' })
            localStorage.clear()
          }, 2000)
        },
      },
    },
    errors,
    onError({ message }) {
      $toast.error(message, { duration: 5000, dismissible: false })
    },
  })
  console.log('wss client configured')
}

export default wssConfigure
