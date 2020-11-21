const REACT_APP_API_URL = "http://localhost:4000/api/v1"
<<<<<<< HEAD
export default class ProfileModel {
  static getProfiles(data) {
    return fetch(`${REACT_APP_API_URL}/profile/getAllProfiles`, {
=======

export default class ProfileModel {
  static getProfiles(data) {
    return fetch(`${REACT_APP_API_URL}/profile`, {
>>>>>>> submain
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(res => res.json())
  }
  static getProfile(data) {
<<<<<<< HEAD
    return fetch(`${REACT_APP_API_URL}/profile/getProfile`, {
=======
    return fetch(`${REACT_APP_API_URL}/profile`, {
>>>>>>> submain
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(res => res.json())
  }
<<<<<<< HEAD
  static createProfile(data) {
    return fetch(`${REACT_APP_API_URL}/profile/createProfile`, {
=======

  static createProfile(data) {
    return fetch(`${REACT_APP_API_URL}/profile`, {
>>>>>>> submain
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(res => res.json())
  }
<<<<<<< HEAD
  static updateProfile(data) {
    return fetch(`${REACT_APP_API_URL}/profile/updateProfile`, {
=======

  static updateProfile(data) {
    return fetch(`${REACT_APP_API_URL}/profile`, {
>>>>>>> submain
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(res => res.json())
  }
  static removeProfile(data) {
<<<<<<< HEAD
    return fetch(`${REACT_APP_API_URL}/profile/removeProfile`, {
=======
    return fetch(`${REACT_APP_API_URL}/profile`, {
>>>>>>> submain
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(res => res.json())
  }
}