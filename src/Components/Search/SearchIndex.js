import React, {Component} from 'react';
import {Input} from 'reactstrap';
 
export default class SearchIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards'],
      searchTerm: "",
      searchResult: []
    }
  }

  setSearchTerm(e) {
    // callback function is needed to keep state change on point
    // with out, searchResult is one cycle behind
    this.setState(
      {searchTerm: e.target.value},
      () => this.searchFunction()
    )
  }
  
  searchFunction() {
    this.setState({
      searchResult: this.state.things.filter(thing => {
        return thing.includes(this.state.searchTerm);
      })
    })
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps, prevState);
  }
 
  render() {
    return (
      <div>
        <Input type="text" value={this.state.searchTerm} onChange={e => this.setSearchTerm(e)} placeholder='Search Here' />
        <h3>Results:</h3>
        <ul>
          {this.state.searchTerm.length === 0 ? this.state.things.map((thing, idx) => {
            return <li key={idx}>{thing}</li>
          }) : this.state.searchResult.map((thing, idx) => {
            return <li key={idx}>{thing}</li>
          })}
        </ul>
      </div>
    )
  }
 }