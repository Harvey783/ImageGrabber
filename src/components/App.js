import React from "react";
import SearchBar from "./SearchBar";
import axios from "axios";

class App extends React.Component {
  onSearchSubmit(field) {
    axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: field
      },
      headers: {
        Authorization:
          "Client-ID 405c43e3ed5b9032ae9a5c9094ef52e385688e050868a8058e186d4838e05b60"
      }
    });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "20px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
