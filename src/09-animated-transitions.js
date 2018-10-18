import React from 'react'
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import {BrowserRouter, Route, Link, Switch, Redirect} from 'react-router-dom'

class AnimationExample extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route render={({location})=>(
          <div style={styles.fill}>
            {/*将初始页面重定向到第一个色彩页*/}
            <Route exact path={'/'} render={()=><Redirect to={'/hsl/10/90/50'}/>}/>
            {/*颜色列表*/}
            <ul style={styles.nav}>
              <NavLink to={'/hsl/10/90/50'}>Red</NavLink>
              <NavLink to={'/hsl/120/100/40'}>Green</NavLink>
              <NavLink to={'/rgb/33/150/243'}>Blue</NavLink>
              <NavLink to={'/rgb/240/98/146'}>Pink</NavLink>
            </ul>
            {/*匹配路由*/}
            <div style={styles.content}>
              <TransitionGroup>
                <CSSTransition key={location.key} classNames={"fade"} timeout={300}>
                  <Switch location={location}>
                    <Route exact path={'/hsl/:h/:s/:l'} component={HSL}/>
                    <Route exact path={'/rgb/:r/:g/:b'} component={RGB}/>
                    <Route render={()=><div>Not Found</div>}/>
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            </div>
          </div>
        )}/>
      </BrowserRouter>
    )
  }
}

//接收参数的子项
class NavLink extends React.Component {
  render() {
    return (
      <li style={styles.navItem}>
        <Link {...this.props} style={{color: 'inherit'}}/>
      </li>
    )
  }
}

//HSL圆柱坐标系统  （Hue-saturation-lightness）色相-饱和度-明度
//https://developer.mozilla.org/zh-CN/docs/Web/CSS/color_value
const HSL = ({match: {params}}) => (
  <div style={{
    ...styles.fill,
    ...styles.hsl,
    background: `hsl(${params.h}, ${params.s}%, ${params.l}%)`
  }}>
    hsl({params.h}, {params.s}%, {params.l}%)
  </div>
);

/*
* 用RGB立体坐标（RGB cubic-coordinate）系统
* */
const RGB = ({match: {params}}) => (
  <div style={{
    ...styles.fill,
    ...styles.hsl,
    background: `rgb(${params.r}, ${params.g}, ${params.b})`
  }}>
    rgb({params.r}, {params.g}, {params.b})
  </div>
);

const styles = {};

styles.fill = {
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
};

styles.content = {
  ...styles.fill,
  top: "40px",
  textAlign: "center"
};

styles.nav = {
  padding: 0,
  margin: 0,
  position: "absolute",
  top: 0,
  height: "40px",
  width: "100%",
  display: "flex"
};

styles.navItem = {
  textAlign: "center",
  flex: 1,
  listStyleType: "none",
  padding: "10px"
};

styles.hsl = {
  ...styles.fill,
  color: "white",
  paddingTop: "20px",
  fontSize: "30px"
};

styles.rgb = {
  ...styles.fill,
  color: "white",
  paddingTop: "20px",
  fontSize: "30px"
};


export default AnimationExample
