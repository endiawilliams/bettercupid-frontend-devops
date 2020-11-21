import React, { useState, useEffect } from 'react';
import UserInfo from '../components/UserInfo';
import AboutMe from '../components/AboutMe';
import ProfileModel from '../models/profile'

const Profile = () => {
  const [profile, setProfile] = useState([]);

  const fetchProfile = () => {
    ProfileModel.getOwnProfile().then(data => {
      console.log(data);
      setProfile(data.profile)
    })
  }
  console.log(profile)

  useEffect(() => {
    fetchProfile()
  }, []);


  return (
    <div className="profile-container">
      <UserInfo />
      <AboutMe />
    </div>
  )
}

export default Profile;
