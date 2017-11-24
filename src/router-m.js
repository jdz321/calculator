import React from 'react'
import { Router, Route } from 'dva/router'
import P2p from './routes-m/p2p'

console.log('i am mobil')

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={P2p} />
    </Router>
  )
}

export default RouterConfig
