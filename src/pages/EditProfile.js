import React, { useState, useEffect } from 'react';
import ProfileModel from '../models/profile';
// check to make sure that on submit an empty field does not erase previous contents
// remove /editprofile/:id route so users can't edit another user's profile?

const EditProfile = (props) => {
  const [displayName, setDisplayName] = useState('');
  const [gender, setGender] = useState('');
  const [profilePic, setProfilePic] = useState('');
  const [city, setCity] = useState('');
  const [geoState, setGeoState] = useState('');
  const [aboutMe, setAboutMe] = useState('');
  const currentUserId = props.currentUser
  
  const handleDisplayName = e => {
      setDisplayName(e.target.value)
  }
  const handleGender = e => {
      setGender(e.target.value)
  }
  const handleProfilePic = e => {
      setProfilePic(e.target.value)
  }
  const handleCity = e => {
      setCity(e.target.value)
  }
  const handleGeoState = e => {
      setGeoState(e.target.value)
  }
  const handleAboutMe = e => {
      setAboutMe(e.target.value)
  }
  const handleSubmit = (e) => {
      e.preventDefault()
      ProfileModel.editProfile({
          displayName, gender, profilePic, city, geoState, aboutMe
      }).then(data => {
          console.log('Successfully updated profile', data)
          props.history.push('/profile')
      })
  }
  

  return (
    <div className="edit-profile-form card">
      <h4 className="edit-profile-header">Edit Profile</h4>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="display_name" className="col-form-label">Display Name</label>
          <div className="col-sm-10">
            <input
              onChange={handleDisplayName}
              value={displayName}
              type="text"
              id="display_name"
              name="display_name"
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="gender" className="col-form-label">Gender</label>
          <div className="col-sm-10">
            <input
              onChange={handleGender}
              value={gender}
              type="text"
              id="gender"
              name="gender"
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="image" className="col-form-label">Profile Picture (URL)</label>
          <div className="col-sm-10">
            <input
              onChange={handleProfilePic}
              value={profilePic}
              type="text"
              id="image"
              name="image"
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="city" className="col-form-label">City</label>
          <div className="col-sm-10">
            <input
              onChange={handleCity}
              value={city}
              type="text"
              id="city"
              name="city"
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="state" className="col-form-label">State</label>
          <div className="col-sm-10">
            <input
              onChange={handleGeoState}
              value={geoState}
              type="text"
              id="state"
              name="state"
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="about_me" className="col-form-label">About Me</label>
          <div className="col-sm-10">
            <input
              onChange={handleAboutMe}
              value={aboutMe}
              type="text"
              id="about_me"
              name="about_me"
            />
          </div>
        </div>
        <button type="submit" className="btn pink-button submit-button">Submit</button>
      </form>
    </div>
  )
}
export default EditProfile;