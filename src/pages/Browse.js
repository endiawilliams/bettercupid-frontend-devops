import React, { useState, useEffect } from 'react';
import ProfileModel from '../models/profile'
import { Link } from 'react-router-dom'

const ProfilesList = () => {
  const [profiles, setProfiles] = useState([]);
  const fetchProfiles = () => {
    ProfileModel.all().then(data => {
      // console.log(data);
      setProfiles(data.profiles)
    })
  }
  console.log(profiles)
  useEffect(() => {
    fetchProfiles()
  }, []);
  return [profiles, fetchProfiles];
}
export default ProfilesList;