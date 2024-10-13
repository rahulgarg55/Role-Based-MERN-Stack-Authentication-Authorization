import React from 'react'

export default function Login() {
  return (
    <>
    <h2>Login</h2>
    <form action ="">
        <div className= 'input-group'> 
            <label htmlFor="Email">Email</label>
            <input type="email" name="" id="email" placeholder='Enter Your Email'/>
</div>
<div className= 'input-group'>
<label htmlFor="password">Password</label>  
<input type="password" name="" id="password" placeholder='Enter Your Password'/>    
    </div>
    <button type='submit'>Login</button>    
    </form>
    </>
  )
}
