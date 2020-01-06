import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAstronauts } from './actions/fetchAstronauts'
import './App.css' 
 
class App extends Component {
 
  componentDidMount() {
    this.props.fetchAstronauts()
  }
 
  render() {
    const astronauts = this.props.astronauts.map((astro, i) => <li key={i}>{astro.name}</li>);
 
    return(
      <div className='container'>
        <div>{astronauts}</div>
      </div>
    );
  }
};
 
function mapDispatchToProps(dispatch){
  return { 
    fetchAstronauts: () => dispatch(fetchAstronauts()) 
  }
}
 
function mapStateToProps(state){
  return {astronauts: state.astronauts}
}
 
export default connect(mapStateToProps, mapDispatchToProps)(App)
