import Loadable from './loadable';

const routes = [
  {
    path: '/',
    component: Loadable(()=>import('../components/app')),
    exact:true,
  },
  {
    path: '/app',
    component: Loadable(()=>import('../components/app')),
    children: [
      {
        path: '/app/docs',
        component: Loadable(()=>import('../components/docs')),
        children: [
          {
            path: '/app/docs/docs1',
            component: Loadable(()=>import('../components/three')),
          }
        ]
      }
    ]
  },
  {
    path: '/test',
    component: Loadable(()=>import('../components/test')),
  }
]

export default routes
