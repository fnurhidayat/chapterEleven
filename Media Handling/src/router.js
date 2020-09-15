import React from 'react'
import { HashRouter,Redirect, Route, Switch, } from 'react-router-dom'
import Loadable from 'react-loadable'

const load = loader => Loadable({
  loader,
  delay: false,
  loading: () => <h1>Loading...</h1>,
  render: (Loaded, props) => <Loaded.default {...props} />
})

const routes = [
  {
    path: '/video',
    component: load(() => import('./pages/Video')),
    exact: true
  },
  {
    path: '/pdf',
    component: load(() => import('./pages/PDF')),
    exact: true
  },
]

export default () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/video" />} />
          {routes.map(route => (
            <Route
              path={route.path}
              component={route.component}
              key={route.path}
              exact={route.exact}
            />
          ))}
      </Switch>
    </HashRouter>
  )
}

