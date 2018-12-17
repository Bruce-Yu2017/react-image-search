import React from 'react'

class SearchBar extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {value: ''};
  // }
  state = {value: ''};

  submitForm = (event) => {
    event.preventDefault();
    this.props.getData(this.state.value)
  }

  inputValue(val) {
    this.setState({value: val})
  }

  render() {
    return (
      <div className='ui segment'>
        <form className='ui form' onSubmit={this.submitForm}>
          <div className='field'>
            <label>Image Search</label>
            <input onChange={(event) => {this.inputValue(event.target.value)}} value={this.state.value} />

          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;