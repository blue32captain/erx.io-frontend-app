const config = {
  username: process.env.NODE_ENV === 'development' ? import.meta.env.VITE_APP_USERNAME : '',
  password: process.env.NODE_ENV === 'development' ? import.meta.env.VITE_APP_PASSWORD : '',
  dev: process.env.NODE_ENV === 'development',
  version: import.meta.env.VITE_APP_VERSION_NUMBER,
  authServer: import.meta.env.VITE_AUTH_SERVER || 'ws://localhost:8080',
}

export default config
