import React, { useState, useContext } from 'react'
import { Link, useNavigate } from "react-router-dom";
import Validate from '../Validators/Loginvalidator'
import AuthContext from '../Auth/AuthContext'

const Login = () => {

  const { LoginUsers, loading, error, userdata } = useContext(AuthContext)
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [formError, setFormError] = useState({})
  const [rememberme, setRememberMe] = useState(false)
  const [isError, setIsError] = useState(false)

  const formDataonChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })

  }

  const formDataonSubmit = (e) => {
    e.preventDefault()
    setFormError(Validate(formData))
    if (Object.keys(formError).length === 0 && rememberme) {
      LoginUsers(formData)
      if (!error) {
        localStorage.setItem("authTokens", userdata?.data?.token)
        localStorage.setItem("authID", userdata?.data?.id)
        navigate({
          pathname: '/',
        });
      } else {
        setIsError(true);
      }
    }
  }
  console.log(loading, error, userdata, isError)

  return (
    <>
      <section className="vh-100 m-5">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="Sample image" />
            </div>

            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">

              {isError && <div class="alert alert-danger alert-dismissible fade show" role="alert">
                <span class="text-danger small fw-bold">{error}</span>
                <button type="button" class="btn-close" onClick={(e) => setIsError(false)} ></button>
              </div>}

              <form>
                <div className="form-outline mb-4">
                  <span class="text-danger small fw-bold">{formError?.email}</span>
                  <input type="Email" id="form3Example3" className="form-control form-control-lg"
                    placeholder="Enter a valid Email address" autoComplete="on" name='email' required onChange={formDataonChange} />

                  <label className="form-label" for="form3Example3">Email</label>

                </div>


                <div className="form-outline mb-3">
                  <span class="text-danger small fw-bold">{formError?.password}</span>
                  <input type="password" id="form3Example4" className="form-control form-control-lg"
                    placeholder="Enter password" autoComplete="on" name='password' required onChange={formDataonChange} />

                  <label className="form-label" for="form3Example4">Password</label>
                </div>

                <div className="d-flex justify-content-between align-items-center">
                  <div className="form-check mb-0">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" required onChange={() => setRememberMe(!rememberme)} />
                    <label className="form-check-label" for="form2Example3">
                      Remember me
                    </label>
                  </div>
                  {/* <a href="#!" className="text-body">Forgot password?</a> */}
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <button type="Submit" className="btn btn-primary btn-lg" style={{ paddingleft: "2.5rem", paddingright: "2.5rem" }} onClick={formDataonSubmit}>Login</button>
                  {loading && <div class="spinner-border m-2 " role="status">
                    <span class="sr-only">Loading...</span>
                  </div>}
                  <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <Link to={"/register"}
                    className="link-danger">Register</Link></p>
                </div>

              </form>
            </div>
          </div>
        </div>
      </section >
    </>
  )
}

export default Login