import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import './Channels.css';
import SideNav from '../Sidenav';
import Navigation from '../Navigation/Navigation';

const Page1 = () => {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscription = () => {
    setSubscribed(!subscribed);
  };
    const videoURLs = [
        'https://www.youtube.com/watch?v=AhbuUxWjtEw',
        'https://www.youtube.com/watch?v=Ui2RhnUp47k',
        'https://www.youtube.com/watch?v=MT66oTyWS8g',
        'https://www.youtube.com/watch?v=OSaQOshn8IA',
        'https://www.youtube.com/watch?v=p1PEAF7H2as',
        'https://www.youtube.com/watch?v=-UQoxf-Py4w',
      ];
  return (
    <>
    <Navigation/>
    <div className="player-wrapper">
    <SideNav/>  <h2>ChooxTv Streaming   <button onClick={handleSubscription}>
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

export default Page1;

