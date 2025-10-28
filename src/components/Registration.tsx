import React, { useState } from "react"

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
        {/* <img src="" alt="avatar" /> */}
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
