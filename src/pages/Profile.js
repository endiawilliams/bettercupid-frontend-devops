import React, { useState, useEffect } from 'react';
import UserInfo from '../components/UserInfo';
import AboutMe from '../components/AboutMe';
import ProfileModel from '../models/profile'

const Profile = (props) => {
  return (
    <div className="profile-container">
      <UserInfo />
      <AboutMe />
    </div>
  )
}

export default Profile;
