const REACT_APP_API_URL = process.env.REACT_APP_API_URL

export default class RelationshipModel {
  static likeUser(data, recipientId) {
    // console.log(data)
    return fetch(`${REACT_APP_API_URL}/relationship/${recipientId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(data)
    }).then(res => res.json())
  }
  static unlikeUser(data, recipientId) {
    return fetch(`${REACT_APP_API_URL}/relationship/${recipientId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(data)
    }).then(res => res.json())
  }
  static checkLikeStatus(data, recipientId) {
    return fetch(`${REACT_APP_API_URL}/relationship/${recipientId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      //body: JSON.stringify(data)
    }).then(res => res.json())
  }
  static findMatches() {
    return fetch(`${REACT_APP_API_URL}/relationship`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include"
    }).then(res => res.json())
  }
}
