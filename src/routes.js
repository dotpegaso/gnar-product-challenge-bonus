/* eslint-disable import/no-named-as-default */
import React, { useEffect }  from 'react'
import { Provider } from 'react-redux'
import { Switch, Route, useLocation } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import { PersistGate } from 'redux-persist/integration/react'

import { store, persistor, history } from './config'

// pages
import List from './pages/List'
import Add from './pages/Add'
import Details from './pages/Details'

function ScrollTop() { // react-router-dom workaround
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

const Routes = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>
        <ScrollTop />
        <Switch>
          <Route path="/" component={List} restricted exact />
          <Route path="/add" component={Add} exact />
          <Route path="/details/:id" component={Details} exact />
        </Switch>
      </ConnectedRouter>
    </PersistGate>
  </Provider>
)

export default Routes
