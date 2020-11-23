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


  // this will help us pull the user
//
// const getUser = (req,res) => {
  // db.user.findByPK(req.user.dataValues.id).then((user) => {
    // res.json({ user })
  // })
// }

useEffect(() => {
  fetchProfile()
}, []);

  const fetchProfile = () => {
    ProfileModel.getOwnProfile(props.currentUser).then(data => {
      if (data === null || data.profile === null) {
        return
      } else {
        setDisplayName(data.profile.display_name);
        setAge(data.profile.age);
        setCity(data.profile.city);
        setState(data.profile.state);
      }
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
