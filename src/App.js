import React, { Component } from "react";
import hash from "./hash.js"
import logo from "./logo.svg";
import "./App.css";
export const authEndpoint = 'https://accounts.spotify.com/authorize';
const clientId = "726111e1671c41098283a125c32be806";
const redirectUri = "http://localhost:3000";
const scopes = [
  "user-read-currently-playing",
  "user-read-playback-state",
];


class App extends Component {
  componentDidMount() {

    let _token = hash.access_token;
    if (_token) {

      this.setState({
        token: _token
      });
    }
  }
render() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      {!this.state.token && (
        <a
          className="btn btn--loginApp-link"
          href={`${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`}
        >
          Login to Spotify
        </a>
      )}
      {this.state.token && (
        // Spotify Player Will Go Here In the Next Step
      )}
      </header>
    </div>
  );
  }
}
export default App;