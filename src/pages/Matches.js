import React, { useState, useEffect } from 'react';
import Match from '../components/Match';
import AboutMe from '../components/AboutMe';
import ProfileModel from '../models/profile'

const Matches = (props) => {
  return (
    <div className="profile-container">
      <Match />
      <Match />
      <Match />
      <Match />
      <Match />
      <Match />
    </div>
  ) 
}

export default Matches;