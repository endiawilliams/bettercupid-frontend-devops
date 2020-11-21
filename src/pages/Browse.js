import React, { useState, useEffect } from 'react';
import ProfileModel from '../models/profile'

const ProfilesList = (props) => {
  const [profiles, setProfiles] = useState([]);

  const fetchProfiles = () => {
    ProfileModel.getProfiles().then(data => {
      console.log(data);
      setProfiles(data.profiles)
    })
  }
  console.log(profiles)

  useEffect(() => {
    fetchProfiles()
  }, []);

  return (
    <div></div>
  );

  
}

export default ProfilesList;