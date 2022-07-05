import { app, BrowserWindow } from 'electron'
import './dialog'
import { Logger } from './logger'
import { initialize } from './services'
import createBaseWorker from './workers/index?worker'
import indexPreload from '/@preload/index'
import logoUrl from '/@static/logo.png'

const winURL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:8080'
    : `file://${__dirname}/index.html`

async function main() {
  const logger = new Logger()
  logger.initialize(app.getPath('userData'))
  initialize(logger)
  app.whenReady().then(() => {
    createWindow()
  })
  // thread_worker example
  createBaseWorker({ workerData: 'worker world' }).on('message', (message) => {
    logger.log(`Message from worker: ${message}`)
  }).postMessage('')
}

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    height: 600,
    width: 800,
    webPreferences: {
      preload: indexPreload,
      contextIsolation: true,
      nodeIntegration: false
    },
    icon: logoUrl
  })

  mainWindow.loadURL(winURL)
}

// ensure app start as single instance
if (!app.requestSingleInstanceLock()) {
  app.quit()
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

process.nextTick(main)
