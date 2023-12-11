import React, { useState } from 'react';
import './Cha.css'; // Your CSS file for additional styling
import choox from '../img/choox.jpg';
import ReactPlayer from 'react-player';
import Navigation from './Navigation/Navigation';
import { Link } from 'react-router-dom';

const Profile = () => {
  const [isEditing, setEditing] = useState(false);
  const [name, setName] = useState('Ann Cruz');
  const [about, setAbout] = useState('hi im kind');
  const [followers, setFollowers] = useState(100);
  const [following, setFollowing] = useState(50);
  const [profilePic, setProfilePic] = useState('url_to_profile_pic');
  const videoURLs = [
    'https://www.youtube.com/shorts/uWzrcI5ikyA',
    'https://www.youtube.com/shorts/hIATL_W36m4',
    'https://www.youtube.com/shorts/IqLsdqYaRSk',
    'https://www.youtube.com/shorts/AlxAMCGwxeE'
    
  ];

  const handleEditProfile = () => {
    setEditing(true);
  };

  const handleSaveProfile = () => {
    setEditing(false);
  };

  const handleProfilePicChange = (event) => {
    const file = event.target.files[0];
    const temporaryProfilePicURL = URL.createObjectURL(file);
    setProfilePic(temporaryProfilePicURL);
  };

  return (
    <>
    <Navigation/>
  
    <div className="profile-container">
    <div className="containe-4">
  <div style={{ marginTop: "5px" , display: "flex", justifyContent: "flex-end",  padding: "10px"}}>
  <Link
      to="/Streamingtool" 
      className="streaming-1"
    >
      Streaming Tool
    </Link>
  </div>
</div>
      <div className="profile-info">
        <div className="profile-header">
          <img className="profile-pic" src={profilePic} alt="" />
          <div className="profile-header-details">
          <h2 style={{textAlign:"center", alignItems:"center"}}>My Profile</h2>
            <h1>{name}</h1>
            <p>{about}</p>
            <p>Followers: {followers}</p>
            <p>Following: {following}</p>
            {isEditing ? (
              <div>
                <label>
                  Name:
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </label>
                <br />
                <label>
                  About:
                  <textarea
                    value={about}
                    onChange={(e) => setAbout(e.target.value)}
                  ></textarea>
                </label>
                <br />
                <label>
                  Profile Picture:
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleProfilePicChange}
                  />
                </label>
                <br />
                <button style={{ padding: "8px 16px", border: "none", backgroundColor: "purple",
       color: "white", borderRadius: "5px", cursor: "pointer"}} onClick={handleSaveProfile}>Save</button>
                
              </div>
            ) : (
              <button className="button-2" onClick={handleEditProfile}>Edit Profile</button>
            )}
          </div>
        </div>
        <div className="video-container">
          <h2>Videos</h2>
          {videoURLs.map((url, index) => (
            <ReactPlayer
              key={index}
              className="react-player"
              url={url}
              controls={true}
            />
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Profile;

