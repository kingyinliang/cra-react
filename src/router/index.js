import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import {hot} from 'react-hot-loader';
import Store from '../redux';
import DevTools from '../redux/DevTools';

import routes from './config'

const Router = ({component: Component, children, ...rest}) => (
    <Route
        {...rest}
        render={props => (
            <Component {...props} ><Switch>{children}</Switch></Component>
        )}
    />
)

function creatRouter(r) {
  return r.map((route, key) => {
    if (route.children) {
      return (
        <Router key={key} path={route.path} component={route.component}>{creatRouter(route.children)}</Router>
      )
    } else {
      return (<Router exact key={key} path={route.path} component={route.component}/>)
    }
  })
}

const Root = () => (
    <BrowserRouter>
        <Provider store={Store}>
            <div className="router-content">
                {/*{__DEVELOPMENT__ && <DevTools />}*/}
                <DevTools />
                <Switch>
                  {creatRouter(routes)}
                </Switch>
            </div>
        </Provider>
    </BrowserRouter>
);

export default hot(module)(Root);
