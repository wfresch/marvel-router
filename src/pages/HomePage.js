import React from 'react'
import { Link } from 'react-router-dom'

class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      query: '',
    };
  }  

  updateQueryValue = (evt) => {
    this.setState({
      query: evt.target.value
    });
  }

//   getSearchResults = () => {
//     // var searchTerm = document.querySelector('#txtSearch').value;
//     // var searchUrl = '/search/' + searchTerm;
//     if (this.state.query !== '') {
//         this.props.history.push(`/search/${this.state.query}`);
//     }
//     //this.props.history.push(searchUrl);
//   }

  render() {
    return (
      <div className="container">
        <h1>Marvel Search Page</h1>
        <p>
          <input id='txtSearch' onChange={this.updateQueryValue} />
          <Link to={`/search/${this.state.query}`}>Search</Link>
        </p>
      </div>
    );
  }
}

export default HomePage;