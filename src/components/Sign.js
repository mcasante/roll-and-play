import React, { useState } from 'react'


import './Sign.css'

import arrow from '../assets/arrow.svg'
import fb_icon from '../assets/fb_icon.svg'
import twitter_icon from '../assets/twitter_icon.svg'
import instagram_icon from '../assets/instagram_icon.svg'

function Sign() {
    
    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const title = 'Sign up'

    return (
        <aside className="sign">
            <div className="sign_container">
              <h3>{title}</h3>

              <form>
                <div className="form_container">
                  <div className="input_block">
                    <label htmlFor="name" className={ name.length > 0 ? 'filled' : null }>Name</label>
                    <input 
                      name="name" 
                      id="name" 
                      required
                      value={name} 
                      onChange={e => setName(e.target.value)} 
                    />
                  </div>
                  <div className="input_block">
                    <label htmlFor="email" className={ email.length > 0 ? 'filled' : null }>Email</label>
                    <input 
                      name="email" 
                      id="email"
                      required
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="input_block">
                    <label htmlFor="password" className={ password.length > 0 ? 'filled' : null }>Password</label>
                    <input 
                      type="password"
                      name="password" 
                      id="password" 
                      required
                      value={password} 
                      onChange={e => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="actions">
                    <button type="submit" className="register_button">REGISTER</button>
                    <a href="/" className="sign_in_link">
                      <span>Already registered? Sign in!</span>
                      <img src={arrow} alt="->" style={{ marginLeft: 15 }} />
                    </a>
                  </div>
                </div>
              </form>
            </div>
            <div className="connect_with">
              <div className="sign_container">
                <strong>Connect with any of those:</strong>
                <div className="icons">
                  <a href="/" className="fb_connect">
                    <img src={fb_icon} alt=""/>
                  </a>

                  <a href="/" className="twitter_connect">
                    <img src={twitter_icon} alt=""/>
                  </a>

                  <a href="/" className="instagram_connect">
                    <img src={instagram_icon} alt=""/>
                  </a>
                </div>
              </div>
            </div>
          </aside>
    )
}

export default Sign