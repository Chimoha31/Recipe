import React from 'react';
import heroVideo from '../../video/title.mp4';

function Title() {
  return (
    <div>
      <video src={heroVideo} muted loop autoplay></video>
    </div>
  )
}

export default Title
