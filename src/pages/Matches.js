import React, { useState, useEffect } from 'react';
import Match from '../components/Match';
import ProfileModel from '../models/profile';
import RelationshipModel from '../models/relationship';

const Matches = (props) => {
  const [matches, setMatches] = useState([]);

  const findMatches = () => {
    RelationshipModel.findMatches()
    .then((allMatches) => {
      setMatches(allMatches)
      console.log(JSON.stringify(allMatches))
    })
  }

  useEffect(() => {
    findMatches()
  }, []);

  console.log(matches)

  return (
    <div className="profile-container">
      {matches.map((match, key) => { return <Match match={ match } key={ key } /> })}
    </div>
  )

  // return (
  //   <div className="profile-container">
  //     <Match match={ matches } />
  //   </div>
  // )

  //console.log(matches)

  // return (
  //   if (matches.length > 0) {
  //     for (let i = 0; i < matches.length; i++) {
  //       <div className="profile-container">
  //         <Match match={ matches[i] } />
  //       </div>
  //     }
  //   }

    // <div className="profile-container">
    //   <Match />
    //   <Match />
    //   <Match />
    // </div>
  // ) 
}

export default Matches;