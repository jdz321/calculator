import dva from 'dva'
import './index.less'

// 1. Initialize
const app = dva()

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('@models/example'))

const getRouter = window.isMobil ? import(/* webpackChunkName: 'm' */'./router-m') : import(/* webpackChunkName: 'pc' */'./router')

getRouter.then((router) => {
  // 4. Router
  app.router(router)
  // 5. Start
  app.start('#root')
})
