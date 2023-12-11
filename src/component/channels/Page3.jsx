import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import './Channels.css';
import SideNav from '../Sidenav';
import Navigation from '../Navigation/Navigation';

const Page3 = () => {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscription = () => {
    setSubscribed(!subscribed);
  }; 
  const videoURLs = [
    'https://www.youtube.com/shorts/DgwnF_bcy9Q',
    'https://www.youtube.com/watch?v=Niv_TPZPIds',
    'https://www.youtube.com/shorts/x-YmkMmge2A',
    'https://www.youtube.com/watch?v=0ub009EpB_c',
    'https://www.youtube.com/watch?v=Niv_TPZPIds&t=2s',
    'https://www.youtube.com/watch?v=EuFVcK-1wsI',
    
  ];
  return (
    <>
    <Navigation/>
    <div className="player-wrapper">
     <SideNav/> <h2>Kuku Streaming <button onClick={handleSubscription}>
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
export default Page3;