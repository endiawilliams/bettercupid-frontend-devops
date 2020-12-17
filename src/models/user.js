const REACT_APP_API_URL = "http://34.122.25.56:4000/api/v1"

export default class UserModel {
  static create(data) {
    return fetch(`${REACT_APP_API_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://34.122.25.56:4000/"
      },
      body: JSON.stringify(data)
    }).then(res => res.json())
  }

  static login(credentials) {
    // remember to send authorization headers
    return fetch(`${REACT_APP_API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://34.122.25.56:4000/"
      },
      body: JSON.stringify(credentials),
      // auth headers - included with any request requiring authentication
      credentials: 'include'
    }).then(res => res.json())
  }

  static logout() {
    return fetch(`${REACT_APP_API_URL}/auth/logout`, {
      method: "DELETE",
      credentials: 'include'
    })
  }

  static deleteUser(data) {
    return fetch(`${REACT_APP_API_URL}/auth/delete`, {
      method: "DELETE",
      credentials: 'include',
      body: JSON.stringify(data)
    })
  }
}