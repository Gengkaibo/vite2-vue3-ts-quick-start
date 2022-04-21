import piniaPersist from 'pinia-plugin-persist'
const piniaStore = createPinia()
piniaStore.use(piniaPersist)
export { piniaStore }

