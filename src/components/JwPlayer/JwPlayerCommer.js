import React, { isValidElement } from 'react';
import ReactJWPlayer from 'react-jw-player';

class JwPlayerCommer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    
    this.onReady = this.onReady.bind(this);
    this.onVideoLoad = this.onVideoLoad.bind(this);
  }
  onReady(event) {
    const player = window.jwplayer(this.playerId);
    this.setState({
      Player: player
    });
  }
  
  onVideoLoad(event) {
    this.setState({
      videoTitle: ""
    });
    
  }
  render() {
    return (
      <div style={{width: '100%', paddingTop:90}}>
      <div className='react-jw-player-container'>
        <ReactJWPlayer
          customProps={{ stretching: 'fill',horizontalVolumeSlider: "True",volume:"20",allowFullscreen: false}}
          playlist="https://cdn.jwplayer.com/v2/playlists/ruBIBi2k"
          onReady={this.onReady}
          onVideoLoad={this.onVideoLoad}
          playerId="{this.playerId}"
          playerScript='https://cdn.jwplayer.com/libraries/o2jINGLs.js'
        />
      
      </div>
      </div>
    );
  }
}

export default JwPlayerCommer;