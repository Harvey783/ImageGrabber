import React from "react";

class SearchBar extends React.Component {
  state = { field: "" };

  onFormSubmit = e => {
    e.preventDefault();
    console.log(this.state.field);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.field}
              onChange={e => this.setState({ field: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
