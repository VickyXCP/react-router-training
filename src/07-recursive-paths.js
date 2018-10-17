import React from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'

class RecursiveExample extends React.Component{
  render(){
    return (
      <BrowserRouter>
        <Person match={{params: {id:0}, url: ''}}/>
      </BrowserRouter>
    )
  }
}

const PEEPS = [
  {id:0,name:'Michelle',friends: [1,2,3]},
  {id:1,name:'Sean',friends: [0,3]},
  {id:2,name:'Kim',friends: [0,1,3]},
  {id:3,name:'David',friends: [1,2]},
]

const find = (id)=>PEEPS.find(p=>p.id==id)

class Person extends React.Component{
  constructor (props){
    super(props)
  }
  render(){
    const person = find(this.props.match.params.id)
    return (
      <div onClick={()=>console.log(person)}>
        hhhh
        <h3>{person.name}'s Friends</h3>
        <ul>
          {person.friends.map((id)=>(
            <li key={id}><Link to={`${this.props.match.url}/${id}`}>{find(id).name}</Link></li>
          ))}
        </ul>
        <Route path={`${this.props.match.url}/:id`} component={Person}/>
      </div>
    )
  }
}

export default RecursiveExample
