import React, { useState, useEffect } from 'react';
import UserInfo from '../components/UserInfo';
import AboutMe from '../components/AboutMe';
import ProfileModel from '../models/profile'

// next steps passing props into user info component
// do a call to the user table within profile controller
// do another const fetch user in addition to fetchProfile
const Profile = (props) => {
  // const [profile, setProfile] = useState("");
  //  displayName = {
        // this.setState = displayName
  // }
  const [displayName, setDisplayName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  // const [state, setState] = useState("");

  useEffect(() => {
    fetchProfile()
  }, []);

  const fetchProfile = () => {
    // console.log(props.currentUser)
    ProfileModel.getOwnProfile(props.currentUser).then(data => {
      if (data.profile.displayName = null) {
        setDisplayName ('update me')
      }
      // console.log(data.profile.display_name);
      // setProfile(data.profile)
      // setDisplayName(data.profile.display_name);
      setAge(data.profile.age);
      console.log(data.profile)
      setCity(data.profile.city);
      setState(data.profile.state);
    })
  }
  

  return (
    <div className="profile-container">
    
      <UserInfo displayName={displayName} age={age} city={city} state={state}/>
      <AboutMe />
    </div>
  )
}


export default Profile;
