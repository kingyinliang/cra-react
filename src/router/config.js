import App from '../components/app';
import Docs from '../components/docs';
import Three from '../components/three';

const routes = [
  {
    path: '/',
    component: App,
    exact:true,
    children: [
      {
        path: '/docs',
        component: Docs,
        children: [
          {
            path: '/docs/docs1',
            component: Three,
          }
        ]
      }
    ]
  }
]

export default routes
