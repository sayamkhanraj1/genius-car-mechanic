import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import './Login.css'


const Login = () => {
        const {singInIUseingGoogle} = useAuth();

         return (
                  <div className="login-body d-flex justify-content-center align-items-center">
                          <div className="w-25 login-form">
                                   <h2 className="mb-4 fw-bold fs-2">LOGIN</h2>
                           <div className="form-floating mb-3">
                           <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                           <label htmlFor="floatingInput">Email address</label>
                           </div>
                           <div className="form-floating">
                           <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                           <label htmlFor="floatingPassword">Password</label>
                           </div>
                           <button className="sing-in">Sing In</button><br />
                           <button onClick={singInIUseingGoogle} className="btn btn-info mt-3">Google Sing In</button>
                                   </div> 
                  </div>
         );
};

export default Login;