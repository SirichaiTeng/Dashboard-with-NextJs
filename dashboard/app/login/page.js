'use client'
import {login} from './action'
import {useFormState} from 'react-dom'
export default function Loginpage() {
  const initState = {
    message:''
  }
 const [state,formAction] = useFormState(login,initState)
  return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="card bg-light opacity-75" style={{  width: "400px" }}>
          <div className="card-body">
            <h5 className="card-title text-center mb-4">LOGIN</h5>
            <form action={formAction}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  name='email'
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name='password'
                  placeholder="Enter your password"
                />
                <div>
                  Message: {state.message}
                </div>
              <a href="./register">Register ?</a>
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Summit
              </button>
            </form>
          </div>
        </div>
      </div>
  );
}
