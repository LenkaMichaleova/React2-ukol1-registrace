import React, { useState } from "react"
import './Registration.css'

interface UserData {
   username: '',
   email: '',
   password: '',
   passwordConfirm: '',
}

export const Registration = () => {
  const [user, setUser] = useState<UserData>({
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  })

  function handleSubmit (e : React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    console.log('odesílám', user)
  }

  function handleChange (e : React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    const updates = { [name]: value }

    if (name === 'email' && value.includes('@') && !user.username) {
      updates.username = value.split('@')[0]
    }

    setUser(prev => ({...prev, ...updates}))
  }

  return (
    <div className="registration-card">
      <header className="registration-header">
        <svg width="100" height="100" viewBox="0 0 24 24" fill="#52667a">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
        </svg>
      </header>

      <form className="registration-form" onSubmit={handleSubmit}>
        <label className="form-group">
          <span className="form-label">Email Adress</span>
          <input 
            type="text" 
            name="email" 
            value={user.email} 
            onChange={handleChange}
          />
        </label>
        <label className="form-group">
          <span className="form-label">User Name</span>
          <input 
            type="text" 
            name="username" 
            value={user.username} 
            onChange={handleChange}
          />
        </label>
        <label className="form-group">
          <span className="form-label">Password</span>
          <input 
            type="password" 
            name="password" 
            value={user.password} 
            onChange={handleChange}/>
        </label>
        <label className="form-group">
          <span className="form-label">Confirm Password</span>
          <input 
            type="password" 
            name="passwordConfirm" 
            value={user.passwordConfirm} 
            onChange={handleChange}
          />
        </label>

        <button className="btn" type="submit">Register</button>

      </form>
    </div>
  )
}
