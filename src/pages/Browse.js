import React, { useState, useEffect } from 'react';
import BrowseResults from '../components/BrowseResults';
import ProfileModel from '../models/profile';

const ProfilesList = (props) => {
  const [profiles, setProfiles] = useState([]); 

  const fetchProfiles = () => {
    ProfileModel.getAllProfiles().then(data => {
      console.log(data);
      setProfiles(data.profiles)
    })
  }
  console.log(profiles)

  useEffect(() => {
    fetchProfiles()
  }, []);

  return (
    <div className="profile-container">
      <BrowseResults />
      <BrowseResults />
      <BrowseResults />
    </div>
  );

  
} 

export default ProfilesList;