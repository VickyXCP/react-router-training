import React from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'

const Sandwiches = ()=><h2>Sandwiches</h2>

const Tacos = ({routes})=>(
  <div>
    <h2>Tacos</h2>
    <ul>
      <li>
        <Link to={'/tacos/bus'}>Bus</Link>
      </li>
      <li>
        <Link to={'/tacos/cart'}>Cart</Link>
      </li>
      
      {routes.map((route,i)=>(
        <RouteWithSubRoutes key={i} {...route}/>
      ))}
    </ul>
  </div>
)

const Bus = ()=> <h3>Bus</h3>

const Cart = ()=><h3>Cart</h3>

const routes = [
  {
    path: '/sandwiches',
    component: Sandwiches
  },
  {
    path: '/tacos',
    component: Tacos,
    children: [
      {
        path: '/tacos/bus',
        component: Bus
      },
      {
        path: '/tacos/cart',
        component: Cart
      }
    ]
  }
]

const RouteWithSubRoutes = (route)=>(
  <Route path={route.path} render={props=>(
    <route.component {...props} routes={route.children} />
  )}/>
)

const RouteConfigExample = ()=>(
  <BrowserRouter>
    <div>
      <ul>
        <li><Link to={'/tacos'}>Tacos</Link></li>
        <li><Link to={'/sandwiches'}>Sandwiches</Link></li>
      </ul>
      {routes.map((route, i)=><RouteWithSubRoutes key={i} {...route}/>)}
    </div>
  </BrowserRouter>
)

export default RouteConfigExample
