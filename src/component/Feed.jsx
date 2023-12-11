import React from 'react';
import VideoPlayer from './VideoPlayer'; 
import SideNav from './Sidenav';
import Chatbot from './Chatbot';
import Navigation from './Navigation/Navigation';

const Feed = () => {
  
  return (
    <div>
      <Navigation/>
      <SideNav/>
      <VideoPlayer />
      <Chatbot/>
     
    
    </div>
  );
};

export default Feed;
