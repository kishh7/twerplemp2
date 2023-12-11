import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import './Channels.css';
import SideNav from '../Sidenav';
import Navigation from '../Navigation/Navigation';

const Page10 = () => {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscription = () => {
    setSubscribed(!subscribed);
  }; 
  const videoURLs = [
    'https://www.youtube.com/watch?v=O6vLll24yQ0',
    'https://www.youtube.com/watch?v=T1aqpjx4uM8',
    'https://www.youtube.com/watch?v=3zHBC8UE4kA',
    'https://www.youtube.com/watch?v=GI0gGZCeNDc',
    'https://www.youtube.com/watch?v=_FCeDXNTTeI',
    'https://www.youtube.com/watch?v=RtL2aFJ9PFo',
  ];
  return (
    <>
    <Navigation/>
    <div className="player-wrapper">
    <SideNav/>  <h2>Dogie Streaming <button onClick={handleSubscription}>
        {subscribed ? 'Subscribed ✔' : 'Subscribe'}
      </button></h2>
    {videoURLs.map((url, index) => (
      <ReactPlayer
        key={index}
        className="react-player"
        url={url}
        controls={true}

      />
    ))}
    
  </div>
  </>
);
};

export default Page10;