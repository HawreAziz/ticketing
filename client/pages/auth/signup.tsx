import React, { useState } from 'react';
import { Header } from '../../components/Header';
import Router from 'next/router';
import { useRequest } from '../../hooks/useRequest';


const SignUp: React.FC = () => {
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const { errors, doRequest } = useRequest({
      uri: '/api/users/signup',
      method: 'post', body: {
      email, password
    },
    onSuccess: () => {Router.push('/')}
    });

    const onSubmit = async () => {
      await doRequest();
  }

  const formatErrors = () => {
    if(errors.length === 0){
      return null;
    }
    return (
      <div className="error__container">
        <h2>Ooops...</h2>
        <ul>
          {
            errors?.map((error: any) => (
              <li key={error.message}>{error.message}</li>
            ))
          }
        </ul>
      </div>
    )
  }

  return (
    <>
    <Header />
    <div className="landing__form">
    <div className="inner_div">
      <h1>Sign Up</h1>
      <div className="form-group landing">
        <label>Email Address</label>
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="form-control p-3 h-25"
          placeholder="Enter email"
        />
      </div>
      <div className="form-group landing">
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="form-control p-3 h-25"
          placeholder="Password"
        />
      </div>
      {formatErrors()}
      <button
        className="btn btn-primary"
        onClick={onSubmit}
      >
        Sign up
      </button>
    </div>
    </div>
    </>
  )
}


export default SignUp;
