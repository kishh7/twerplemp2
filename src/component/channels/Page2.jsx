import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import './Channels.css';
import SideNav from '../Sidenav';
import Navigation from '../Navigation/Navigation';



const Page2 = () => {

  const [subscribed, setSubscribed] = useState(false);

  const handleSubscription = () => {
    setSubscribed(!subscribed);
  }; 
  const videoURLs = [
    'https://www.youtube.com/watch?v=70IuJgTMMZ0',
    'https://www.youtube.com/watch?v=DgiklJ4w3So',
    'https://www.youtube.com/watch?v=mpYrt5C2xsE',
    'https://www.youtube.com/watch?v=YgTE6iyL-hQ',
    'https://www.youtube.com/watch?v=RG362gNgniQ',
    'https://www.youtube.com/watch?v=meDshuQYKuM'
    
  ];
  return (
    <>
    <Navigation/>
    <div className="player-wrapper">
      <SideNav/> <h2>Tims Streaming <button onClick={handleSubscription}>
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

export default Page2;