import React from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import Playlist from './Playlist';
import './App.css';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchResults: [
        {name: "Apocalypse", artist: "Cigarettes After Sex", album: "Cigarettes After Sex", id: 1},
        {name: "Be Mine", artist: "Jazzinuf", album: "The Harlem Barber Swing", id: 2},
        {name: "American Pie", artist: "Don McLean", album: "American Pie", id: 3}
      ],
      playlistName: 'HappyFriday',
      playlistTracks: [
        {name: "La vie en Rose", artist: "Louis Armstrong", album: "C'est Si Bon", id: 4},
        {name: "My Way", artist: "Frank Sinatra", album: "My Way(Expanded Edition)", id: 5},
        {name: "That's Life", artist: "Frank Sinatra", album: "That's Life", id: 6}
      ]
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (tracks.find(savedTrack => savedTrack.id === track.id)){
      return;
    }
    tracks.push(track)
    this.setState({ playlistTracks: tracks })
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);;
    this.setState({ playlistTracks: tracks });
  }

  updatePlaylistName(name) {
    this.setState({ playlistName: name });
  }

  savePlaylist() {
    alert('test button working or not')
    const trackURIs = this.state.playlistTracks.map(track => track.uri);
  }

  search(term) {
    console.log(term);
  }

  render(){
    return(
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} 
            onAdd={this.addTrack} />

            <Playlist playlistName={this.state.playlistName} 
            playlistTracks={this.state.playlistTracks} 
            onRemove={this.removeTrack}
            onNameChange={this.updatePlaylistName}
            onSave={this.savePlaylist} />  
          </div>
        </div>
      </div>
    );
  }
} 

export default App;
