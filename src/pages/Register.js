import React, { useState } from 'react'
import UserModel from '../models/user'

const Register = props => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [birthday, setBirthday] = useState('');
  const [message, setMessage] = useState('')

  const handleName = e => {
    setName(e.target.value)
  }
  const handleEmail = e => {
    setEmail(e.target.value)
  }
  const handlePassword = e => {
    setPassword(e.target.value)
  }
  const handleConfirmPassword = e => {
    setConfirmPassword(e.target.value)
  }
  const handleBirthday = e => {
    setBirthday(e.target.value)
  }
  const handleSubmit = e => {
    e.preventDefault()
    if ((Date.now() - birthday) < (18 * 31556952000)) {
      console.log("Sorry, you must be 18 to use this site")
    }

    if (password === confirmPassword) {
      UserModel.create({ name, email, password })
        .then(data => {
          console.log('Successful register', data)
          // redirect to /login
          props.history.push('/login')
        })
    }
  }
  return (
    <div>
      <h4>Register</h4>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            onChange={handleName}
            value={name}
            type="text"
            id="name"
            name="name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input 
            onChange={ handleEmail } 
            value={ email } 
            type="email" 
            id="email" 
            name="email" 
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input 
            onChange={ handlePassword } 
            value={ password } 
            type="password" 
            id="password" 
            name="password" 
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            onChange={handleConfirmPassword}
            value={confirmPassword}
            type="password"
            id="confirm-password"
            name="confirm-password"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="birthday">Birthday</label>
          <input
            onChange={handleBirthday}
            value={birthday}
            type="date"
            id="birthday"
            name="birthday"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="birthday">Birthday</label>
          <input
            onChange={ handleBirthday }
            value={ birthday }
            type="date"
            id="birthday"
            name="birthday"
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  )
}
export default Register;