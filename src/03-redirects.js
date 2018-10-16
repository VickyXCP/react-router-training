import React from 'react'
import {BrowserRouter, Route, Link, Redirect, withRouter} from 'react-router-dom'

const AuthExample = () => (
  <BrowserRouter>
    <div>
      <AuthButton/>
      <ul>
        <li><Link to={'/public'}>Public Page</Link></li>
        <li><Link to={'/protected'}>Protected Page</Link></li>
      </ul>
      <Route path={'/public'} component={Public}/>
      <Route path={'/login'} component={Login}/>
      <PrivateRoute path={'/protected'} component={Protected}/>
    </div>
  </BrowserRouter>
)

const fakeAuth = {
  isAuthenticated: false,
  authenticate (cb) {
    this.isAuthenticated = true
    setTimeout(cb)
  },
  signout (cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}

const AuthButton = withRouter(({history}) => fakeAuth.isAuthenticated ? (
  <p>
    Welcome!{''}
    <button onClick={() => {
      fakeAuth.signout(() => history.push('/'))
    }}>Sign out
    </button>
  </p>
) : (
  <p>You are not logged in</p>
))

/*
* 对象的扩展运算符（...）用于取出参数对象的所有可遍历属性，拷贝到当前对象之中
* */

/*
*React Router 4 引入了一种基于 component 的动态路由 (https://github.com/rccoder/blog/issues/29)
* */

const PrivateRoute = ({component: Component, ...rest}) => (
  <Route {...rest} render={props => fakeAuth.isAuthenticated ? (
    <Component {...props}/>
  ) : (<Redirect to={{pathname: '/login', state: {from: props.location}}}/>)}/>
)

const Public = () => <h3>Public</h3>

const Protected = () => <h3>Protected</h3>

class Login extends React.Component {
  state = {
    redirectToReferrer: false
  }
  
  login = ()=> {
    fakeAuth.authenticate(() => {
      this.setState({redirectToReferrer: true})
    })
  }
  
  render () {
    const {from} = this.props.location.state || {from: {pathname: '/'}}
    const {redirectToReferrer} = this.state
    
    if (redirectToReferrer) {
      return <Redirect to={from}/>
    }
    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={this.login}>Log in</button>
      </div>
    )
  }
}

export default AuthExample