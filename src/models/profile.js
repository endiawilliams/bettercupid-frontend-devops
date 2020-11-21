const REACT_APP_API_URL = "http://localhost:4000/api/v1"
export default class ProfileModel {
  static getProfiles(data) {
    return fetch(`${REACT_APP_API_URL}/profile/getAllProfiles`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(res => res.json())
  }
  static getProfile(data) {
    return fetch(`${REACT_APP_API_URL}/profile/getProfile`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(res => res.json())
  }
  static createProfile(data) {
    return fetch(`${REACT_APP_API_URL}/profile/createProfile`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(res => res.json())
  }
  static updateProfile(data) {
    return fetch(`${REACT_APP_API_URL}/profile/updateProfile`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(res => res.json())
  }
  static removeProfile(data) {
    return fetch(`${REACT_APP_API_URL}/profile/removeProfile`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(res => res.json())
  }
}