import React from 'react'
import ReactDOM from 'react-dom';
import axios from 'axios';
import SearchBar from './searchBar';
import ImageLists from './imagesList';

class App extends React.Component {

  state={images: []};

   getDataFromSearchBar = async (data)  => {
    const res = await axios.get('https://api.unsplash.com/search/photos', {
      params: {query: data},
      headers: {
          Authorization: 'Client-ID 113120c18449d0ccd9f12224d676e3bc12966f55f346504a96291e9fabc11e0b'
      }
    })
    this.setState({images: res.data.results})
  }
  render() {
    return (
      <div className='ui container'>
        <SearchBar 
          getData={
            (data) => {
              this.getDataFromSearchBar(data)
            }
          } 
        />
      {this.state.images.length > 0 && <ImageLists images={this.state.images} />}
      </div>
      
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));